var App = require('app');

App.Router.map(function(){
    this.resource('featured');
    this.resource('music');
    this.resource('video');
    this.resource('people');
    this.resource('radio');
    this.resource('signup');
    this.resource('signin');
});