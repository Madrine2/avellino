// components/dashboard/navbar/navbar.tsx
import React from 'react';
import { FaSearch, FaBell, FaChevronDown, FaArrowLeft } from 'react-icons/fa';
import Image from 'next/image';

interface Admin {
    name: string;
}

interface NavbarProps {
    title: string;
    admin?: Admin; // Made optional to handle undefined case
}

const Navbar: React.FC<NavbarProps> = ({ admin, title }) => {
    return (
        <div className="flex items-center justify-between bg-white p-4 shadow-md text-black w-full">
            <div className='flex'>
                <FaArrowLeft className='mt-[5px]' />
                <h1 className="text-xl text-black font-bold ml-2">{title}</h1>
            </div>

            <div className="flex items-center">
                <div className="relative">
                    <FaSearch className="absolute top-2.5 left-3 text-gray-400" />
                    <input
                        type="text"
                        placeholder="Search"
                        className="pl-10 pr-4 py-2 border rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>
                <FaBell className="ml-6 w-[60px] h-[60px] text-gray-600 text-xl cursor-pointer" />
                <div className="flex items-center ml-6 w-3/4 border-[1px] border-b-gray-500 rounded">
                    <Image
                        src='/images/profile.png'
                        alt='image'
                        width={40}
                        height={40}
                        className="rounded-full"
                    />
                    <div className="ml-2 flex">
                        <div className='block'>
                            <h3>Admin</h3>
                            <p className="text-sm text-black mt-[-8px] font-semibold">{admin ? admin.name : "Isaac"}</p>
                        </div>
                        <FaChevronDown className="ml-2 mt-[14px] text-gray-600 cursor-pointer" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
