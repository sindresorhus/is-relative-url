import test from 'ava';
import isRelativeUrl from './index.js';

test('main', t => {
	t.false(isRelativeUrl('http://sindresorhus.com'));
	t.false(isRelativeUrl('https://sindresorhus.com'));
	t.false(isRelativeUrl('file://sindresorhus.com'));
	t.true(isRelativeUrl('//sindresorhus.com'));
	t.true(isRelativeUrl('/foo/bar'));
	t.true(isRelativeUrl('foo/bar'));
	t.true(isRelativeUrl('foo'));
});

test('with allowProtocolRelative option', t => {
	// Default behavior (allowProtocolRelative: true)
	t.true(isRelativeUrl('//sindresorhus.com'));
	t.true(isRelativeUrl('//sindresorhus.com', {}));
	t.true(isRelativeUrl('//sindresorhus.com', {allowProtocolRelative: true}));

	// Strict mode (allowProtocolRelative: false)
	t.false(isRelativeUrl('//sindresorhus.com', {allowProtocolRelative: false}));
	t.false(isRelativeUrl('//example.com/path', {allowProtocolRelative: false}));
	t.false(isRelativeUrl('//example.com/path?query=1', {allowProtocolRelative: false}));

	// Should not affect other URL types
	t.true(isRelativeUrl('/foo/bar', {allowProtocolRelative: false}));
	t.true(isRelativeUrl('foo/bar', {allowProtocolRelative: false}));
	t.true(isRelativeUrl('foo', {allowProtocolRelative: false}));
	t.false(isRelativeUrl('http://example.com', {allowProtocolRelative: false}));
	t.false(isRelativeUrl('https://example.com', {allowProtocolRelative: false}));

	// Data URIs should still be absolute
	t.false(isRelativeUrl('data:text/plain,Hello', {allowProtocolRelative: false}));
	t.false(isRelativeUrl('data:text/plain,Hello', {allowProtocolRelative: true}));
});
