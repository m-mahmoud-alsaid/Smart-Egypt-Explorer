import { useState, useEffect } from "react";
import Input from "./Input";

function ProfileForm({ data }) {

    const [form, setForm] = useState({
        name: "",
        email: "",
        photoUrl: "",
        city: "",
        phone: "",
        title: "",
        businessType: "",
        category: "",
        status: "",
        age: "",
        latitude: "",
        longitude: "",
    });

    useEffect(() => {
        if (data) {
            setForm({
                name: data.name || "",
                email: data.email || "",
                photoUrl: data.photoUrl || "",
                city: data.city || "",
                phone: data.phone || "",
                title: data.title || "",
                businessType: data.businessType || "",
                category: data.category || "",
                status: data.status || "",
                age: data.age || "",
                latitude: data.latitude || "",
                longitude: data.longitude || "",
            });
        }
    }, [data]);

    const isTourGuide = form.businessType === "TourGuide";

    return (
        <div className="bg-[#9c9d9f1a] p-6 rounded-xl shadow-lg grid gap-4">

            {form.photoUrl ? (
                <img
                    src={form.photoUrl}
                    alt="Profile Image"
                    className="w-full h-64 object-cover rounded-lg border-2 border-[#9C9D9F]"
                />
            ) : (
                <div>
                    <h2 className='font-bold mb-5 text-xl'>Photo</h2>
                    <div className="w-full h-64 flex items-center justify-center bg-gray-200 rounded-lg">
                        No Image
                    </div>
                </div>
            )}

            <div className="grid gap-4">

                <h2 className="text-xl font-bold mb-2">Profile Information</h2>

                <Input name="email" value={form.email} placeholder="Email" disabled />
                <Input name="title" value={form.title} placeholder="Title" disabled />
                <Input name="businessType" value={form.businessType} placeholder="Business Type" disabled />
                <Input name="category" value={form.category} placeholder="Category" disabled />
                <Input name="city" value={form.city} placeholder="City" disabled />

                {isTourGuide ? (
                    <>
                        <Input name="name" value={form.name} placeholder="Name" disabled />
                        <Input name="age" value={form.age} placeholder="Age" disabled />
                    </>
                ) : (
                    <>
                        <Input name="latitude" value={form.latitude} placeholder="Latitude" disabled />
                        <Input name="longitude" value={form.longitude} placeholder="Longitude" disabled />
                    </>
                )}

            </div>

        </div>
    );
}

export default ProfileForm;