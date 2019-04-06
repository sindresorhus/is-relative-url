import test from 'ava';
import isRelativeUrl from '.';

test('main', t => {
	t.false(isRelativeUrl('http://sindresorhus.com'));
	t.false(isRelativeUrl('https://sindresorhus.com'));
	t.false(isRelativeUrl('file://sindresorhus.com'));
	t.true(isRelativeUrl('//sindresorhus.com'));
	t.true(isRelativeUrl('/foo/bar'));
	t.true(isRelativeUrl('foo/bar'));
	t.true(isRelativeUrl('foo'));
});
