const FormField = ({ type, placeholder, name, title, description, register, error, valueAsNumber }) => (
	<div className='Form-field'>
		<label className='Form-label'>{title}</label>
		<input
			className={`Form-input ${error ? 'Form-input-error' : ''}`}
			type={type}
			placeholder={placeholder}
			{...register(name, { valueAsNumber })}
		/>
		{error && <span className='Form-error'>{error.message}</span>}
		{description && <label className="Form-description">{description}</label>}
	</div>
);
export default FormField;
