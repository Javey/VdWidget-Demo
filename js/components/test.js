define(['vdwidget', 'jquery', 'vdt'], function(VdWidget) {
    return VdWidget.extend({
        defaults: {
            tagName: 'div'
        },

        template: '<div class="test">{this.get("children")}</div>'
    });
});