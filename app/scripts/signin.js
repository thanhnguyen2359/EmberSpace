var App = require('app');


App.SigninRoute = Em.Route.extend({
  renderTemplate: function() {
    this.render({ outlet: 'global' });
  }
});

App.SigninController = App.BasedController.extend({
  actions: {
    facebooklogin: function(){
      FB.login(function(response){
        if(response.status == 'connected'){
          console.log(response.authResponse.accessToken);
        }else if(response.status === 'not_authorized'){
          alert('Not Authorized');
        } else{
          alert('Please login to facebook');
        }
      }, { scope: 'public_profile,email' });
    }
  }
});

App.SigninView = Em.View.extend({

});