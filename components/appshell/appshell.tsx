// components/AppShell.tsx
import React from 'react';
import Sidebar from "@/components/dashboard/sidebar/sidebar";
import Navbar from "@/components/dashboard/navbar/navbar";

interface Admin {
    name: string;
}

interface AppShellProps {
    children: React.ReactNode;
    admin?: Admin;
    title: string;
}

const AppShell: React.FC<AppShellProps> = ({ children, admin, title }) => {
    return (
        <div className="flex h-screen">
            <Sidebar />
            <div className="flex flex-col flex-1">
                <Navbar admin={admin} title={title} />
                <main className="flex-1 p-6">
                    {children}
                </main>
            </div>
        </div>
    );
};

export default AppShell;
