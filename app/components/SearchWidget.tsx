import React from "react";

export default function SearchWidget() {
    return (
        <div className="relative z-30 -mt-16 px-4 sm:px-6 lg:px-8 mb-16">
            <div className="max-w-5xl mx-auto bg-surface-light rounded-xl shadow-xl border border-gray-100 p-4 md:p-6">
                <form className="grid grid-cols-1 md:grid-cols-12 gap-4 items-end">
                    {/* Location Input */}
                    <div className="md:col-span-4">
                        <label className="block text-sm font-medium text-text-main mb-2 ml-1">
                            Lokasi
                        </label>
                        <div className="relative">
                            <span className="absolute left-3 top-1/2 -translate-y-1/2 text-primary">
                                <span className="material-symbols-outlined">location_on</span>
                            </span>
                            <input
                                type="text"
                                placeholder="Jakarta, Indonesia"
                                className="w-full pl-10 pr-4 h-12 rounded-lg bg-background-light border-transparent focus:border-primary focus:ring-0 text-text-main placeholder-gray-400 font-normal transition-all outline-none"
                            />
                        </div>
                    </div>

                    {/* Sport Type */}
                    <div className="md:col-span-3">
                        <label className="block text-sm font-medium text-text-main mb-2 ml-1">
                            Olahraga
                        </label>
                        <div className="relative">
                            <span className="absolute left-3 top-1/2 -translate-y-1/2 text-primary">
                                <span className="material-symbols-outlined">
                                    sports_soccer
                                </span>
                            </span>
                            <select className="w-full pl-10 pr-8 h-12 rounded-lg bg-background-light border-transparent focus:border-primary focus:ring-0 text-text-main font-normal transition-all appearance-none cursor-pointer outline-none">
                                <option>Futsal</option>
                                <option>Padel</option>
                                <option>Badminton</option>
                                <option>Basketball</option>
                            </select>
                            <span className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-gray-400">
                                <span className="material-symbols-outlined">expand_more</span>
                            </span>
                        </div>
                    </div>

                    {/* Date Picker */}
                    <div className="md:col-span-3">
                        <label className="block text-sm font-medium text-text-main mb-2 ml-1">
                            Tanggal
                        </label>
                        <div className="relative">
                            <span className="absolute left-3 top-1/2 -translate-y-1/2 text-primary">
                                <span className="material-symbols-outlined">
                                    calendar_today
                                </span>
                            </span>
                            <input
                                type="date"
                                className="w-full pl-10 pr-4 h-12 rounded-lg bg-background-light border-transparent focus:border-primary focus:ring-0 text-text-main font-normal transition-all outline-none"
                            />
                        </div>
                    </div>

                    {/* Search Button */}
                    <div className="md:col-span-2">
                        <button
                            type="button"
                            className="w-full h-12 bg-primary hover:bg-[#0fd650] text-background-dark font-bold rounded-lg shadow-lg shadow-primary/20 transition-all flex items-center justify-center gap-2 cursor-pointer"
                        >
                            <span className="material-symbols-outlined">search</span>
                            <span>Cari</span>
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}
