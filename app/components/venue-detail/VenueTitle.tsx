import Link from "next/link";
import React from "react";

export default function VenueTitle() {
    return (
        <div className="border-b border-gray-100 pb-8">
            <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                <div>
                    <h1 className="text-text-main text-3xl md:text-4xl font-bold leading-tight mb-2">
                        Galaxy Futsal Arena - Court A
                    </h1>
                    <div className="flex items-center gap-2 text-[#4c9a66] text-sm">
                        <span
                            className="material-symbols-outlined"
                            style={{ fontSize: "18px" }}
                        >
                            location_on
                        </span>
                        <span>Jakarta Selatan, Indonesia</span>
                        <Link href="#" className="underline hover:text-primary ml-1">
                            Lihat di Peta
                        </Link>
                    </div>
                </div>
                <div className="flex flex-col items-end">
                    <div className="flex items-center gap-1 bg-[#e7f3eb] px-2 py-1 rounded-lg">
                        <span
                            className="material-symbols-outlined text-primary text-[20px]"
                            style={{ fontVariationSettings: "'FILL' 1" }}
                        >
                            star
                        </span>
                        <span className="text-text-main font-bold">4.8</span>
                        <span className="text-xs text-[#4c9a66]">(124 ulasan)</span>
                    </div>
                </div>
            </div>
            {/* Chips */}
            <div className="flex gap-3 flex-wrap">
                {[
                    { icon: "sports_soccer", label: "Futsal" },
                    { icon: "roofing", label: "Indoor" },
                    { icon: "layers", label: "Lantai Vinyl" },
                ].map((chip, index) => (
                    <div
                        key={index}
                        className="flex h-8 items-center justify-center gap-x-2 rounded-full bg-[#e7f3eb] px-4"
                    >
                        <span
                            className="material-symbols-outlined text-[#4c9a66]"
                            style={{ fontSize: "18px" }}
                        >
                            {chip.icon}
                        </span>
                        <p className="text-text-main text-sm font-medium">{chip.label}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}
