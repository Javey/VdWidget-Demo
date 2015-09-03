define(['vdwidget', 'tpl/base', 'jquery', 'js/components/animateGroup'], function(VdWidget, template, $, AnimateGroup) {
    var Widget = VdWidget.extend({
        defaults: {
            view: ''
        },

        _init: function() {
            //this.View = VdWidget.extend({template: '<div></div>'});
            this.AnimateGroup = AnimateGroup;
            this._current = null;
            this._isFirstView = true;
        },

        _create: function() {
            console.log('app create');
        },

        _beforeUpdate: function() {
            console.log('app before update');
            window.appUpdate = true;
        },

        _update: function() {
            console.log('app update');
            window.appUpdate = false;
        },

        _destroy: function() {
            console.log('app destroy');
        },

        template: '<div>{this.get("view")}</div>',

        load: function(page, id) {
            var self = this;
            require(['js/pages/' + page], this._current = function callee(Widget) {
                //self._animate();
                if (callee !== self._current) return;
                //self.View = Widget;
                //self.trigger('change')
                var widget = new Widget({
                    id: id
                });
                if (widget.rendered) {
                    self.set('view', widget);
                } else {
                    widget.on('rendered', function() {
                        if (callee === self._current) {
                            self.set('view', widget);
                        }
                    });
                }
            });
            return this;
        },

        _animate: function() {
            var $element = $(this.element).addClass('active');
            if (!this._isFirstView) {
                var $cloneElement = $element.clone();
                $cloneElement.insertBefore($element);
                $cloneElement[0].offsetWidth = $cloneElement[0].offsetWidth;
                $cloneElement.addClass('animate-leave');
                $cloneElement.one('webkitTransitionEnd', function() {
                    $cloneElement.remove();
                });

                $element.removeClass('active');
                $element[0].offsetWidth = $element[0].offsetWidth;
                $element.addClass('animate-enter');
                $element.one('webkitTransitionEnd', function() {
                    $element.addClass('active').removeClass('animate-enter');
                });
            }
            this._isFirstView = false;
        }
    });

    return VdWidget.mount(Widget, $('#page')[0]);
});
