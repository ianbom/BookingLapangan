import React from "react";

export default function LoyaltyCard() {
    return (
        <div className="flex flex-col gap-6">
            <h2 className="text-xl font-bold tracking-tight uppercase text-text-main">
                Progres Loyalitas
            </h2>
            {/* Loyalty Card */}
            <div className="bg-linear-to-br from-slate-900 to-slate-800 text-white rounded-2xl p-6 shadow-lg relative overflow-hidden">
                {/* Abstract decoration */}
                <div className="absolute top-0 right-0 -mr-8 -mt-8 w-32 h-32 bg-primary/20 rounded-full blur-2xl"></div>
                <div className="relative z-10">
                    <div className="flex items-center gap-2 mb-2">
                        <span className="material-symbols-outlined text-yellow-400">
                            workspace_premium
                        </span>
                        <span className="text-xs font-bold uppercase tracking-wider text-slate-300">
                            Pelacak Reward
                        </span>
                    </div>
                    <h3 className="text-xl font-bold leading-tight mb-4">
                        <span className="text-primary">1 lagi</span> dapat 1 jam GRATIS!
                    </h3>
                    <div className="mb-2 flex justify-between text-xs font-medium text-slate-300">
                        <span>Progres</span>
                        <span>4/5 Booking</span>
                    </div>
                    {/* Progress Bar */}
                    <div className="h-4 w-full bg-slate-700/50 rounded-full overflow-hidden mb-6 backdrop-blur-sm border border-slate-600/50">
                        <div className="h-full bg-primary w-[80%] rounded-full shadow-[0_0_10px_rgba(19,236,91,0.5)] relative overflow-hidden">
                            <div className="absolute inset-0 bg-white/20 w-full h-full animate-[shimmer_2s_infinite] -skew-x-12"></div>
                        </div>
                    </div>
                    <p className="text-xs text-slate-400 mb-4">
                        Selesaikan satu booking lagi untuk mendapatkan kupon reward yang berlaku untuk lapangan standar apa pun.
                    </p>
                    <button className="w-full py-2 rounded-lg bg-white/10 hover:bg-white/20 border border-white/10 text-sm font-medium transition-colors cursor-pointer">
                        Lihat Katalog Reward
                    </button>
                </div>
            </div>
            {/* Shimmer animation moved to global CSS */}
        </div>
    );
}
