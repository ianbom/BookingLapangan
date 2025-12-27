import Link from "next/link";
import React from "react";

export default function BookingSummaryCard() {
    return (
        <div className="bg-surface-light rounded-xl border border-text-light shadow-lg overflow-hidden flex flex-col h-full">
            <div className="p-5 border-b border-text-light bg-[#f0f9f3]">
                <h3 className="text-lg font-bold text-text-main flex items-center gap-2">
                    <span className="material-symbols-outlined text-[#0eb545]">
                        receipt_long
                    </span>
                    Ringkasan Booking
                </h3>
            </div>
            <div className="p-5 flex-grow space-y-6">
                {/* Field Info */}
                <div className="flex gap-4">
                    <div
                        className="w-16 h-16 rounded-lg bg-cover bg-center shrink-0 border border-primary/20"
                        style={{
                            backgroundImage:
                                "url('https://lh3.googleusercontent.com/aida-public/AB6AXuAyF-hzVww3qLxfi3gzGapZNSVDo2b9qF8EB6N2BMGth6q-ywFsaLG-i6JfGdKOaThXJAY7JguVArFdB7OeOzgDOVfOY_pd2kMe8IgWMjT-hr2D-ZQY1vwK8GkEN_W_Sko1ZL8-yf70zNAsYE8FLzv1JUFqmgdl9Jt2kX7MhpobtRYr3MpofgTBOEb6bY7BiF_tLetG13gbbyYaHoNdPnETPZ4EldSFbQtEVxOUoxK-jqsKwFKbewPVstbzDkraRO-cYtgCajCD9rQU')",
                        }}
                    ></div>
                    <div>
                        <h4 className="font-bold text-text-main leading-tight">
                            Lapangan Futsal Pro
                        </h4>
                        <p className="text-sm text-[#4c9a66] mt-1">Rumput Sintetis</p>
                    </div>
                </div>
                {/* Date & Time Details */}
                <div className="space-y-4">
                    <div className="flex items-start gap-3">
                        <div className="p-2 rounded-lg bg-primary/10 text-[#0eb545]">
                            <span
                                className="material-symbols-outlined"
                                style={{ fontSize: "20px" }}
                            >
                                calendar_today
                            </span>
                        </div>
                        <div>
                            <p className="text-xs font-semibold text-[#4c9a66] uppercase tracking-wider">
                                TANGGAL
                            </p>
                            <p className="text-sm font-bold text-text-main">
                                Jumat, 24 Nov 2023
                            </p>
                        </div>
                    </div>
                    <div className="flex items-start gap-3">
                        <div className="p-2 rounded-lg bg-primary/10 text-[#0eb545]">
                            <span
                                className="material-symbols-outlined"
                                style={{ fontSize: "20px" }}
                            >
                                schedule
                            </span>
                        </div>
                        <div>
                            <p className="text-xs font-semibold text-[#4c9a66] uppercase tracking-wider">
                                WAKTU
                            </p>
                            <p className="text-sm font-bold text-text-main">
                                18:00 - 20:00
                            </p>
                            <p className="text-xs text-[#4c9a66] font-medium mt-0.5">
                                2 Jam x Rp 175.000
                            </p>
                        </div>
                    </div>
                </div>
                <hr className="border-dashed border-gray-200" />
                {/* Pricing */}
                <div className="flex justify-between items-end">
                    <div>
                        <p className="text-sm text-[#4c9a66]">Subtotal</p>
                        <p className="text-xs text-gray-400">Termasuk pajak & layanan</p>
                    </div>
                    <p className="text-2xl font-black text-text-main tracking-tight">
                        Rp 350.000
                    </p>
                </div>
            </div>
            {/* Action Button */}
            <div className="p-5 pt-2">
                <Link href={'/venues/1/book/details'}>
                    <button className="w-full bg-primary hover:bg-[#0eb545] active:bg-[#0da643] text-text-main font-bold text-lg py-4 px-6 rounded-lg shadow-md transition-all flex items-center justify-center gap-2 group cursor-pointer">
                        LANJUTKAN BOOKING
                        <span className="material-symbols-outlined transition-transform group-hover:translate-x-1">
                            arrow_forward
                        </span>
                    </button>
                </Link>

            </div>
        </div>
    );
}
