define(['director', 'js/app/app'], function(Router, App) {
    return Router({
        '/': function() {
            App.load('home');
        },
        '/test': function() {
            App.load('test');
        },
        '/readme': function() {
            App.load('readme');
        },
        '/detail': function() {
            App.load('detail');
        }
    });
});