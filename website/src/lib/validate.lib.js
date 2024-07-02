export const isNumber = (value) => {
	return !isNaN(value);
};

export const isEmail = (value) => {
	const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
	return emailRegex.test(value);
};

export const isPhoneNumber = (value) => {
	const phoneNumberRegex = /^\+?[0-9]{8,}$/;
	return phoneNumberRegex.test(value);
};

export const isUrl = (value) => {
	try {
		new URL(value);
		return true;
	} catch (error) {
		return false;
	}
};

export const isUrlWithDomain = (value, domain) => {
	// start with https:// or http://
	const urlRegex = /^(https?:\/\/)/;
	if (!urlRegex.test(value)) {
		value = "https://" + value;
	}
	try {
		const url = new URL(value);
		return url.hostname.includes(domain);
	} catch (error) {
		return false;
	}
};

export const isRequired = (value) => {
	return value !== "";
};

export const isMinLength = (value, length) => {
	return value.length >= length;
};

export const isMaxLength = (value, length) => {
	return value.length <= length;
};

export const isMinValue = (value, min) => {
	return value >= min;
};

export const isMaxValue = (value, max) => {
	return value <= max;
};

export const isMatch = (value, match) => {
	return value === match;
};

export const isNameValid = (value) => {
	const nameRegex = /^[A-Za-z]+(?:\s[A-Za-z]+)*$/;
	return nameRegex.test(value.trim());
};

export const isAllWhiteSpace = (value) => {
	const whiteSpaceRegex = /^\s+$/;
	return whiteSpaceRegex.test(value);
}

export const isPasswordValid = (value) => {
	const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;
	return passwordRegex.test(value);
};
