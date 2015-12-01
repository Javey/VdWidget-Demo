define(['intact', 'vdt'], function(Intact, Vdt) {
    var Widget = Intact.extend({
        defaults: {
            view: '',
            data: {}
        },

        displayName: 'App',

        // template: Vdt.compile('return this.get("view") && this.get("view")(this.get("data")) || <div>加载中...</div>', {autoReturn: false}),
        template: Vdt.compile('return this.get("view") || <div>加载中...</div>', {autoReturn: false}),

        load: function(page, data) {
            var self = this;
            require(['js/pages/' + page], this._current = function callee(Widget) {
                if (callee !== self._current) return;
                var widget = new Widget(data);
                if (widget.inited) {
                   self.set('view', widget);
                } else {
                   widget.on('inited', function() {
                       if (callee === self._current) {
                           self.set('view', widget);
                       }
                   });
                }
                // self.set({
                    // 'view': Widget,
                    // 'data': data
                // });
            });
            return this;
        }
    });

    return Intact.mount(Widget, document.getElementById('page'));
});
