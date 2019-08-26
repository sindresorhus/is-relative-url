'use strict';
var isAbsoluteUrl = require('is-absolute-url');

module.exports = url => !isAbsoluteUrl(url);
