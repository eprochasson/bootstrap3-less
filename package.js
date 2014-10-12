Package.describe({
  summary: "Bootstrap 3, with Less files.",
  name: "simison:bootstrap3-less",
  version: "3.2.0_1",
  git: "https://github.com/simison/bootstrap3-less",
});

Package.on_use(function (api) {
  api.versionsFrom("METEOR@0.9.0");
  api.use([
    'jquery',
    'less'
  ], 'client');
  
  // javascript
  api.add_files([
    'lib/js/transition.js',
    'lib/js/alert.js',
    'lib/js/button.js',
    'lib/js/carousel.js',
    'lib/js/collapse.js',
    'lib/js/dropdown.js',
    'lib/js/modal.js',
    'lib/js/tooltip.js',
    'lib/js/popover.js',
    'lib/js/scrollspy.js',
    'lib/js/tab.js',
    'lib/js/affix.js'
  ], 'client');
  
  // fonts
  api.add_files([
    'lib/fonts/glyphicons-halflings-regular.eot',
    'lib/fonts/glyphicons-halflings-regular.svg',
    'lib/fonts/glyphicons-halflings-regular.ttf',
    'lib/fonts/glyphicons-halflings-regular.woff'
  ], 'client');
  
  // less imports
  api.add_files([
    'bootstrap.import.less',
    'lib/less/normalize.import.less',
    'lib/less/print.import.less',
    'lib/less/glyphicons.import.less',
    'lib/less/scaffolding.import.less',
    'lib/less/type.import.less',
    'lib/less/code.import.less',
    'lib/less/grid.import.less',
    'lib/less/tables.import.less',
    'lib/less/forms.import.less',
    'lib/less/buttons.import.less',
    'lib/less/component-animations.import.less',
    'lib/less/dropdowns.import.less',
    'lib/less/button-groups.import.less',
    'lib/less/input-groups.import.less',
    'lib/less/navs.import.less',
    'lib/less/navbar.import.less',
    'lib/less/breadcrumbs.import.less',
    'lib/less/pagination.import.less',
    'lib/less/pager.import.less',
    'lib/less/labels.import.less',
    'lib/less/badges.import.less',
    'lib/less/jumbotron.import.less',
    'lib/less/thumbnails.import.less',
    'lib/less/alerts.import.less',
    'lib/less/progress-bars.import.less',
    'lib/less/media.import.less',
    'lib/less/list-group.import.less',
    'lib/less/panels.import.less',
    'lib/less/responsive-embed.import.less',
    'lib/less/wells.import.less',
    'lib/less/close.import.less',
    'lib/less/modals.import.less',
    'lib/less/tooltip.import.less',
    'lib/less/popovers.import.less',
    'lib/less/carousel.import.less',
    'lib/less/utilities.import.less',
    'lib/less/responsive-utilities.import.less',
    'lib/less/bootstrap.import.less',
    'lib/less/theme.import.less',
    'lib/less/variables.import.less',
    'lib/less/mixins.import.less',
    'lib/less/mixins/hide-text.import.less',
    'lib/less/mixins/opacity.import.less',
    'lib/less/mixins/image.import.less',
    'lib/less/mixins/labels.import.less',
    'lib/less/mixins/reset-filter.import.less',
    'lib/less/mixins/resize.import.less',
    'lib/less/mixins/responsive-visibility.import.less',
    'lib/less/mixins/size.import.less',
    'lib/less/mixins/tab-focus.import.less',
    'lib/less/mixins/text-emphasis.import.less',
    'lib/less/mixins/text-overflow.import.less',
    'lib/less/mixins/vendor-prefixes.import.less',
    'lib/less/mixins/alerts.import.less',
    'lib/less/mixins/buttons.import.less',
    'lib/less/mixins/panels.import.less',
    'lib/less/mixins/pagination.import.less',
    'lib/less/mixins/list-group.import.less',
    'lib/less/mixins/nav-divider.import.less',
    'lib/less/mixins/forms.import.less',
    'lib/less/mixins/progress-bar.import.less',
    'lib/less/mixins/table-row.import.less',
    'lib/less/mixins/background-variant.import.less',
    'lib/less/mixins/border-radius.import.less',
    'lib/less/mixins/gradients.import.less',
    'lib/less/mixins/clearfix.import.less',
    'lib/less/mixins/center-block.import.less',
    'lib/less/mixins/nav-vertical-align.import.less',
    'lib/less/mixins/grid-framework.import.less',
    'lib/less/mixins/grid.import.less'
  ], 'client', {isAsset: true});
  
});
