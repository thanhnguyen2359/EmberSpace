'use strict'

var App = require('app');

App.BasedController = Em.Controller.extend({
  actions:{
    back: function(){
      window.history.back();
    }
  }
});