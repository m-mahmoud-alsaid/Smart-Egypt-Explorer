import AuthContext from './AuthContext'

import { useNavigate } from 'react-router-dom';
import { useState } from 'react'

export default function AuthProvider({ children }) {
    const navigate = useNavigate();

    const [user, setUser] = useState(() => (
        {
            token: localStorage.getItem('userToken') || null,
            role: localStorage.getItem('userRole') || null,
            status: localStorage.getItem('userStatus') || null,
        }
    ));

    const login = (data) => {
        setUser(data);

        localStorage.setItem('userToken', data.token);
        localStorage.setItem('userRole', data.role);
        localStorage.setItem('userStatus', data.status);
    };

    const logout = () => {
        setUser({
            token: null,
            role: null,
            status: null,
        });
        localStorage.removeItem('userToken');
        localStorage.removeItem('userRole');
        localStorage.removeItem('userStatus');
        navigate('/login');
    }

    return (
        <AuthContext.Provider value={{ user, login, logout }}>
            {children}
        </AuthContext.Provider>
    )
}