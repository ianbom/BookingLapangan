import React from "react";

export default function TimeSelector() {
    return (
        <section className="bg-surface-light p-6 rounded-xl border border-gray-100 shadow-sm">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-6 gap-4">
                <h2 className="text-xl font-bold flex items-center gap-2">
                    <span className="flex items-center justify-center w-8 h-8 rounded-full bg-primary text-text-main text-sm font-bold">
                        2
                    </span>
                    Pilih Jam
                </h2>
                {/* Legend */}
                <div className="flex items-center gap-4 text-xs font-medium">
                    <div className="flex items-center gap-1.5">
                        <div className="w-3 h-3 rounded-full bg-white border-2 border-primary"></div>
                        <span>Tersedia</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                        <div className="w-3 h-3 rounded-full bg-[#eab308]"></div>
                        <span>Dipilih</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                        <div className="w-3 h-3 rounded-full bg-[#ef4444]/20 border border-[#ef4444]/50"></div>
                        <span className="text-gray-500">Booked</span>
                    </div>
                </div>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">
                {/* Booked Slots */}
                {["08:00", "09:00"].map((time, i) => (
                    <button
                        key={`booked-${i}`}
                        className="py-3 px-2 rounded-lg border border-red-200 bg-red-50 text-red-300 flex flex-col items-center justify-center cursor-not-allowed"
                        disabled
                    >
                        <span className="text-sm font-bold">{time}</span>
                        <span className="text-[10px] mt-0.5">Booked</span>
                    </button>
                ))}

                {/* Available Slots 10-17 */}
                {[
                    "10:00",
                    "11:00",
                    "12:00",
                    "13:00",
                    "14:00",
                    "15:00",
                    "16:00",
                    "17:00",
                ].map((time, i) => (
                    <button
                        key={`avail-${i}`}
                        className="group py-3 px-2 rounded-lg border-2 border-primary/30 bg-white hover:bg-primary/10 hover:border-primary active:bg-primary/20 transition-all flex flex-col items-center justify-center relative overflow-hidden cursor-pointer"
                    >
                        <span className="text-sm font-bold text-text-main">{time}</span>
                        <span className="text-[10px] text-[#4c9a66] mt-0.5 font-medium">
                            {time === "17:00" ? "Rp 175rb" : "Rp 150rb"}
                        </span>
                    </button>
                ))}

                {/* Selected Slots */}
                <button className="py-3 px-2 rounded-l-lg border-2 border-[#eab308] bg-[#eab308] text-text-main flex flex-col items-center justify-center shadow-lg relative z-10 transform translate-x-[1px] cursor-pointer">
                    <span className="text-sm font-bold">18:00</span>
                    <div className="flex items-center gap-1 mt-0.5">
                        <span className="material-symbols-outlined text-[10px]">
                            check_circle
                        </span>
                        <span className="text-[10px] font-bold">Dipilih</span>
                    </div>
                </button>
                <button className="py-3 px-2 rounded-r-lg border-2 border-[#eab308] bg-[#eab308] text-text-main flex flex-col items-center justify-center shadow-lg relative z-10 transform -translate-x-[1px] cursor-pointer">
                    <span className="text-sm font-bold">19:00</span>
                    <div className="flex items-center gap-1 mt-0.5">
                        <span className="material-symbols-outlined text-[10px]">
                            check_circle
                        </span>
                        <span className="text-[10px] font-bold">Dipilih</span>
                    </div>
                </button>

                {/* Available Slot 20:00 */}
                <button className="group py-3 px-2 rounded-lg border-2 border-primary/30 bg-white hover:bg-primary/10 hover:border-primary active:bg-primary/20 transition-all flex flex-col items-center justify-center relative overflow-hidden cursor-pointer">
                    <span className="text-sm font-bold text-text-main">20:00</span>
                    <span className="text-[10px] text-[#4c9a66] mt-0.5 font-medium">
                        Rp 175rb
                    </span>
                </button>

                {/* Booked Slots 21-22 */}
                {["21:00", "22:00"].map((time, i) => (
                    <button
                        key={`booked-end-${i}`}
                        className="py-3 px-2 rounded-lg border border-red-200 bg-red-50 text-red-300 flex flex-col items-center justify-center cursor-not-allowed"
                        disabled
                    >
                        <span className="text-sm font-bold">{time}</span>
                        <span className="text-[10px] mt-0.5">Booked</span>
                    </button>
                ))}
            </div>
        </section>
    );
}
