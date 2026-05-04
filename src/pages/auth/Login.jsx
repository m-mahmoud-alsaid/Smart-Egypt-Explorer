import AuthForm from '../../components/UI/AuthForm'
import LoginLayout from '../../components/layouts/LoginLayout'

import { postAuthData } from '../../services/authService'

import { useState, useContext } from 'react'
import { useNavigate } from 'react-router-dom'

import toast from "react-hot-toast"

import AuthContext from '../../context/auth/AuthContext'
import AuthEndpoints from '../../api/AuthEndpoints'

function Login() {
    const navigate = useNavigate();
    const loginApi = AuthEndpoints.login;

    const [loading, setLoading] = useState(false);
    const [formData, setFormData] = useState({
        email: "",
        password: ""
    });

    const { login } = useContext(AuthContext);

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };
    const validate = () => {
        if (!formData.email.trim()) return "Email is required";
        if (!formData.password.trim()) return "Password is required";

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

        setLoading(true);

        try {
            const data = await postAuthData(loginApi, formData);
            if (data.status?.toLowerCase() === "pending") {
                toast(
                    <div className='flex flex-col gap-1'>
                        <strong>Account Pending</strong>
                        <span>Please wait until it is approved by the administrator.</span>
                    </div>,
                    {
                        icon: "⚠️"
                    }
                );
                return;
            }

            if (data.status?.toLowerCase() === "deleted") {
                toast(
                    <div className="flex flex-col gap-1">
                        <strong>Account Deleted</strong>
                        <span>This account has been deleted and is no longer available.</span>
                    </div>,
                    {
                        icon: "❌"
                    }
                );
                return;
            }
            toast.success(data.message || "Login successful");
            login(data);
            if (data.role?.toLowerCase() === 'admin') {
                navigate('/admin');
                return;
            }
            else if (data.role?.toLowerCase() === 'owner') {
                navigate('/profile');
                return;
            }
        } catch {
            toast.error('Login Failed');
        } finally {
            setLoading(false)
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
        },
        {
            fieldType: 'input',
            type: 'password',
            name: 'password',
            value: formData.password,
            placeholder: 'Password',
            onChange: handleChange
        },
    ]
    return (
        <>
            <LoginLayout>
                <AuthForm
                    mode='login'
                    inputList={inputList}
                    onSubmit={handleSubmit}
                    isDisabled={loading}
                />
            </LoginLayout>
        </>
    )
}

export default Login