import AuthForm from '../../components/UI/AuthForm'
import LoginLayout from '../../components/layouts/LoginLayout'

import { useState } from 'react'
import { useNavigate } from "react-router-dom";

import toast from "react-hot-toast"
import { postAuthData } from '../../services/authService'

import AuthEndpoints from '../../api/AuthEndpoints'

function CreateAccTwo() {
    const navigate = useNavigate();
    const registerApi = AuthEndpoints.registerStep2;
    const businessType = localStorage.getItem("BusinessType");

    const [formData, setFormData] = useState({
        dashboardUserId: Number(localStorage.getItem("dashboardUserId") || 0),
        name: "",
        age: null,
        languages: "",
        category: "",
        location: "",
        longitude: "",
        latitude: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;

        setFormData((prev) => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSelect = ({ name, value }) => {
        setFormData((prev) => ({
            ...prev,
            [name]: value
        }));
    };

    const validate = () => {
        if (!formData.dashboardUserId) return "Invalid user";

        if (businessType === "Tour Guide") {
            if (!formData.name.trim()) return "Name is required";
            if (!formData.age) return "Age is required";
            if (!formData.languages) return "Languages is required";
        } else {
            if (!formData.category) return "Category is required";
            if (!formData.location.trim()) return "Location is required";
            if (!formData.longitude) return "Longitude is required";
            if (!formData.latitude) return "Latitude is required";
        }

        return null;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const error = validate();
        if (error) {
            toast.error(error);
            return;
        }

        try {
            const dataToSend = {
                dashboardUserId: Number(formData.dashboardUserId),
            };

            if (businessType === "Tour Guide") {
                dataToSend.name = formData.name;
                dataToSend.age = Number(formData.age);
                dataToSend.languages = formData.languages;
            } else {
                dataToSend.category = formData.category;
                dataToSend.location = formData.location;
                dataToSend.longitude = Number(formData.longitude);
                dataToSend.latitude = Number(formData.latitude);
            }

            const res = await postAuthData(registerApi, dataToSend);
            toast.success(res.message || "Account created successfully");
            localStorage.removeItem("BusinessType");
            localStorage.removeItem("dashboardUserId");
            navigate('/login');

        } catch (err) {
            toast.error(err.message || "Something went wrong");
        }
    };

    let inputList;

    if (businessType === "Tour Guide") {
        inputList = [
            {
                fieldType: 'input',
                type: 'text',
                name: 'name',
                placeholder: 'Name',
                value: formData.name,
                onChange: handleChange
            },
            {
                fieldType: 'input',
                type: 'number',
                name: 'age',
                placeholder: 'Age',
                value: formData.age,
                onChange: handleChange
            },
            {
                fieldType: 'select',
                placeholder: 'Languages',
                name: 'languages',
                options: [
                    'Arabic', 'English', 'French', 'German', 'Spanish'
                ],
                onSelect: handleSelect
            }
        ];
    } else {
        inputList = [
            {
                fieldType: 'select',
                placeholder: 'Category',
                name: 'category',
                options: ['Food', 'Entertainment'],
                onSelect: handleSelect
            },
            {
                fieldType: 'input',
                type: 'text',
                name: 'location',
                placeholder: 'Location',
                value: formData.location,
                onChange: handleChange
            },
            {
                fieldType: 'input',
                type: 'number',
                name: 'longitude',
                placeholder: 'Longitude',
                value: formData.longitude,
                onChange: handleChange
            },
            {
                fieldType: 'input',
                type: 'number',
                name: 'latitude',
                placeholder: 'Latitude',
                value: formData.latitude,
                onChange: handleChange
            }
        ];
    }

    return (
        <LoginLayout>
            <AuthForm
                mode='create'
                inputList={inputList}
                submitButtonTxt='Sign Up'
                onSubmit={handleSubmit}
            />
        </LoginLayout>
    )
}

export default CreateAccTwo;