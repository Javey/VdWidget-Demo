define(['vdwidget', 'tpl/home'], function(VdWidget, template) {
    return VdWidget.extend({
        defaults: {
            page: 'home',
            click: 'click',
            list: ['aaaaaaaaaaaaaa', 'bbbbbbbbbbbbb', 'cccccccccccc', 'dddddddddddd'],
            show: true
        },
        template: template,

        _init: function() {
            this.count = 0;
            console.log('111')
        },

        _beforeUpdate: function() {
            //window.appUpdate = false;
        },

        change: function() {
            this.set('page', 'Home click ' + ++this.count);
        },

        _click: function() {
            this.set('click', 'click' + ++this.count);
            //console.log(this.widgets);
        },

        add: function(e) {
            var list = _.clone(this.get('list'));
            list.push(e.target.value);
            this.set('list', list);
        },

        remove: function(item) {
            this.set('list', _.without(this.get('list'), item))
        },

        toggle: function() {
            this.set('show', !this.get('show'));
        },

        _update: function() {
            console.log('home update');
        }
    });
});