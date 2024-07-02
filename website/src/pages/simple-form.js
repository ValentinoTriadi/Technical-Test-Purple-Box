import { useForm } from "react-hook-form";
import FormField from "../component/Form/form-field";
import { validateSimpleForm } from "../action/validate.action";
import "../public/simple-form.css";
import { useDispatch } from "react-redux";
import { updateSimpleForm } from "../store/reducer/simple-form.reducer";
import { Link } from "react-router-dom";

const SimpleForm = () => {
	// Form Hook
	const {
		register,
		handleSubmit,
		formState: { errors },
		setError,
	} = useForm();

	// Redux Action
	const dispatch = useDispatch();

	// Submit Handler
	function onSubmit(data) {
		// Validate form
		const error = validateSimpleForm(data);
		for (const key in error) {
			setError(key, { message: error[key] });
		}
		if (Object.keys(error).length > 0) {
			return;
		}

		// update form data to redux store
		dispatch(updateSimpleForm(data));

		alert("Form submitted successfully");
	}

	return (
		<form
			onSubmit={handleSubmit(onSubmit)}
			className='Main-page'>
			<div className='Card-container animation-fade-up'>
				<h1 className='Title'>Simple Form</h1>

				<FormField
					type='text'
					placeholder='Full Name'
					name='name'
					title='Full Name'
					register={register}
					error={errors.name}
				/>

				<FormField
					type='text'
					placeholder='123@example.com'
					name='email'
					title='Email'
					register={register}
					error={errors.email}
				/>

				<FormField
					type='text'
					placeholder='+628123456789'
					name='phoneNumber'
					title='Phone Number'
					description='Include country code (e.g. +62)'
					register={register}
					error={errors.phoneNumber}
				/>

				<FormField
					type='text'
					placeholder='GitHub URL'
					name='githubUrl'
					title='GitHub URL'
					description='Include your GitHub profile URL'
					register={register}
					error={errors.githubUrl}
				/>

				<FormField
					type='number'
					placeholder='Years of Experience (1 - 10)'
					name='yearsOfExperience'
					title='Years of Experience'
					description='Years of experience in Software Engineering'
					register={register}
					error={errors.yearsOfExperience}
					valueAsNumber
				/>

				<FormField
					type='password'
					placeholder='Password'
					name='password'
					title='Password'
					description='Password must contain at least 8 characters, including uppercase, lowercase, and number'
					register={register}
					error={errors.password}
				/>

				<FormField
					type='password'
					placeholder='Confirm Password'
					name='confirmPassword'
					title='Confirm Password'
					register={register}
					error={errors.confirmPassword}
				/>

				<button
					type='submit'
					className='button'>
					Submit
				</button>
			</div>
			<button
				type='button'
				style={{ width: "80%", maxWidth: "800px"}}
				className='button animation-fade-up-delay'>
				<Link
					to='/simple-form-result'
					className='Link-button'>
					Next
				</Link>
			</button>
		</form>
	);
};

export default SimpleForm;
