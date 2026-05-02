import { Routes, Route, Navigate } from "react-router-dom";

import Login from '../pages/auth/Login'
import CreateAccOne from '../pages/auth/CreateAccOne'
import CreateAccTwo from '../pages/auth/CreateAccTwo'
import ForgetPasswordOne from '../pages/auth/ForgetPasswordOne'
import ForgetPasswordTwo from '../pages/auth/ForgetPasswordTwo'
import ForgetPasswordThree from '../pages/auth/ForgetPasswordThree'

import Admin from '../pages/admin/Admin'
import Restaurants from '../pages/admin/Restaurants'
import Hotels from '../pages/admin/Hotels'
import HotelsRequests from '../pages/admin/HotelsRequests'
import TourGuides from '../pages/admin/TourGuides'
import TourGuidesRequests from '../pages/admin/TourGuidesRequests'

import Profile from '../pages/profile/Profile'
import Services from '../pages/profile/Services'

function AppRoutes() {
    return (
        <Routes>
            <Route path="/" element={<Navigate to="/login" />} />
            <Route path="/login" element={<Login />} />
            <Route path="/create-one" element={<CreateAccOne />} />
            <Route path="/create-two" element={<CreateAccTwo />} />
            <Route path="/forget-password-one" element={<ForgetPasswordOne />} />
            <Route path="/forget-password-two" element={<ForgetPasswordTwo />} />
            <Route path="/forget-password-three" element={<ForgetPasswordThree />} />

            <Route path="/admin" element={<Admin />} />
            <Route path="/restaurants" element={<Restaurants />} />
            <Route path="/hotels" element={<Hotels />} />
            <Route path="/hotels-requests" element={<HotelsRequests />} />
            <Route path="/tour-guides" element={<TourGuides />} />
            <Route path="/tour-guides-requests" element={<TourGuidesRequests />} />

            <Route path="/profile" element={<Profile />} />
            <Route path="/services" element={<Services />} />
        </Routes>
    )
}

export default AppRoutes