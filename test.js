import test from 'ava';
import m from './';

test(t => {
	t.false(m('http://sindresorhus.com'));
	t.false(m('https://sindresorhus.com'));
	t.false(m('file://sindresorhus.com'));
	t.true(m('//sindresorhus.com'));
	t.true(m('/foo/bar'));
	t.true(m('foo/bar'));
	t.true(m('foo'));
});
