import isAbsoluteUrl from 'is-absolute-url';

export default function isRelativeUrl(url, options = {}) {
	const {allowProtocolRelative = true} = options;

	// Check if it's a protocol-relative URL (starts with //).
	// Browsers treat backslashes as slashes here, so `\\example.com`,
	// `/\example.com` and `\/example.com` are protocol-relative too and would
	// otherwise pass this check while still navigating to another origin.
	if (!allowProtocolRelative && typeof url === 'string' && url.replaceAll('\\', '/').startsWith('//')) {
		return false;
	}

	return !isAbsoluteUrl(url);
}
