define(['vdwidget', 'rvdt!tpl/base.vdt', 'jquery'], function(VdWidget, template, $) {
    var current;

    var Widget = VdWidget.extend({
        defaults: {
            view: ''
        },

        _init: function() {
            this._isFirstView = true;
        },

        template: '<div class="page">{this.get("view")}</div>',

        load: function(page) {
            var self = this;
            this._animate();
            require(['js/pages/' + page], current = function callee(Widget) {
                if (callee !== current) return;
                var widget = new Widget();
                if (widget.rendered) {
                    self.set('view', widget);
                } else {
                    widget.on('rendered', function() {
                        if (callee === current) {
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