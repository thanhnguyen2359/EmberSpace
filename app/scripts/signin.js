var App = require('app');


App.SigninRoute = Em.Route.extend({
  renderTemplate: function() {
    this.render({ outlet: 'global' });
  }
});

App.SigninController = App.BasedController.extend({});

App.SigninView = Em.View.extend({

});