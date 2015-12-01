define(['intact', 'tpl/chatDetail', 'underscore', 'js/lib/utils'], function(Intact, template, _, utils) {
    return Intact.extend({
        defaults: {
            chats: []
        },

        displayName: 'ChatDetail',

        template: template,

        _init: function() {
            return this._fetch();
        },

        _fetch: function() {
            return utils.api().then(function(data) {
                var chat = _.find(data, function(chat) {
                    return chat.id == this.get('id');
                }, this);

                this.set('chat', chat);
            }.bind(this));
        }
    });
});
