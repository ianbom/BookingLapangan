import React from "react";

export default function SuccessHero() {
    return (
        <div className="text-center mb-8">
            <div className="relative inline-flex items-center justify-center mb-6">
                {/* Glowing effect behind */}
                <div className="absolute inset-0 bg-primary/30 rounded-full blur-xl animate-pulse"></div>
                <div className="relative size-20 rounded-full bg-primary flex items-center justify-center shadow-lg shadow-primary/40">
                    <span className="material-symbols-outlined text-white text-5xl font-bold">
                        check
                    </span>
                </div>
            </div>
            <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight mb-2 text-text-main">
                PEMBAYARAN BERHASIL!
            </h1>
            <p className="text-gray-600 text-lg">
                Terima kasih! Lapangan Anda sudah siap.
            </p>
        </div>
    );
}
