import { useSelector } from "react-redux";
import "../public/simple-form-result.css";
import { selectSimpleForm } from "../store/reducer/simple-form.reducer";
import { Link } from "react-router-dom";

const SimpleFormResPage = () => {
	const simpleForm = useSelector(selectSimpleForm);
	const data = [
		{
			label: "Full Name",
			value: simpleForm.name,
		},
		{
			label: "Email",
			value: simpleForm.email,
		},
		{
			label: "Phone Number",
			value: simpleForm.phoneNumber,
		},
		{
			label: "Github URL",
			value: simpleForm.githubUrl,
		},
		{
			label: "Years Of Experience",
			value: simpleForm.yearsOfExperience,
		},
		{
			label: "Password",
			value: simpleForm.password,
		},
    {
      label: "Confirm Password",
      value: simpleForm.confirmPassword,
    },
	];

	return (
		<div className='Main-page'>
			<div className='Card-container animation-fade-up'>
				<h1 className='Title'>Simple Form Result</h1>
				<div className='Result-box'>
					{data.map((e) => (
						<div className='Result-field'>
							<p className='Result-label'>{e.label}</p>
							<p className='Result-value'>{e.value}</p>
						</div>
					))}
				</div>
				<button className='button animation-fade-up-delay'>
					<Link to='/' className="Link-button">Back</Link>
				</button>
			</div>
		</div>
	);
};

export default SimpleFormResPage;
