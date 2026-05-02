import AuthForm from '../../components/UI/AuthForm'
import LoginLayout from '../../components/layouts/LoginLayout'

import { postAuthData } from '../../services/authService'
import { useState } from 'react'
import { useNavigate } from "react-router-dom"
import toast from "react-hot-toast"
import AuthEndpoints from '../../api/AuthEndpoints'

function ForgetPasswordThree() {
    const resetPasswordApi = AuthEndpoints.resetPassword;
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        email: localStorage.getItem("resetEmail") || "",
        newPassword: "",
        confirmPassword: ""
    });

    const handleChange = (e) => {
        const { name, value } = e.target;

        setFormData((prev) => ({
            ...prev,
            [name]: value
        }));
    };

    const validate = () => {
        if (!formData.email.trim())
            return "Session expired, please try again";

        if (!formData.newPassword.trim())
            return "Password is required";

        if (formData.newPassword.length < 6)
            return "Password must be at least 6 characters";

        if (!formData.confirmPassword.trim())
            return "Confirm password is required";

        if (formData.newPassword !== formData.confirmPassword)
            return "Passwords do not match";

        return null;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const errorMsg = validate();
        if (errorMsg) {
            toast.error(errorMsg);
            return;
        }

        try {
            const data = await postAuthData(resetPasswordApi, {
                email: formData.email,
                newPassword: formData.newPassword,
                confirmPassword: formData.confirmPassword
            });

            toast.success(data.message || "Password reset successful");
            localStorage.removeItem("resetEmail");
            navigate('/login');
        } catch {
            toast.error('Failed');
        }
    };

    let inputList = [
        {
            fieldType: 'input',
            type: 'password',
            name: 'newPassword',
            value: formData.newPassword,
            placeholder: 'Password',
            onChange: handleChange
        },
        {
            fieldType: 'input',
            type: 'password',
            name: 'confirmPassword',
            value: formData.confirmPassword,
            placeholder: 'Confirm Password',
            onChange: handleChange
        },
    ];

    return (
        <LoginLayout>
            <AuthForm
                mode='forget'
                inputList={inputList}
                submitButtonTxt='Confirm'
                onSubmit={handleSubmit}
            />
        </LoginLayout>
    )
}

export default ForgetPasswordThree;