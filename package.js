Package.describe({
  summary: "Bootstrap 3, with Less files (v3.1.1)."
});

Package.on_use(function (api) {
  api.use('jquery', 'client');
  api.use('less','client');

  var path = Npm.require('path');
  var asset_path = path.join('dist');

  api.add_files(path.join(asset_path, 'js', 'affix.js'), 'client');
  api.add_files(path.join(asset_path, 'js', 'alert.js'), 'client');
  api.add_files(path.join(asset_path, 'js', 'button.js'), 'client');
  api.add_files(path.join(asset_path, 'js', 'carousel.js'), 'client');
  api.add_files(path.join(asset_path, 'js', 'collapse.js'), 'client');
  api.add_files(path.join(asset_path, 'js', 'dropdown.js'), 'client');
  api.add_files(path.join(asset_path, 'js', 'modal.js'), 'client');
  api.add_files(path.join(asset_path, 'js', 'popover.js'), 'client');
  api.add_files(path.join(asset_path, 'js', 'scrollspy.js'), 'client');
  api.add_files(path.join(asset_path, 'js', 'tab.js'), 'client');
  api.add_files(path.join(asset_path, 'js', 'tooltip.js'), 'client');
  api.add_files(path.join(asset_path, 'js', 'transition.js'), 'client');

  // fonts
  api.add_files(path.join(asset_path, 'fonts', 'glyphicons-halflings-regular.eot'), 'client');
  api.add_files(path.join(asset_path, 'fonts', 'glyphicons-halflings-regular.ttf'), 'client');
  api.add_files(path.join(asset_path, 'fonts', 'glyphicons-halflings-regular.svg'), 'client');
  api.add_files(path.join(asset_path, 'fonts', 'glyphicons-halflings-regular.woff'), 'client');
});
