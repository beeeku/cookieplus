export const getCookie = (key: string) => {
	const cookiesSplat = document.cookie.split(/;\s*/);

	for (let i = 0; i < cookiesSplat.length; i++) {
		const ps = cookiesSplat[i].split('=');
		const k = decodeURIComponent(ps[0]);
		if (k === key) return decodeURIComponent(ps[1]);
	}
};
export const setCookie = (
	key: string,
	value: string,
	options: {
		expires?: string;
		path?: string;
		domain?: string;
		secure?: boolean;
	} = {}
) => {
	let newCookie = encodeURIComponent(key) + '=' + encodeURIComponent(value);

	if (options?.expires) {
		newCookie += '; expires=' + options.expires;
	}
	if (options?.path) {
		newCookie += '; path=' + options.path;
	}
	if (options?.domain) {
		newCookie += '; domain=' + options.domain;
	}
	if (options?.secure) {
		newCookie += '; secure';
	}

	document.cookie = newCookie;
	return newCookie;
};
export const removeCookie = (key: string) => {
	document.cookie = key + '=;expires=Thu, 01 Jan 1970 00:00:01 GMT;';
};

export const clearCookie = () => {
	const cookiesSplat = document.cookie.split(/;\s*/);
	for (let i = 0; i < cookiesSplat.length; i++) {
		removeCookie(decodeURIComponent(cookiesSplat[i].split('=')[0]));
	}
};
