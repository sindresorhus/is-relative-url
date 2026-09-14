import isAbsoluteUrl from 'is-absolute-url';

export default function isRelativeUrl(url, options = {}) {
	const {allowProtocolRelative = true} = options;

	// Check for a protocol-relative URL: two leading slash or backslash separators.
	// Browsers accept `\` in place of `/` here, so `\\example.com`, `/\example.com`
	// and `\/example.com` are protocol-relative too.
	if (!allowProtocolRelative && typeof url === 'string' && /^[\\/]{2}/.test(url)) {
		return false;
	}

	return !isAbsoluteUrl(url);
}
