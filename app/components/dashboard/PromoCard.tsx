import React from "react";

export default function PromoCard() {
    return (
        <div className="bg-primary/10 border border-primary/20 rounded-2xl p-6 flex flex-col items-start gap-3">
            <div className="bg-primary text-slate-900 rounded-lg p-2">
                <span className="material-symbols-outlined">campaign</span>
            </div>
            <div>
                <h4 className="font-bold text-text-main">Lapangan Padel Baru!</h4>
                <p className="text-sm text-gray-600 mt-1">
                    Coba lapangan Padel yang baru dibuka akhir pekan ini dan dapatkan 2x poin.
                </p>
            </div>
            <button className="text-primary text-sm font-bold flex items-center gap-1 hover:gap-2 transition-all cursor-pointer">
                Pesan Sekarang{" "}
                <span className="material-symbols-outlined text-[16px]">
                    arrow_forward
                </span>
            </button>
        </div>
    );
}
