exports.config =
  # See http://brunch.io/#documentation for docs.
  files:
    javascripts:
      joinTo:
        'javascripts/app.js': /^app/
        'javascripts/vendor.js': /^vendor\/(?!node)/
      order:
        before: [
          'vendor/scripts/jquery.js',
          'vendor/scripts/bootstrap.js',
        ]

    stylesheets:
      joinTo: 'stylesheets/app.css'
      order:
        before: [
          'vendor/styles/bootstrap.css'
        ]

    templates:
      joinTo: 'javascripts/template.js' : /^app/

  modules:
    wrapper: false

  plugins:
    jade:
      pretty: yes
    static_jade:
      extension: ".static.jade"
