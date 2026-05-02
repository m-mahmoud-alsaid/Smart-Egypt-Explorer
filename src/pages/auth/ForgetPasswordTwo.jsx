import AuthForm from '../../components/UI/AuthForm'
import LoginLayout from '../../components/layouts/LoginLayout'

import { postAuthData } from '../../services/authService'

import { useState } from 'react'
import { useNavigate } from "react-router-dom"
import toast from "react-hot-toast"
import AuthEndpoints from '../../api/AuthEndpoints'

function ForgetPasswordTwo() {
    const verifyCodeApi = AuthEndpoints.verifyCode;
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        email: localStorage.getItem("resetEmail") || "",
        code: ""
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const validate = () => {
        if (!formData.code.trim()) return "Code is required";
        if (!formData.email.trim()) return "Session expired, please try again";

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
            const data = await postAuthData(verifyCodeApi, formData);
            toast.success(data.message || "Successful");
            navigate('/forget-password-three');
        } catch {
            toast.error('Failed');
        }
    };

    let inputList = [
        {
            fieldType: 'input',
            type: 'text',
            name: 'code',
            value: formData.code,
            placeholder: 'Code',
            onChange: handleChange
        },
    ]
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

export default ForgetPasswordTwo;