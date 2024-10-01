import { useState } from 'react';
import PropTypes from 'prop-types';
import "./MultiStepForm.css"

const PersonalInfo = ({ nextStep, handleChange, values }) => {
    const [formValues, setFormValues] = useState({
        firstName: values.firstName,
        lastName: values.lastName,
    });
    const [errors, setErrors] = useState({});

    const validate = () => {
        const newErrors = {};
        if (!formValues.firstName) newErrors.firstName = 'First Name is required';
        if (!formValues.lastName) newErrors.lastName = 'Last Name is required';
        return newErrors;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const validationErrors = validate();
        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
        } else {
            handleChange(formValues);
            nextStep();
        }
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormValues({ ...formValues, [name]: value });
        setErrors({ ...errors, [name]: '' }); // Clear error on change
    };

    return (
        <section>
            <div className='container'>

                <div className='multi-form-wrapper'
                >
                    <form
                        className='multi-form'
                        onSubmit={handleSubmit}>
                        <div
                            className='multi-form-input-controls'
                        >
                            <label>First Name</label>
                            <input
                                type="text"
                                name="firstName"
                                value={formValues.firstName}
                                onChange={handleInputChange}
                            />
                            {errors.firstName && <div style={{ color: 'red' }}>{errors.firstName}</div>}
                        </div>
                        <div
                            className='multi-form-input-controls'
                        >

                            <label>Last Name</label>
                            <input

                                type="text"
                                name="lastName"
                                value={formValues.lastName}
                                onChange={handleInputChange}
                            />
                            {errors.lastName && <div style={{ color: 'red' }}>{errors.lastName}</div>}
                        </div>
                        <button type="submit">Next</button>
                    </form>

                </div>



            </div>

        </section>

    );
};


PersonalInfo.propTypes = {
    nextStep: PropTypes.func.isRequired,
    handleChange: PropTypes.func.isRequired,
    values: PropTypes.shape({
        firstName: PropTypes.string.isRequired,
        lastName: PropTypes.string.isRequired,
    }).isRequired,
};

export default PersonalInfo;
