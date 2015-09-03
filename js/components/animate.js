define(['vdwidget', 'jquery', 'vdt', 'underscore', 'tpl/animate'], function(VdWidget, $, Vdt, _, tpl) {
    var template = 'return h(this.get("tagName"), _.extend({}, this.get()), this.children)';

    return VdWidget.extend({
        defaults: {
            tagName: 'div',
            transition: 'animate'
        },

        name: 'Animate',
        id: 'Animate',

        _init: function() {
            this.key = this.get('key');
        },

        template: Vdt.compile(template, {autoReturn: false}),

        enter: function(done) {
            var transition = this.get('transition');
            var $element = $(this.element).addClass(transition + '-enter');

            $element.one('webkitTransitionEnd transitionend', function(e) {
                e.stopPropagation();
                $element.removeClass(transition + '-enter ' + transition + '-enter-active');
                done();
            });
            $element[0].offsetWidth = $element[0].offsetWidth;
            $element.addClass(transition + '-enter-active');
        },

        leave: function(done) {
            var transition = this.get('transition');
            var $element = $(this.element).addClass(transition +'-leave');

            $element.addClass(transition + '-leave-active');
            $element.one('webkitTransitionEnd transitionend', function(e) {
                e.stopPropagation();
                $element.removeClass(transition + '-leave ' + transition + '-leave-active');
                done();
            });
        }
    });
});