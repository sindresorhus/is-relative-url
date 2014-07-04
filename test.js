'use strict';
var assert = require('assert');
var isRelativeUrl = require('./');

it('should match relative urls', function () {
	assert(!isRelativeUrl('http://sindresorhus.com'));
	assert(!isRelativeUrl('https://sindresorhus.com'));
	assert(!isRelativeUrl('file://sindresorhus.com'));
	assert(!isRelativeUrl('//sindresorhus.com'));
	assert(isRelativeUrl('/foo/bar'));
	assert(isRelativeUrl('foo/bar'));
	assert(isRelativeUrl('foo'));
});
