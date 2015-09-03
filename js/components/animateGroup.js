define(['vdwidget', 'jquery', 'vdt', 'underscore', 'tpl/animate'], function(VdWidget, $, Vdt, _, tpl) {
    var template = 'return h(this.get("tagName"), _.extend({}, this.get()), _.values(this.childrenMap))';

    return VdWidget.extend({
        defaults: {
            tagName: 'div',
            transition: 'animate'
        },

        name: 'AnimateGroup',
        id: 'AnimateGroup',

        _init: function() {
            this._ = _;
            this.key = this.get('key');
            this.childrenMap = this.getChildMapping(this.children);
            this.pointer = {
                children: this.children,
                vdt: this.vdt
            };
            this.currentKeys = {};
            this.keysToEnter = [];
            this.keysToLeave = [];
        },

        template: Vdt.compile(template, {autoReturn: false}),

        _beforeUpdate: function(preWidget) {
            if (!preWidget) return;
            this.currentKeys = preWidget.currentKeys;
            var nextChildMapping = this.childrenMap;
            var preChildMapping = _.extend({}, preWidget.childrenMap);
            this.pointer = _.extend(preWidget.pointer, this.pointer);

            this.childrenMap = this.merge(preWidget.childrenMap, nextChildMapping);

            _.each(nextChildMapping, function(value, key) {
                if (nextChildMapping[key] && !(preChildMapping && preChildMapping.hasOwnProperty(key)) && !this.currentKeys[key]) {
                    this.keysToEnter.push(key);
                }
            }, this);

            _.each(preChildMapping, function(value, key) {
                if (preChildMapping[key] && !(nextChildMapping && nextChildMapping.hasOwnProperty(key)) && !this.currentKeys[key]) {
                    this.keysToLeave.push(key);
                }
            }, this);
        },

        _update: function(preWidget) {
            if (!preWidget) return;
            var keysToEnter = this.keysToEnter;
            this.keysToEnter = [];
            keysToEnter.forEach(this.performEnter, this);

            var keysToLeave = this.keysToLeave;
            this.keysToLeave = [];
            keysToLeave.forEach(this.performLeave, this);
        },

        getChildMapping: function(children, ret, index) {
            if (!children) {
                return children;
            }
            ret = ret || {};
            index = index || '0';
            var self = this;
            _.each(children, function(child, _index) {
                if (child && child.type === 'Widget') {
                    ret[child.key] = child;
                } else if (_.isArray(child)) {
                    self.getChildMapping(child, ret, index + _index);
                } else {
                    ret[index + _index] = child;
                }
            });
            return ret;
        },

        merge: function(prev, next) {
            prev = prev || {};
            next = next || {};

            function getValueForKey(key) {
                if (next.hasOwnProperty(key)) {
                    return next[key];
                } else {
                    return prev[key];
                }
            }

            // For each key of `next`, the list of keys to insert before that key in
            // the combined list
            var nextKeysPending = {};

            var pendingKeys = [];
            for (var prevKey in prev) {
                if (next.hasOwnProperty(prevKey)) {
                    if (pendingKeys.length) {
                        nextKeysPending[prevKey] = pendingKeys;
                        pendingKeys = [];
                    }
                } else {
                    pendingKeys.push(prevKey);
                }
                //delete prev[prevKey];
            }

            var i;
            var childMapping = {};
            for (var nextKey in next) {
                if (nextKeysPending.hasOwnProperty(nextKey)) {
                    for (i = 0; i < nextKeysPending[nextKey].length; i++) {
                        var pendingNextKey = nextKeysPending[nextKey][i];
                        childMapping[nextKeysPending[nextKey][i]] = getValueForKey(
                            pendingNextKey
                        );
                    }
                }
                childMapping[nextKey] = getValueForKey(nextKey);
            }

            // Finally, add the keys which didn't appear before any key in `next`
            for (i = 0; i < pendingKeys.length; i++) {
                childMapping[pendingKeys[i]] = getValueForKey(pendingKeys[i]);
            }

            for (var key in prev) {
                delete prev[key];
            }
            for (var key in childMapping) {
                prev[key] = childMapping[key];
            }
            return prev;
            //return childMapping;
        },

        performEnter: function(key) {
            var widget = this.childrenMap[key];
            this.currentKeys[key] = true;
            if (widget.enter) {
                widget.enter(_.bind(this.doneEntering, this, key));
            } else {
                this.doneEntering(key);
            }
        },

        performLeave: function(key) {
            var widget = this.childrenMap[key];
            this.currentKeys[key] = true;
            if (widget.leave) {
                widget.leave(_.bind(this.doneLeaving, this, key));
            } else {
                this.doneLeaving(key);
            }
        },

        doneEntering: function(key) {
            delete this.currentKeys[key];
            this.preWidget.vdt.tree = this.pointer.vdt.tree;
            var map = this.getChildMapping(this.pointer.children);
            if (!map[key]) {
                this.performLeave(key);
            }
        },

        doneLeaving: function(key) {
            delete this.currentKeys[key];
            var map = this.getChildMapping(this.pointer.children);
            if (map && map[key]) {
                this.performEnter(key);
            } else {
                delete this.childrenMap[key];
                this.preWidget.vdt.tree = this.pointer.vdt.tree;
                this.animateUpdate(this.preWidget, this.preWidget.element);
            }
        },

        animateUpdate: function(preWidget, domNode) {
            this.vdt.node = domNode;
            this.vdt.tree = preWidget.vdt.tree;
            this.widgets = {};
            this.element = this.vdt.update(this);
            this.pointer.vdt.tree = this.vdt.tree;
        }
    });
});