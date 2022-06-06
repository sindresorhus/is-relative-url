import {expectType} from 'tsd';
import isRelativeUrl from './index.js';

expectType<boolean>(isRelativeUrl('foo/bar'));
