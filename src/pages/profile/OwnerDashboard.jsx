import { useEffect, useState } from 'react';
import toast from "react-hot-toast";
import { GoPerson } from "react-icons/go";
import { LuLayoutTemplate } from "react-icons/lu";
import { IoSearch } from "react-icons/io5";

import { useSearchParams, useNavigate } from 'react-router-dom';

import AdminLayout from '../../components/layouts/AdminLayout';
import ServiceCard from '../../components/UI/ServiceCard';
import Input from '../../components/UI/Input';
import ServiceForm from '../../components/UI/ServiceComponent';
import ProfileForm from '../../components/UI/ProfileForm';

import {
    getOwnerProfile,
    getOwnerServices,
    updateOwnerProfile,
    createOwnerService,
    updateOwnerService,
    deleteOwnerService
} from '../../services/ownerService';

function OwnerDashboard() {

    const [searchParams] = useSearchParams();
    const navigate = useNavigate();

    const tab = searchParams.get("tab") || "profile";

    const [profileData, setProfileData] = useState(null);
    const [servicesData, setServicesData] = useState([]);
    const [search, setSearch] = useState('');
    const [editingService, setEditingService] = useState(null);

    const fetchProfile = async () => {
        try {
            const data = await getOwnerProfile();
            setProfileData(data);
            console.log(data);
        } catch {
            toast.error("Failed to load profile");
        }
    };

    const fetchServices = async () => {
        try {
            const data = await getOwnerServices();
            setServicesData(data?.data || data || []);
        } catch {
            toast.error("Failed to load services");
        }
    };

    const handleCreateOrUpdate = async (formData, id) => {
        try {
            if (id) {
                await updateOwnerService(id, formData);
                toast.success("Service updated");
            } else {
                await createOwnerService(formData);
                toast.success("Service created");
            }

            fetchServices();
        } catch {
            toast.error("Something went wrong");
        }
    };

    const handleDeleteService = async (id) => {
        try {
            await deleteOwnerService(id);
            toast.success("Service deleted");
            fetchServices();
        } catch {
            toast.error("Delete failed");
        }
    };

    const handleEditService = (service) => {
        setEditingService(service);
    };

    useEffect(() => {
        fetchProfile();
        fetchServices();
    }, []);

    useEffect(() => {
        if (!searchParams.get("tab")) {
            navigate("/owner?tab=profile");
        }
    }, [searchParams, navigate]);

    const filteredServices = servicesData.filter(item =>
        item?.title?.toLowerCase().includes(search.toLowerCase())
    );

    const sideBarList = [
        { icon: <GoPerson />, text: 'Profile', path: '/owner?tab=profile' },
        { icon: <LuLayoutTemplate />, text: 'Services', path: '/owner?tab=services' },
    ];

    return (
        <AdminLayout
            sideBarList={sideBarList}
            card={
                <div className="grid gap-4">

                    {tab === "profile" && profileData && (
                        <ProfileForm
                            data={profileData}
                            onSave={async (updatedData) => {
                                await updateOwnerProfile(updatedData);
                                toast.success("Profile updated");
                                fetchProfile();
                            }}
                        />
                    )}

                    {tab === "services" && (
                        <>
                            <ServiceForm
                                onCreate={handleCreateOrUpdate}
                                onSuccess={fetchServices}
                                editingService={editingService}
                                onClearEdit={() => setEditingService(null)}
                            />

                            <div className="relative">
                                <IoSearch className="absolute text-2xl top-1/2 -translate-y-1/2 left-4 text-gray-400" />
                                <Input
                                    type="text"
                                    placeholder="Search..."
                                    onChange={(e) => setSearch(e.target.value)}
                                />
                            </div>

                            <div className="grid grid-cols-[repeat(auto-fill,minmax(250px,1fr))] 
                            sm:grid-cols-[repeat(auto-fill,minmax(450px,1fr))] gap-4">
                                {filteredServices.map((item) => (
                                    <ServiceCard
                                        key={item.ownerServiceId}
                                        requestInfoList={item}
                                        onDelete={handleDeleteService}
                                        onEdit={handleEditService}
                                    />
                                ))}
                            </div>
                        </>
                    )}
                </div>
            }
        />
    );
}

export default OwnerDashboard;