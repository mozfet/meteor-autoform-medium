Package.describe({
  name: 'mozfet:autoform-medium',
  version: '2.0.4',
  summary: "Medium editor for AutoForm",
  description: "Medium editor for AutoForm",
  git: "http://github.com/djhi/meteor-autoform-medium.git"
});

Package.onUse(function(api) {
  api.versionsFrom('METEOR@1.4');

  api.use([
    'templating',
    'aldeed:autoform@6.0.0',
    'mediumeditor:mediumeditor@5.2.0',
  ], 'client');

  api.use('ecmascript@0.7.2');

  // TODO: restore when medium editor fixe deactivate
  //api.use('tap:18n', {weak: true});

  api.addFiles([
    'template.html',
    'template.js',
  ], 'client');
});
