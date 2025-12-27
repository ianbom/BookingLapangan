import Link from "next/link";
import React from "react";

export default function Sidebar() {
    return (
        <aside className="w-72 hidden md:flex flex-col border-r border-[#e2e8f0] bg-surface-light shrink-0">
            <div className="p-6">
                {/* User Profile Summary */}
                <div className="flex items-center gap-3 mb-8 p-3 bg-background-light rounded-xl border border-[#e2e8f0]">
                    <div className="relative">
                        <div
                            className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-12 border-2 border-primary"
                            style={{
                                backgroundImage:
                                    'url("https://lh3.googleusercontent.com/aida-public/AB6AXuAhD_b2RGdaU6t6YBF1lcXKDGs8nmXXh2Tj1nfDjdMjYElDF4-gqd1dGIeJGRvuevF53iT4WI2aUXK9rGB4qNyEawg1pJ3wfp_f4HNZ89NI_HT_cuSEYT36i2kWqzUzz1147BBAwRsd23htVO1y-JfMdJPjR41NBpf0oQ7GcL1ov-yZw3Aq5TJMa7HE9tL-7aSDmOm0zoE6394RMqdsLbMeCYGzGkt_-7Pa7PhXMkkh_ISi3Q1YdY0o9vwI5NfevqTimjWlQ7Kgbcci")',
                            }}
                        ></div>
                        <div className="absolute bottom-0 right-0 size-3 bg-primary rounded-full border-2 border-white"></div>
                    </div>
                    <div className="flex flex-col">
                        <h2 className="text-sm font-bold leading-tight text-text-main">
                            Ahmad
                        </h2>
                        <p className="text-primary text-xs font-medium">Gold Member</p>
                    </div>
                </div>
                {/* Navigation Links */}
                <nav className="flex flex-col gap-2">
                    {/* Active Item */}
                    <Link
                        href="#"
                        className="flex items-center gap-3 px-4 py-3 rounded-xl bg-primary/10 text-text-main border-l-4 border-primary transition-colors"
                    >
                        <span className="material-symbols-outlined text-primary">
                            person
                        </span>
                        <span className="text-sm font-medium">Profil</span>
                    </Link>
                    <Link
                        href="#"
                        className="flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-background-light text-gray-500 hover:text-text-main transition-colors"
                    >
                        <span className="material-symbols-outlined">calendar_month</span>
                        <span className="text-sm font-medium">Booking</span>
                    </Link>
                    <Link
                        href="#"
                        className="flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-background-light text-gray-500 hover:text-text-main transition-colors"
                    >
                        <span className="material-symbols-outlined">favorite</span>
                        <span className="text-sm font-medium">Favorit</span>
                    </Link>
                    <Link
                        href="#"
                        className="flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-background-light text-gray-500 hover:text-text-main transition-colors"
                    >
                        <span className="material-symbols-outlined">star</span>
                        <span className="text-sm font-medium">Poin</span>
                    </Link>
                    <div className="h-px bg-[#e2e8f0] my-2"></div>
                    <Link
                        href="#"
                        className="flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-background-light text-gray-500 hover:text-text-main transition-colors"
                    >
                        <span className="material-symbols-outlined">settings</span>
                        <span className="text-sm font-medium">Pengaturan</span>
                    </Link>
                    <Link
                        href="#"
                        className="flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-red-50 text-gray-500 hover:text-red-600 transition-colors"
                    >
                        <span className="material-symbols-outlined">logout</span>
                        <span className="text-sm font-medium">Keluar</span>
                    </Link>
                </nav>
            </div>
        </aside>
    );
}
