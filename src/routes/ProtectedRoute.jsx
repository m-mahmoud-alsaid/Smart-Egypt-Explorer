import { useContext, useEffect, useRef } from 'react';
import AuthContext from '../context/auth/AuthContext';

import { Navigate } from "react-router-dom";
import toast from "react-hot-toast";

export default function ProtectedRoute({ children }) {
    const { user } = useContext(AuthContext);

    const shown = useRef(false);

    useEffect(() => {
        if (!user.token && !shown.current) {
            shown.current = true;

            toast(
                <div>
                    <h4 className='font-bold'>Unauthorized access.</h4>
                    <p>Please sign in to continue</p>
                </div>,
                { icon: '🔒' }
            );
        }
    }, [user.token]);

    if (!user.token) {
        return <Navigate to='/login' replace />;
    }

    return children;
}