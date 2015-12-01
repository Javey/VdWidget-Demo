define(['intact', 'tpl/chats', 'js/lib/utils'], function(Intact, template, utils) {
    return Intact.extend({
        displayName: 'Chats',
        defaults: {
            chats: []
        },

        template: template,

        _init: function() {
            return utils.api().then(function(data) {
                this.set('chats', data);
            }.bind(this));
        }
    });
});
