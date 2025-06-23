"use client"

import React, { useState } from "react";

interface Props {
    admin: Admin;
}

interface Admin {
    id: string;
    name: string;
    email: string;
}

const TopBar = ({ admin }: Props) => {
    const [open, setOpen] = useState(false);

    return (
        <header className="w-full h-16 bg-white border-b border-gray-200 flex items-center justify-end px-6 shadow-sm">
            <div className="flex items-center gap-4 relative">
                {/* Profile Circle with Dropdown */}
                <div
                    className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold text-lg cursor-pointer relative group"
                    onMouseEnter={() => setOpen(true)}
                    
                >
                    <span>{admin ? admin.name[0] : ""}</span>
                    {/* Dropdown */}
                    <div
                        className={`absolute right-0 top-12 min-w-[220px] bg-white border border-gray-200 rounded-lg shadow-lg p-4 z-50 transition-all duration-150 ${
                            open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
                        }`}
                     onMouseLeave={() => setOpen(false)}
                    >
                        <div className="mb-2">
                            <div className="font-semibold text-gray-800">{admin?.name}</div>
                            <div className="text-gray-500 text-sm break-all">{admin?.email}</div>
                        </div>
                        <div className="border-t border-gray-100 my-2" />
                        <button
                            onClick={() => {
                                localStorage.removeItem("admin_token");
                                window.location.href = "/admin/access";
                            }}
                            className="w-full px-4 py-2 rounded bg-primary text-white hover:bg-primary/90 transition-colors text-sm font-medium mt-2"
                        >
                            Logout
                        </button>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default TopBar;