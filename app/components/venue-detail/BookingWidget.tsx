import Link from "next/link";
import React from "react";

export default function BookingWidget() {
    return (
        <div className="bg-surface-light rounded-2xl shadow-xl shadow-black/5 border border-gray-100 overflow-hidden">
            {/* Price Header */}
            <div className="p-6 border-b border-gray-100 bg-[#f8fcf9]">
                <p className="text-sm text-gray-500 font-medium mb-1">Mulai dari</p>
                <div className="flex items-baseline gap-1">
                    <span className="text-3xl font-bold text-text-main">Rp 150.000</span>
                    <span className="text-[#4c9a66]">/ jam</span>
                </div>
            </div>
            <div className="p-6 flex flex-col gap-6">
                {/* Date Picker Mockup */}
                <div>
                    <label className="block text-sm font-bold text-text-main mb-3">
                        Pilih Tanggal
                    </label>
                    <div className="relative">
                        <button className="w-full flex items-center justify-between p-3 border border-gray-100 rounded-lg bg-white text-left cursor-pointer">
                            <span className="font-medium text-text-main">
                                24 Oktober 2023
                            </span>
                            <span className="material-symbols-outlined text-[#4c9a66]">
                                calendar_month
                            </span>
                        </button>
                    </div>
                </div>
                {/* Time Slots */}
                <div>
                    <label className="block text-sm font-bold text-text-main mb-3">
                        Slot Tersedia
                    </label>
                    <div className="grid grid-cols-3 gap-2">
                        {[
                            { time: "16:00", status: "disabled" },
                            { time: "17:00", status: "available" },
                            { time: "18:00", status: "selected" },
                            { time: "19:00", status: "available" },
                            { time: "20:00", status: "available" },
                            { time: "21:00", status: "disabled" },
                        ].map((slot, index) => (
                            <button
                                key={index}
                                className={`py-2 px-1 text-sm rounded border ${slot.status === "disabled"
                                    ? "border-gray-100 text-gray-400 bg-gray-50 cursor-not-allowed line-through"
                                    : slot.status === "selected"
                                        ? "border-2 border-primary bg-primary/10 text-text-main font-bold cursor-pointer"
                                        : "border-gray-100 text-text-main hover:border-primary hover:text-primary bg-white cursor-pointer transition-colors"
                                    }`}
                            >
                                {slot.time}
                            </button>
                        ))}
                    </div>
                </div>
                {/* Summary */}
                <div className="bg-[#f8fcf9] p-4 rounded-lg flex justify-between items-center">
                    <span className="text-sm font-medium text-gray-600">
                        Total (1 Jam)
                    </span>
                    <span className="font-bold text-text-main">Rp 150.000</span>
                </div>
                {/* CTA */}
                <Link href={'/venues/1/book'}>
                <button className="w-full bg-primary hover:bg-[#0fd650] text-text-main text-base font-bold py-4 rounded-xl shadow-lg shadow-primary/20 transition-all active:scale-[0.98] cursor-pointer">
                    PESAN SEKARANG
                </button>
                </Link>
                
            </div>
        </div>
    );
}
