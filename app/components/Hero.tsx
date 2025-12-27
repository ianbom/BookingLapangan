import React from "react";
import Image from "next/image";

export default function Hero() {
    return (
        <div className="relative w-full bg-surface-dark overflow-hidden">
            {/* Background Image with Overlay */}
            <div className="absolute inset-0 z-0">
                <div className="absolute inset-0 bg-linear-to-r from-background-dark/90 to-background-dark/40 z-10"></div>
                <Image
                    src="/lapangan.jpg"
                    alt="Action shot of a soccer match on a green field at night"
                    fill
                    className="object-cover opacity-80"
                    priority
                />
            </div>

            <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-32 md:pt-32 md:pb-40">
                <h1 className="text-4xl md:text-6xl font-black text-white leading-tight mb-6 tracking-tight">
                    Booking Lapangan <br />
                    <span className="text-primary">Jadi Mudah</span>
                </h1>
                <p className="text-lg md:text-xl text-gray-200 font-light mb-8 max-w-lg">
                    Temukan dan pesan lapangan Futsal dan Padel terbaik di dekatmu dalam hitungan detik.
                    Tanpa telepon, tanpa ribet.
                </p>
                <div className="flex flex-wrap gap-4">
                    <button className="h-12 px-8 bg-primary hover:bg-[#0fd650] text-background-dark font-bold rounded-lg transition-all flex items-center gap-2">
                        <span>Cari Lapangan</span>
                        <span
                            className="material-symbols-outlined"
                            style={{ fontSize: "20px" }}
                        >
                            arrow_forward
                        </span>
                    </button>
                    <button className="h-12 px-8 bg-white/10 hover:bg-white/20 backdrop-blur-md text-white border border-white/20 font-bold rounded-lg transition-all">
                        Pelajari Lebih Lanjut
                    </button>
                </div>
            </div>
        </div>

    );
}
