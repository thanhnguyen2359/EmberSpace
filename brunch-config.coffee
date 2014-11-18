exports.config =

  files:
    javascripts:
      joinTo:
        'javascripts/app.js': /^app/
        'javascripts/vendor.js': /^(bower_components|vendor)/
      order:
        before: []

    stylesheets:
      joinTo:
        'stylesheets/app.css': /^app/
        'stylesheets/vendor.css': /^(bower_components|vendor)/
      order:
        before: [
          'app/styles/main.styl'
        ]
    templates:
      precompile: true
      root: 'templates'
      defaultExtension: 'emblem'
      joinTo:  'javascripts/template.js': /^app/
      paths:
        # If you don't specify jquery and ember there,
        # raw (non-Emberized) Handlebars templates will be compiled.
        jquery: 'bower_components/jquery/dist/jquery.js'
        ember: 'bower_components/ember/ember.js'
        handlebars: 'bower_components/handlebars/handlebars.js'
        emblem: 'bower_components/emblem/dist/emblem.js'

  modules:
    wrapper: 'amd'
    definition: 'amd'

  # plugins:
  #   jade:
  #     pretty: yes
  #   static_jade:
  #     extension: ".static.jade"
