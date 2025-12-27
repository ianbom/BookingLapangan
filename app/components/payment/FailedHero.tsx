import React from "react";

export default function FailedHero() {
    return (
        <div className="flex flex-col items-center text-center gap-6">
            <div className="size-24 rounded-full bg-red-100 flex items-center justify-center shadow-sm">
                <span className="material-symbols-outlined text-[#ef4444] text-5xl font-bold">
                    priority_high
                </span>
            </div>
            <div className="flex flex-col gap-2">
                <h1 className="text-text-main text-3xl font-bold tracking-tight">
                    PEMBAYARAN GAGAL!
                </h1>
                <p className="text-[#4c9a66] text-base max-w-[480px] mx-auto">
                    Oops! Kami tidak dapat memproses pembayaran Anda. Jangan khawatir, slot
                    lapangan Anda masih aman untuk <b>10 menit</b> ke depan.
                </p>
            </div>
        </div>
    );
}
