/**
Check if an URL is relative.

@param url - The URL to inspect.

@example
```
import isRelativeUrl = require('is-relative-url');

isRelativeUrl('foo/bar');
//=> true

isRelativeUrl('http://sindresorhus.com/foo/bar');
//=> false

isRelativeUrl('//sindresorhus.com');
//=> true
```
*/
declare function isRelativeUrl(url: string): boolean;

export = isRelativeUrl;
