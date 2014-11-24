var App = require('app');


App.SignupRoute = Em.Route.extend({
  renderTemplate: function() {
    this.render({ outlet: 'global' });
  }
});

App.SignupController = App.BasedController.extend({});

App.SignupView = Em.View.extend({

});