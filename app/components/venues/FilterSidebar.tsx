import React from "react";

export default function FilterSidebar() {
    return (
        <aside className="w-full lg:w-72 flex-shrink-0 space-y-8">
            {/* Filter Header mobile toggle */}
            <div className="lg:hidden flex justify-between items-center mb-4">
                <h3 className="font-bold text-lg">Filter</h3>
                <button className="text-sm font-medium text-primary">Reset</button>
            </div>

            <div className="bg-white rounded-xl p-5 border border-gray-100 shadow-sm">
                {/* Location Filter */}
                <div className="mb-6">
                    <label className="block text-sm font-bold text-text-main mb-3">
                        Lokasi
                    </label>
                    <div className="relative">
                        <select className="w-full rounded-lg border-gray-100 bg-[#f8fcf9] text-text-main h-12 px-4 appearance-none focus:border-primary focus:ring-0 outline-none cursor-pointer">
                            <option value="">Pilih Kota</option>
                            <option value="jakarta">Jakarta</option>
                            <option value="bandung">Bandung</option>
                            <option value="surabaya">Surabaya</option>
                        </select>
                        <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-primary">
                            <span className="material-symbols-outlined">expand_more</span>
                        </div>
                    </div>
                </div>

                <hr className="border-gray-100 my-6" />

                {/* Price Range */}
                <div className="mb-6">
                    <div className="flex justify-between items-center mb-4">
                        <label className="text-sm font-bold text-text-main">
                            Harga / Jam
                        </label>
                    </div>
                    <div className="px-2">
                        <input
                            type="range"
                            min="50000"
                            max="1000000"
                            step="10000"
                            className="w-full h-1 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-primary"
                        />
                        <div className="flex justify-between mt-2 text-xs font-medium text-gray-500">
                            <span>Rp 50rb</span>
                            <span>Rp 1jt+</span>
                        </div>
                    </div>
                </div>

                <hr className="border-gray-100 my-6" />

                {/* Facilities */}
                <div>
                    <label className="block text-sm font-bold text-text-main mb-3">
                        Fasilitas
                    </label>
                    <div className="space-y-3">
                        {[
                            "Wifi",
                            "Parking Area",
                            "Shower",
                            "Locker Room",
                            "Canteen",
                        ].map((facility, index) => (
                            <label
                                key={index}
                                className="flex items-center gap-3 cursor-pointer group"
                            >
                                <input
                                    type="checkbox"
                                    className="size-5 rounded border-gray-300 text-primary focus:ring-primary bg-gray-50 bg-white"
                                    defaultChecked={facility === "Parking Area"}
                                />
                                <span className="text-sm text-gray-700 group-hover:text-primary transition-colors">
                                    {facility}
                                </span>
                            </label>
                        ))}
                    </div>
                </div>
            </div>
        </aside>
    );
}
