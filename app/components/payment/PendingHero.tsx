import React from "react";

export default function PendingHero() {
    return (
        <div className="bg-surface-light border border-gray-100 rounded-2xl shadow-sm p-8 md:p-12 text-center flex flex-col items-center gap-6">
            {/* Animated Pulse Icon */}
            <div className="relative flex items-center justify-center mb-2">
                <span className="absolute inline-flex h-20 w-20 rounded-full bg-primary/20 animate-ping"></span>
                <div className="relative inline-flex rounded-full h-20 w-20 bg-primary/10 items-center justify-center text-primary">
                    <span className="material-symbols-outlined text-[40px] animate-pulse">
                        hourglass_top
                    </span>
                </div>
            </div>
            <div className="flex flex-col gap-3">
                <h1 className="text-text-main text-2xl md:text-3xl font-black tracking-tight uppercase">
                    Pembayaran Menunggu Konfirmasi
                </h1>
                <p className="text-gray-500 text-base font-normal leading-relaxed max-w-md mx-auto">
                    Kami sedang memverifikasi transaksi Anda. Mohon jangan tutup halaman
                    ini atau lakukan refresh sampai konfirmasi diterima.
                </p>
            </div>
        </div>
    );
}
