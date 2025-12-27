import React from "react";

export default function DashboardStats() {
    return (
        <section className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
            {/* Stat Card 1 */}
            <div className="bg-surface-light p-6 rounded-2xl border border-[#e2e8f0] shadow-sm flex flex-col justify-between group hover:border-primary/50 transition-colors">
                <div className="flex justify-between items-start mb-4">
                    <div className="p-3 bg-primary/10 rounded-xl text-primary">
                        <span className="material-symbols-outlined">receipt_long</span>
                    </div>
                    <span className="text-xs font-bold bg-green-100 text-green-800 px-2 py-1 rounded-md">
                        +2 minggu ini
                    </span>
                </div>
                <div>
                    <p className="text-gray-500 text-sm font-medium">Total Booking</p>
                    <p className="text-3xl font-bold mt-1 text-text-main">12</p>
                </div>
            </div>
            {/* Stat Card 2 */}
            <div className="bg-surface-light p-6 rounded-2xl border border-[#e2e8f0] shadow-sm flex flex-col justify-between group hover:border-primary/50 transition-colors">
                <div className="flex justify-between items-start mb-4">
                    <div className="p-3 bg-yellow-400/10 rounded-xl text-yellow-600">
                        <span className="material-symbols-outlined">military_tech</span>
                    </div>
                </div>
                <div>
                    <p className="text-gray-500 text-sm font-medium">Poin Saat Ini</p>
                    <p className="text-3xl font-bold mt-1 text-text-main">850</p>
                </div>
            </div>
            {/* Stat Card 3 */}
            <div className="bg-surface-light p-6 rounded-2xl border border-[#e2e8f0] shadow-sm flex flex-col justify-between group hover:border-primary/50 transition-colors relative overflow-hidden">
                {/* Background decoration */}
                <div className="absolute -right-4 -top-4 text-primary/5">
                    <span
                        className="material-symbols-outlined"
                        style={{ fontSize: "120px" }}
                    >
                        verified
                    </span>
                </div>
                <div className="flex justify-between items-start mb-4 relative z-10">
                    <div className="p-3 bg-primary/10 rounded-xl text-primary">
                        <span className="material-symbols-outlined">verified</span>
                    </div>
                </div>
                <div className="relative z-10">
                    <p className="text-gray-500 text-sm font-medium">
                        Status Member
                    </p>
                    <p className="text-3xl font-bold mt-1 text-primary">Member Gold</p>
                </div>
            </div>
        </section>
    );
}
