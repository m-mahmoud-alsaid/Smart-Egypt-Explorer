import { IoFastFoodOutline } from "react-icons/io5";
import { LiaHotelSolid } from "react-icons/lia";
import { GoPerson } from "react-icons/go";

import AdminLayout from '../../components/layouts/AdminLayout';
import AdminHeader from '../../components/UI/AdminHeader';
import CardList from '../../components/UI/CardList';

import {
    getApplicationData,
    approveApplication,
    rejectApplication,
    hideRestaurants,
    deleteRestaurants,
    hideHotels,
    deleteHotels,
    hideTour,
    deleteTour
} from '../../services/adminService';

import AdminEndpoints from '../../api/AdminEndpoints';

import { useEffect, useState } from 'react';

import { useSearchParams } from 'react-router-dom';
import toast from "react-hot-toast";

function Admin() {
    const [data, setData] = useState([]);

    const [searchParams] = useSearchParams();
    const type = searchParams.get("type") || "restaurants";

    const fetchData = async () => {
        try {
            let endpoint = "";

            if (type === "restaurants-requests") {
                endpoint = AdminEndpoints.restaurantsRequests;
            } else if (type === "hotels-requests") {
                endpoint = AdminEndpoints.hotelsRequests;
            } else if (type === "tour-guides-requests") {
                endpoint = AdminEndpoints.tourGuidesRequests;
            } else if (type === "restaurants") {
                endpoint = AdminEndpoints.restaurants;
            } else if (type === "hotels") {
                endpoint = AdminEndpoints.hotels;
            } else if (type === "tour-guides") {
                endpoint = AdminEndpoints.tourGuides;
            }

            const result = await getApplicationData(endpoint);

            if (type.includes("requests")) {
                setData(result || []);
                console.log(result);
            } else {
                setData(result.data || []);
                console.log(result);
            }

        } catch (err) {
            console.log(err);
        }
    };

    const handleApprove = async (id) => {
        try {
            await approveApplication(id);
            setData(prev =>
                prev.filter(item => item.dashboardUserId !== id)
            );
            toast.success("Approved successfully");
        } catch {
            toast.error("Approve failed");
        }
    };

    const handleReject = async (id) => {
        try {
            await rejectApplication(id);
            setData(prev =>
                prev.filter(item => item.dashboardUserId !== id)
            );
            toast.success("Rejected successfully");
        } catch {
            toast.error("Reject failed");
        }
    };

    const handleHide = async (id) => {
        try {
            if (type === "restaurants") await hideRestaurants(id);
            if (type === "hotels") await hideHotels(id);
            if (type === "tour-guides") await hideTour(id);

            setData(prev =>
                prev.filter(item => item.dashboardUserId !== id)
            );
            toast.success("Hide successfully");
        } catch {
            toast.error("Hide failed");
        }
    };

    const handleDelete = async (id) => {
        try {
            if (type === "restaurants") await deleteRestaurants(id);
            if (type === "hotels") await deleteHotels(id);
            if (type === "tour-guides") await deleteTour(id);

            setData(prev =>
                prev.filter(item => item.dashboardUserId !== id)
            );
            toast.success("Delete successfully");
        } catch {
            toast.error("Delete failed");
        }
    };

    useEffect(() => {
        fetchData();
    }, [type]);

    const sideBarList = [
        {
            icon: <IoFastFoodOutline />,
            text: 'Restaurants',
            path: '/admin?type=restaurants-requests'
        },
        {
            icon: <LiaHotelSolid />,
            text: 'Hotels',
            path: '/admin?type=hotels-requests'
        },
        {
            icon: <GoPerson />,
            text: 'Tour Guides',
            path: '/admin?type=tour-guides-requests'
        },
    ];

    if (type.includes("requests")) {
        return (
            <AdminLayout
                sideBarList={sideBarList}
                header={<AdminHeader type={type} />}
                card={
                    <CardList
                        mode='request'
                        cardListInfo={data}
                        onApprove={handleApprove}
                        onReject={handleReject}
                    />
                }
            />
        )
    }

    return (
        <AdminLayout
            sideBarList={sideBarList}
            header={<AdminHeader type={type} />}
            card={
                <CardList
                    mode='info'
                    cardListInfo={data}
                    onApprove={handleHide}
                    onReject={handleDelete}
                />
            }
        />
    )
}

export default Admin;