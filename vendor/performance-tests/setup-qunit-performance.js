jQuery(window).load(function() {
  if (!window.QUnit) return;
  QUnit.config.urlConfig.push({ id: 'noperf', label: 'Skip performance'});
  var TestLoader = require('ember-cli/test-loader')['default'];
  TestLoader.prototype.shouldLoadModule = function(moduleName) {
    return moduleName.match(/\/.*[-_]test$/) || (!QUnit.urlParams.nojshint && moduleName.match(/\.jshint$/)) || 
      (!QUnit.urlParams.noperf && moduleName.match(/\/.*[-_]perf$/))
  };
});
