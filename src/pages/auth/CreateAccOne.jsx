import AuthForm from '../../components/UI/AuthForm'
import LoginLayout from '../../components/layouts/LoginLayout'

import { postFormData } from '../../services/authService'

import { useState } from 'react'
import { useNavigate } from "react-router-dom";

import toast from "react-hot-toast"

import AuthEndpoints from '../../api/AuthEndpoints'

function CreateAccOne() {
    const registerApi = AuthEndpoints.registerStep1;
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        Email: "",
        Password: "",
        BusinessType: "",
        Title: "",
        City: "",
        document: null,
    });

    const handleChange = (e) => {
        const { name, type } = e.target;

        if (type === "file") {
            setFormData((prev) => ({
                ...prev,
                [name]: e.target.files[0]
            }));
        } else {
            setFormData((prev) => ({
                ...prev,
                [name]: e.target.value
            }));
        }
    };

    const handleSelect = ({ value }) => {
        setFormData((prev) => ({
            ...prev,
            BusinessType: value,

            // reset
            Title: "",
            City: "",
            document: null
        }));
    };

    const validate = () => {
        if (!formData.Email.trim()) return "Email is required";
        if (!formData.Password.trim()) return "Password is required";

        const emailRegex = /\S+@\S+\.\S+/;
        if (!emailRegex.test(formData.Email)) return "Invalid email";

        if (formData.Password.length < 6) return "Password must be at least 6 characters";

        if (!formData.BusinessType) return "Select business type";

        if (!formData.Title) return "Title is required";
        if (!formData.City) return "City is required";
        if (!formData.document) return "ID is required";

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
            const dataToSend = new FormData();

            Object.keys(formData).forEach((key) => {
                dataToSend.append(key, formData[key]);
            });

            const data = await postFormData(registerApi, dataToSend);

            toast.success(data.message || "Success");
            localStorage.setItem("BusinessType", formData.BusinessType);
            localStorage.setItem('dashboardUserId', data.dashboardUserId);

            navigate('/create-two');
        } catch (err) {
            toast.error(err.message || 'Failed');
        }
    };

    let inputList = [
        {
            fieldType: 'input',
            type: 'email',
            name: 'Email',
            value: formData.Email,
            placeholder: 'Email',
            onChange: handleChange
        },
        {
            fieldType: 'input',
            type: 'password',
            name: 'Password',
            value: formData.Password,
            placeholder: 'Password',
            onChange: handleChange
        },
        {
            fieldType: 'select',
            placeholder: 'Business Type',
            name: 'BusinessType',
            options: ['Restaurant', 'Hotel', 'Tour Guide'],
            onSelect: handleSelect
        },
        {
            fieldType: 'input',
            type: 'text',
            name: 'Title',
            value: formData.Title,
            placeholder: 'Title',
            onChange: handleChange
        },
        {
            fieldType: 'input',
            type: 'text',
            name: 'City',
            value: formData.City,
            placeholder: 'City',
            onChange: handleChange
        },
    ];
    if (formData.BusinessType === 'Tour Guide') {
        inputList = [
            ...inputList,
            {
                fieldType: 'file',
                name: 'document',
                placeholder: 'Upload your photo',
                onChange: handleChange
            }
        ]
    }
    if (formData.BusinessType === 'Restaurant' || formData.BusinessType === 'Hotel') {
        inputList = [
            ...inputList,
            {
                fieldType: 'file',
                name: 'document',
                placeholder: 'ID',
                onChange: handleChange
            }
        ]
    }
    return (
        <LoginLayout>
            <AuthForm
                mode='create'
                onSubmit={handleSubmit}
                inputList={inputList}
                submitButtonTxt='Next'
            />
        </LoginLayout>
    )
}

export default CreateAccOne;