import {expectType} from 'tsd';
import isRelativeUrl = require('.');

expectType<boolean>(isRelativeUrl('foo/bar'));
