import { useContext, useRef } from 'react';
import AuthContext from '../context/auth/AuthContext';
import { Navigate } from "react-router-dom";
import toast from "react-hot-toast";
import { jwtDecode } from "jwt-decode";

export default function ProtectedRoute({ children, allowedRoles = [] }) {
    const { user } = useContext(AuthContext);
    const shown = useRef(false);

    if (!user?.token) {
        if (!shown.current) {
            shown.current = true;

            toast(
                <div>
                    <h4 className='font-bold'>Unauthorized access.</h4>
                    <p>Please sign in to continue</p>
                </div>,
                { icon: '🔒' }
            );
        }

        return <Navigate to="/login" replace />;
    }

    try {
        const decoded = jwtDecode(user.token);

        const role =
            decoded["http://schemas.microsoft.com/ws/2008/06/identity/claims/role"];

        const status = decoded["Status"];


        if (allowedRoles.length && !allowedRoles.includes(role)) {
            return <Navigate to="/unauthorized" replace />;
        }

        if (status && status !== "Approved") {
            if (status === "Pending") {
                return <Navigate to="/pending" replace />;
            }

            if (status === "Rejected") {
                return <Navigate to="/rejected" replace />;
            }
        }

    } catch {
        return <Navigate to="/login" replace />;
    }

    return children;
}