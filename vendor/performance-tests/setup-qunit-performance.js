jQuery(window).load(function() {
  if (!window.QUnit) return;
  QUnit.config.urlConfig.push({ id: 'perf', label: 'Performance'});
  var TestLoader = require('ember-cli/test-loader')['default'];
  TestLoader.prototype.shouldLoadModule = function(moduleName) {
    return moduleName.match(/\/.*[-_]test$/) || (!QUnit.urlParams.nojshint && moduleName.match(/\.jshint$/)) || 
      (!!QUnit.urlParams.perf && moduleName.match(/\/.*[-_]perf$/))
  };
});
