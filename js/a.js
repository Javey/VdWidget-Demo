function(obj, _Vdt, blocks) {
    _Vdt || (_Vdt = Vdt);
    blocks || (blocks = {});
    var h = _Vdt.virtualDom.h, widgets = this.widgets || {}, _blocks = {}, __blocks = {},
        hasOwn = Object.prototype.hasOwnProperty,
        extend = function(dest, source) {
            if (source) {
                for (var key in source) {
                    if (hasOwn.call(source, key)) {
                        dest[key] = source[key];
                    }
                }
            }
            return dest;
        };
    with (obj || {}) {
        var base = require('rvdt!tpl/base.vdt'),
            Animate = require('js/components/animate');

        return (function(blocks) {
            var _blocks = {}, __blocks = extend({}, blocks), _obj = extend({'title': '首页'} || {}, obj);
            return base.call(this, _obj, _Vdt, (_blocks.body = function(parent) {
                return ['         ', parent(), '         ', new Animate({
                    'ev-click': _.bind(this.change, this),
                    'children': ['             ', new Animate({
                        'tagName': 'span',
                        'children': [this.get('page')]
                    }, typeof widgets === "undefined" ? {} : widgets), '         ']
                }, typeof widgets === "undefined" ? {} : widgets), '     '];
            }) && (__blocks.body = function(parent) {
                var self = this;
                return blocks.body ? blocks.body.call(this, function() {
                    return _blocks.body.call(self, parent);
                }) : _blocks.body.call(this, parent);
            }) && __blocks)
        }).call(this, blocks)
    }
}

function(obj, _Vdt, blocks) {
    _Vdt || (_Vdt = Vdt);
    blocks || (blocks = {});
    var h = _Vdt.virtualDom.h, widgets = this.widgets || {}, _blocks = {}, __blocks = {},
        hasOwn = Object.prototype.hasOwnProperty,
        extend = function(dest, source) {
            if (source) {
                for (var key in source) {
                    if (hasOwn.call(source, key)) {
                        dest[key] = source[key];
                    }
                }
            }
            return dest;
        };
    with (obj || {}) {
        var base = require('rvdt!tpl/base.vdt'),
            Animate = require('js/components/animate');

        return h('div', {'title': '首页'}, ['         ', new Animate({
            'ev-click': _.bind(this.change, this),
            'children': ['             ', new Animate({
                'tagName': 'span',
                'children': [this.get('page')]
            }, typeof widgets === "undefined" ? {} : widgets), '         ']
        }, typeof widgets === "undefined" ? {} : widgets), ' '])
    }
}

function(obj, _Vdt, blocks) {
    _Vdt || (_Vdt = Vdt);
    blocks || (blocks = {});
    var h = _Vdt.virtualDom.h, widgets = this.widgets || {}, _blocks = {}, __blocks = {},
        hasOwn = Object.prototype.hasOwnProperty,
        extend = function(dest, source) {
            if (source) {
                for (var key in source) {
                    if (hasOwn.call(source, key)) {
                        dest[key] = source[key];
                    }
                }
            }
            return dest;
        };
    with (obj || {}) {
        var base = require('rvdt!tpl/base.vdt'),
            Test = require('js/components/test'),
            Animate = require('js/components/animate');

        return h('div', {'title': '首页'}, ['     ', new Test({
            'children': ['         ', new Animate({
                'ev-click': _.bind(this.change, this),
                'children': ['             ', h('div', {'tagName': 'span'}, [this.get('page')]), '         ']
            }, typeof widgets === "undefined" ? {} : widgets), '     ']
        }, typeof widgets === "undefined" ? {} : widgets), ' '])
    }
}

function(obj, _Vdt, blocks) {
    _Vdt || (_Vdt = Vdt);
    blocks || (blocks = {});
    var h = _Vdt.virtualDom.h, widgets = this.widgets || {}, _blocks = {}, __blocks = {},
        hasOwn = Object.prototype.hasOwnProperty,
        extend = function(dest, source) {
            if (source) {
                for (var key in source) {
                    if (hasOwn.call(source, key)) {
                        dest[key] = source[key];
                    }
                }
            }
            return dest;
        };
    with (obj || {}) {
        var base = require('rvdt!tpl/base.vdt'),
            Animate = require('js/components/animate');

        return (function(blocks) {
            var _blocks = {}, __blocks = extend({}, blocks), _obj = extend({'title': '首页'} || {}, obj);
            return base.call(this, _obj, _Vdt, (_blocks.body = function(parent) {
                return ['         ', parent(), '         ', h('div', {'ev-click': _.bind(this._click, this)}, [this.get('click')]), '         ', h('div', {'ev-click': _.bind(this.change, this)}, ['             ', new Animate({
                    'tagName': 'span',
                    'children': [this.get('page')]
                }, typeof widgets === "undefined" ? {} : widgets), '         ']), '         ', h('input', {
                    'type': 'text',
                    'ev-change': this.add.bind(this)
                }, []), '         ', h('ul', null, ['             ', _.map(this.get('list'), function(item, index) {
                    return new Animate({
                        'tagName': 'li',
                        'ev-click': this.remove.bind(this, item),
                        'children': [item]
                    }, typeof widgets === "undefined" ? {} : widgets)
                }, this), '         ']), '     '];
            }) && (__blocks.body = function(parent) {
                var self = this;
                return blocks.body ? blocks.body.call(this, function() {
                    return _blocks.body.call(self, parent);
                }) : _blocks.body.call(this, parent);
            }) && __blocks)
        }).call(this, blocks)
    }
}

function(obj, _Vdt, blocks) {
    _Vdt || (_Vdt = Vdt);
    blocks || (blocks = {});
    var h = _Vdt.virtualDom.h, widgets = this.widgets || {}, _blocks = {}, __blocks = {},
        hasOwn = Object.prototype.hasOwnProperty,
        extend = function(dest, source) {
            if (source) {
                for (var key in source) {
                    if (hasOwn.call(source, key)) {
                        dest[key] = source[key];
                    }
                }
            }
            return dest;
        };
    with (obj || {}) {
        var Animate = require('js/components/animate');

        return new Animate({
            'className': 'main',
            'children': ['     ', new Animate({
                'tagName': 'header',
                'transition': 'none',
                'children': ['         ', typeof showBack === 'undefined' ? null : new Animate({
                    'transition': 'fade',
                    'className': 'back',
                    'tagName': 'span',
                    'key': 'back',
                    'children': ['back']
                }, typeof widgets === "undefined" ? {} : widgets), '         ', h('span', {'key': 'title'}, [title]), '     ']
            }, typeof widgets === "undefined" ? {} : widgets), '      ', new Animate({
                'className': 'body',
                'children': ['         ', h('a', {'href': '#/'}, ['home']), '         ', h('a', {'href': '#/test'}, ['test']), '         ', h('a', {'href': '#/detail'}, ['detail']), '         ', h('a', {'href': '#/readme'}, ['readme']), '         ', (_blocks.body = function(parent) {
                    return [];
                }) && (__blocks.body = function(parent) {
                    var self = this;
                    return blocks.body ? blocks.body.call(this, function() {
                        return _blocks.body.call(self, parent);
                    }) : _blocks.body.call(this, parent);
                }) && __blocks.body.call(this), '     ']
            }, typeof widgets === "undefined" ? {} : widgets), ' ']
        }, typeof widgets === "undefined" ? {} : widgets)
    }
}