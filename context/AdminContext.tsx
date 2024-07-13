// context/AdminContext.tsx
import React, { createContext, useContext, useState } from 'react';

interface Admin {
    name: string;
    profileImage: string;
}

interface AdminContextType {
    admin: Admin;
    setAdmin: (admin: Admin) => void;
}

const AdminContext = createContext<AdminContextType | undefined>(undefined);

export const AdminProvider: React.FC = ({ children }) => {
    const [admin, setAdmin] = useState<Admin>({
        name: 'Isaac',
        profileImage: '/images/profile.png'
    });

    return (
        <AdminContext.Provider value={{ admin, setAdmin }}>
            {children}
        </AdminContext.Provider>
    );
};

export const useAdmin = (): AdminContextType => {
    const context = useContext(AdminContext);
    if (!context) {
        throw new Error('useAdmin must be used within an AdminProvider');
    }
    return context;
};
