/* global require, module */

var EmberApp = require('ember-cli/lib/broccoli/ember-app');

var app = new EmberApp();

// Importing bootstrap
app.import('vendor/bootstrap/dist/css/bootstrap.min.css');
app.import('vendor/bootstrap/dist/js/bootstrap.min.js');

// Localstorage
app.import('vendor/ember-localstorage-adapter/localstorage_adapter.js');

module.exports = app.toTree();
