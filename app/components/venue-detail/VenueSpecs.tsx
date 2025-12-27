import React from "react";

export default function VenueSpecs() {
    const specs = [
        { icon: "square_foot", label: "Ukuran", value: "25 x 15 Meter" },
        { icon: "texture", label: "Jenis Lantai", value: "Vinyl Premium" },
        { icon: "groups", label: "Kapasitas", value: "Maks 12 Pemain" },
    ];

    return (
        <div>
            <h3 className="text-xl font-bold text-text-main mb-4">
                Spesifikasi Lapangan
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {specs.map((spec, index) => (
                    <div
                        key={index}
                        className="bg-surface-light border border-gray-100 p-4 rounded-xl flex items-center gap-4"
                    >
                        <div className="size-10 rounded-full bg-[#e7f3eb] flex items-center justify-center text-primary">
                            <span className="material-symbols-outlined">{spec.icon}</span>
                        </div>
                        <div>
                            <p className="text-xs text-[#4c9a66] uppercase font-bold tracking-wider">
                                {spec.label}
                            </p>
                            <p className="text-text-main font-medium">{spec.value}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
