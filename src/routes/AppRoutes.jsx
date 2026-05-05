import { Routes, Route, Navigate } from "react-router-dom";

import Login from '../pages/auth/Login'
import CreateAccOne from '../pages/auth/CreateAccOne'
import CreateAccTwo from '../pages/auth/CreateAccTwo'
import ForgetPasswordOne from '../pages/auth/ForgetPasswordOne'
import ForgetPasswordTwo from '../pages/auth/ForgetPasswordTwo'
import ForgetPasswordThree from '../pages/auth/ForgetPasswordThree'

import ProtectedRoute from './ProtectedRoute'
import Admin from '../pages/admin/Admin'

import OwnerDashboard from '../pages/profile/OwnerDashboard'

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

            <Route path="/admin" element={
                <ProtectedRoute >
                    <Admin />
                </ProtectedRoute>
            } />

            <Route path="/owner" element={<OwnerDashboard />} />
        </Routes>
    )
}

export default AppRoutes