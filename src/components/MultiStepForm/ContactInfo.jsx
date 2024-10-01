import { useState } from 'react';
import PropTypes from 'prop-types';

const ContactInfo = ({ nextStep, prevStep, handleChange, values }) => {
    const [formValues, setFormValues] = useState({
        email: values.email,
        phone: values.phone,
    });
    const [errors, setErrors] = useState({});

    const validate = () => {
        const newErrors = {};
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!formValues.email || !emailPattern.test(formValues.email)) {
            newErrors.email = 'Valid Email is required';
        }
        if (!formValues.phone) newErrors.phone = 'Phone number is required';
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
        setErrors({ ...errors, [name]: '' });
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
                            <label>Email</label>
                            <input
                                type="email"
                                name="email"
                                value={formValues.email}
                                onChange={handleInputChange}
                            />
                            {errors.email && <div style={{ color: 'red' }}>{errors.email}</div>}
                        </div>
                        <div
                         className='multi-form-input-controls'
                        >
                            <label>Phone</label>
                            <input
                                type="text"
                                name="phone"
                                value={formValues.phone}
                                onChange={handleInputChange}
                            />
                            {errors.phone && <div style={{ color: 'red' }}>{errors.phone}</div>}
                        </div>
                        <button type="button" onClick={prevStep}>Back</button>
                        <button type="submit">Next</button>
                    </form>

                </div>



            </div>

        </section>
    );
};


ContactInfo.propTypes = {
    nextStep: PropTypes.func.isRequired,
    prevStep: PropTypes.func.isRequired,
    handleChange: PropTypes.func.isRequired,
    values: PropTypes.shape({
        email: PropTypes.string.isRequired,
        phone: PropTypes.string.isRequired,
    }).isRequired,
};

export default ContactInfo;
