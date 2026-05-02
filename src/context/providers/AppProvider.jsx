import AuthProvider from '../auth/AuthProvider'

export default function AppProvider({ children }) {
    return (
        <AuthProvider>
            {children}
        </AuthProvider>
    )
}