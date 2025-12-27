import React from "react";
import Link from "next/link";

export default function UpcomingBookingCard() {
    return (
        <div className="xl:col-span-2 flex flex-col gap-6">
            <div className="flex items-center justify-between">
                <h2 className="text-xl font-bold tracking-tight uppercase text-text-main">
                    Booking Berikutnya
                </h2>
                <Link
                    href="#"
                    className="text-primary text-sm font-medium hover:underline"
                >
                    Lihat Semua
                </Link>
            </div>
            {/* Booking Card */}
            <div className="group relative overflow-hidden rounded-2xl bg-surface-light border border-[#e2e8f0] shadow-sm hover:shadow-md transition-all">
                <div className="flex flex-col md:flex-row">
                    {/* Image Section */}
                    <div
                        className="w-full md:w-2/5 h-48 md:h-auto bg-cover bg-center relative"
                        style={{
                            backgroundImage:
                                'url("https://lh3.googleusercontent.com/aida-public/AB6AXuBsc2S81p87Qnna-k2pp0tWRBeUYPgEDVE3jJsw0h3wbK1x99B2X6-J0IWeHqaP5wMe2pWH6ow0dDOIJFJGTdMdKuPLbGy0WZgnTHNwEj7_jszcjsjj5lbEsNTCwbkrYjwZCSheEvGUefKhhUHC7124oGJp8FrHXTI2dFNo2YIHOHnYJzsgbdsSHyl3oeYGXvCRjm3P5nQ4xav1bEGXXhFEGR5urltUECjcFIl-Jx3f1AOM5bsea6E14fVpXzHVoo7Gv-n4x_VghNO9")',
                        }}
                    >
                        <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-lg text-xs font-bold text-slate-900 shadow-sm flex items-center gap-1">
                            <span className="material-symbols-outlined text-primary text-[16px]">
                                check_circle
                            </span>
                            Terkonfirmasi
                        </div>
                    </div>
                    {/* Content Section */}
                    <div className="p-6 flex flex-col justify-center flex-1">
                        <div className="flex justify-between items-start mb-2">
                            <span className="text-primary font-bold tracking-wider text-xs uppercase mb-1">
                                Futsal
                            </span>
                            <div className="flex gap-1">
                                <span className="material-symbols-outlined text-gray-300 text-[20px] cursor-pointer hover:text-primary">
                                    share
                                </span>
                                <span className="material-symbols-outlined text-gray-300 text-[20px] cursor-pointer hover:text-red-500">
                                    more_vert
                                </span>
                            </div>
                        </div>
                        <h3 className="text-2xl font-bold text-text-main mb-4">
                            Lapangan A - Futsal Arena
                        </h3>
                        <div className="space-y-3 mb-6">
                            <div className="flex items-center gap-3 text-gray-600">
                                <span className="material-symbols-outlined text-primary">
                                    calendar_month
                                </span>
                                <span className="text-sm font-medium">Kamis, 12 Okt 2023</span>
                            </div>
                            <div className="flex items-center gap-3 text-gray-600">
                                <span className="material-symbols-outlined text-primary">
                                    schedule
                                </span>
                                <span className="text-sm font-medium">19:00 - 20:00 WIB</span>
                            </div>
                            <div className="flex items-center gap-3 text-gray-600">
                                <span className="material-symbols-outlined text-primary">
                                    location_on
                                </span>
                                <span className="text-sm font-medium">
                                    Jakarta Selatan Sport Center
                                </span>
                            </div>
                        </div>
                        <div className="pt-4 border-t border-[#e2e8f0] flex flex-col sm:flex-row gap-4">
                            <button className="flex-1 bg-primary hover:bg-green-400 text-slate-900 font-bold py-3 px-6 rounded-xl transition-all flex items-center justify-center gap-2 shadow-[0_4px_14px_0_rgba(19,236,91,0.39)] cursor-pointer">
                                <span className="material-symbols-outlined">qr_code_2</span>
                                Lihat QR Code
                            </button>
                            <button className="sm:w-auto w-full px-6 py-3 rounded-xl border border-[#e2e8f0] text-gray-600 font-medium hover:bg-slate-50 transition-colors cursor-pointer">
                                Jadwal Ulang
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
