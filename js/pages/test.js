define(['vdwidget', 'rvdt!tpl/test.vdt', 'jquery'], function(VdWidget, template, $) {
    return VdWidget.extend({
        template: template,

        _init: function() {
            // emulate api
            var def = $.Deferred(),
                self = this;
            setTimeout(function() {
                self.set('data', {
                    name: 'Javey'
                });
                def.resolve();
            }, 1000);
            return def.promise();
        }
    });
});