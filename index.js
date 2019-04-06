'use strict';
const isAbsoluteUrl = require('is-absolute-url');

module.exports = url => {
	return !isAbsoluteUrl(url);
};
