import AuthForm from '../../components/UI/AuthForm'
import LoginLayout from '../../components/layouts/LoginLayout'

import { postAuthData } from '../../services/authService'

import { useState } from 'react'
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast"

import AuthEndpoints from '../../api/AuthEndpoints'

function ForgetPasswordOne() {
    const forgetApi = AuthEndpoints.forgotPassword;
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        email: ""
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const validate = () => {
        if (!formData.email.trim()) return "Email is required";

        const emailRegex = /\S+@\S+\.\S+/;
        if (!emailRegex.test(formData.email)) return "Invalid email";

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
            const data = await postAuthData(forgetApi, formData);
            toast.success(data.message || "Successful");
            localStorage.setItem("resetEmail", formData.email);
            navigate('/forget-password-two');
        } catch {
            toast.error('Failed');
        }
    };

    let inputList = [
        {
            fieldType: 'input',
            type: 'email',
            name: 'email',
            value: formData.email,
            placeholder: 'Email',
            onChange: handleChange
        }
    ]
    return (
        <LoginLayout>
            <AuthForm
                mode='forget'
                inputList={inputList}
                submitButtonTxt='Get Code'
                onSubmit={handleSubmit}
            />
        </LoginLayout>
    )
}

export default ForgetPasswordOne;