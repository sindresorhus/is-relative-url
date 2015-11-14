import test from 'ava';
import fn from './';

test(t => {
	t.false(fn('http://sindresorhus.com'));
	t.false(fn('https://sindresorhus.com'));
	t.false(fn('file://sindresorhus.com'));
	t.true(fn('//sindresorhus.com'));
	t.true(fn('/foo/bar'));
	t.true(fn('foo/bar'));
	t.true(fn('foo'));
	t.end();
});
