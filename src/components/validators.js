export const required = value => {
	return value ? undefined : 'Required';
};

export const atLeastThree = value => {
	return value.length >= 3 ? undefined : 'Must be at least 3 Characters';
};

export const atLeastEight = value => {
	return value.length >= 8 ? undefined : 'Must be at least 8 Characters';
};

export const isValidEmail = email => {
	if (email === undefined) {
		return;
	}
	const regex = /\S+@\S+\.\S+/;
	return regex.test(email) ? undefined : 'Not a valid email';
};

export const emailTooLong = value => {
	return value.length < 72
		? undefined
		: 'Password must be less than 72 characters';
};

export const passwordsMatch = (value, allValues) => {
	return value === allValues.password ? undefined : "Passwords don't match";
};

export const length = length => value => {
	if (length.min && value.length < length.min) {
		return `Must be at least ${length.min} characters long`;
	}
	if (length.max && value.length > length.max) {
		return `Must be at most ${length.max} characters long`;
	}
};
