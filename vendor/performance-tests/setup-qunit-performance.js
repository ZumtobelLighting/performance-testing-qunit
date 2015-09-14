jQuery(window).load(function() {
  if (!window.QUnit) return;
  QUnit.config.urlConfig.push({ id: 'includeperf', label: 'Performance'});
  var TestLoader = require('ember-cli/test-loader')['default'];
  TestLoader.prototype.shouldLoadModule = function(moduleName) {
    return moduleName.match(/\/.*[-_]test$/) || (!QUnit.urlParams.nojshint && moduleName.match(/\.jshint$/)) || 
      (QUnit.urlParams.includeperf && moduleName.match(/\/.*[-_]perf$/))
  };
});
