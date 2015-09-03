define(['vdwidget', 'tpl/detail'], function(VdWidget, template) {
    return VdWidget.extend({
        template: template,

        _init: function() {
            console.log('init')
        },

        _beforeUpdate: function() {
            console.log('detail before update');
            //window.appUpdate = false;
        },

        _create: function() {
            console.log('create');
        },

        _update: function() {
            console.log('update');
        },

        _destroy: function() {
            console.log('destroy', arguments);
        }
    });
});