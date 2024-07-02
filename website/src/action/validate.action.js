import {
	isEmail,
	isMatch,
	isMaxLength,
	isMaxValue,
	isMinLength,
	isMinValue,
	isNameValid,
	isPasswordValid,
	isPhoneNumber,
	isRequired,
	isAllWhiteSpace,
	isUrlWithDomain,
} from "../lib/validate.lib";

export const validateSimpleForm = (data) => {
	const {
		name,
		email,
		phoneNumber,
		githubUrl,
		yearsOfExperience,
		password,
		confirmPassword,
	} = data;
	const errors = {};

	// validate name
	/* Rules:
    - Required
    - Minimum 3 characters
    - Maximum 100 characters
    - Alphabets and space only
  */
	if (!isMinLength(name, 3) || !isMaxLength(name, 100)) {
		errors.name =
			"Name must be at least 3 characters and at most 100 characters";
	}
	if (!isNameValid(name)) {
		errors.name = "Name must be alphabets and whitespace only";
	}
	if (isAllWhiteSpace(name)) {
		errors.name = "Name must not be all whitespace";
	}
	if (!isRequired(name)) {
		errors.name = "Name is required";
	}

	// validate email
	/* Rules:
    - Required
    - Valid email format
  */
	if (!isEmail(email)) {
		errors.email = "Email is not valid";
	}
	if (!isRequired(email)) {
		errors.email = "Email is required";
	}

	// validate phone number
	/* Rules:
    - Required
    - Valid phone number format
  */
	if (!isPhoneNumber(phoneNumber)) {
		errors.phoneNumber = "Phone number is not valid";
	}
	if (!isRequired(phoneNumber)) {
		errors.phoneNumber = "Phone number is required";
	}

	// validate github URL
	/* Rules:
    - Required
    - Valid URL format
  */
	if (!isUrlWithDomain(githubUrl, "github.com")) {
		errors.githubUrl = "GitHub URL is not valid";
	}
	if (!isRequired(githubUrl)) {
		errors.githubUrl = "GitHub URL is required";
	}

	// validate years of experience
	/* Rules:
    - Required
    - Minimum 1
    - Maximum 10
  */
	if (!isMinValue(yearsOfExperience, 1) || !isMaxValue(yearsOfExperience, 10)) {
		errors.yearsOfExperience = "Years of experience must be between 1 and 10";
	}
	if (!isRequired(yearsOfExperience)) {
		errors.yearsOfExperience = "Years of experience is required";
	}

	// validate password
	/* Rules:
    - Required
    - Minimum 8 characters
    - At least 1 uppercase letter
    - At least 1 lowercase letter
    - At least 1 number
    - Must match with confirm password
  */
	if (!isMatch(password, confirmPassword)) {
		errors.confirmPassword = "Password doesn't match";
		errors.password = "Password doesn't match";
	}

	if (!isPasswordValid(password)) {
		errors.password = "Password is not valid";
	}
	if (!isMinLength(password, 8)) {
		errors.password = "Password must be at least 8 characters";
	}

	if (!isPasswordValid(confirmPassword)) {
		errors.confirmPassword = "Password is not valid";
	}
	if (!isRequired(confirmPassword)) {
		errors.confirmPassword = "Password is required";
	}
	if (!isMinLength(confirmPassword, 8)) {
		errors.confirmPassword = "Password must be at least 8 characters";
	}

	return errors;
};
