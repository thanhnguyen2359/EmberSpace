window.App = require('app');

var regString,
  excludeString,
  fileList = window.require.list();

var requireOrder = {
  scripts: [
    'application', // Always include application helper first
  ],
  templates: [
  ]
}

var folderOrder = ['scripts','templates'];

folderOrder.forEach(function(folder){

  //Require before
  requireOrder[folder].forEach(function(module){
    require( folder + '/' + module);
  });

  //Require after
  excludeString = requireOrder[folder].join('$|');
  regString = '^'+folder+'/(?!' + excludeString + '$)';
  fileList.filter(function(module){
    return new RegExp(regString).test(module);
  }).forEach(function(module){
    require(module);
  });

})

require('router');