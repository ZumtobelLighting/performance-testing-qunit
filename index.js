/* jshint node: true */
'use strict';

module.exports = {
  name: 'performance-tests',
  included: function included(app) {
    this._super.included(app);
    if (app.tests) {
      app.import('vendor/performance-tests/setup-qunit-performance.js');
    }
  }
};
