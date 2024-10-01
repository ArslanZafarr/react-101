import PropTypes from 'prop-types';

const Review = ({ prevStep, formData, onSubmit }) => {
    return (

        <section>
            <div className='container'>

                <div className='multi-form-wrapper'
                >

                    <div>

                        <h2>Review Your Information</h2>
                        <p><strong>First Name:</strong> {formData.firstName}</p>
                        <p><strong>Last Name:</strong> {formData.lastName}</p>
                        <p><strong>Email:</strong> {formData.email}</p>
                        <p><strong>Phone:</strong> {formData.phone}</p>
                        <button type="button" onClick={prevStep}>Back</button>
                        <button type="button" onClick={onSubmit}>Submit</button>
                    </div>

                </div>
            </div>
        </section>
    );
};


Review.propTypes = {
    prevStep: PropTypes.func.isRequired,
    formData: PropTypes.shape({
        firstName: PropTypes.string.isRequired,
        lastName: PropTypes.string.isRequired,
        email: PropTypes.string.isRequired,
        phone: PropTypes.string.isRequired,
    }).isRequired,
    onSubmit: PropTypes.func.isRequired,
};

export default Review;
