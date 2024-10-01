import { useState } from 'react';
import PersonalInfo from '../../components/MultiStepForm/PersonalInfo';
import ContactInfo from '../../components/MultiStepForm/ContactInfo';
import Review from '../../components/MultiStepForm/Review';

const MultiStepForm = () => {
    const [step, setStep] = useState(0);
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
    });

    const nextStep = () => {
        setStep((prev) => prev + 1);
    };

    const prevStep = () => {
        setStep((prev) => prev - 1);
    };

    const handleChange = (data) => {
        setFormData({ ...formData, ...data });
    };

    const handleSubmit = () => {
        alert('Form Submitted!');
        resetForm();
    };

    const resetForm = () => {
        setFormData({
            firstName: '',
            lastName: '',
            email: '',
            phone: '',
        });
        setStep(0);
    };

    return (
        <div>
            {step === 0 && (
                <PersonalInfo
                    nextStep={nextStep}
                    handleChange={handleChange}
                    values={formData}
                />
            )}
            {step === 1 && (
                <ContactInfo
                    nextStep={nextStep}
                    prevStep={prevStep}
                    handleChange={handleChange}
                    values={formData}
                />
            )}
            {step === 2 && (
                <Review
                    prevStep={prevStep}
                    formData={formData}
                    onSubmit={handleSubmit}
                />
            )}
        </div>
    );
};

export default MultiStepForm;
