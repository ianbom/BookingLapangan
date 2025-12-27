import React from "react";

export default function DateSelector() {
    const days = ["Min", "Sen", "Sel", "Rab", "Kam", "Jum", "Sab"];

    // Generating calendar days logic similar to HTML mockup
    const calendarDays = [
        ...Array(3).fill({ type: "empty" }), // Previous month filler
        ...[1, 2, 3, 4].map(d => ({ type: "disabled", date: d })),
        ...Array.from({ length: 19 }, (_, i) => ({ type: "active", date: i + 5 })),
        { type: "selected", date: 24 },
        ...Array.from({ length: 6 }, (_, i) => ({ type: "active", date: i + 25 })),
    ];

    return (
        <section className="bg-surface-light p-6 rounded-xl border border-gray-100 shadow-sm">
            <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-bold flex items-center gap-2">
                    <span className="flex items-center justify-center w-8 h-8 rounded-full bg-primary text-text-main text-sm font-bold">
                        1
                    </span>
                    Pilih Tanggal
                </h2>
            </div>
            {/* Calendar Implementation */}
            <div className="w-full">
                <div className="flex items-center justify-between mb-4 px-2">
                    <button className="p-2 hover:bg-gray-100 rounded-full transition-colors cursor-pointer">
                        <span className="material-symbols-outlined">chevron_left</span>
                    </button>
                    <span className="text-lg font-bold">November 2023</span>
                    <button className="p-2 hover:bg-gray-100 rounded-full transition-colors cursor-pointer">
                        <span className="material-symbols-outlined">chevron_right</span>
                    </button>
                </div>
                <div className="grid grid-cols-7 gap-1 md:gap-2 mb-2 text-center">
                    {days.map((day) => (
                        <div key={day} className="text-xs font-bold text-[#4c9a66] uppercase py-2">
                            {day}
                        </div>
                    ))}
                </div>
                <div className="grid grid-cols-7 gap-1 md:gap-2">
                    {calendarDays.map((item, index) => {
                        if (item.type === "empty") {
                            return <div key={index} className="aspect-square"></div>;
                        }
                        if (item.type === "disabled") {
                            return (
                                <button
                                    key={index}
                                    className="aspect-square flex items-center justify-center rounded-lg text-gray-300 cursor-not-allowed text-sm"
                                    disabled
                                >
                                    {item.date}
                                </button>
                            );
                        }
                        if (item.type === "selected") {
                            return (
                                <button
                                    key={index}
                                    className="aspect-square flex items-center justify-center rounded-lg bg-text-main text-white font-bold shadow-md transform scale-105 cursor-pointer"
                                >
                                    {item.date}
                                </button>
                            );
                        }
                        return (
                            <button
                                key={index}
                                className="aspect-square flex items-center justify-center rounded-lg text-text-main hover:bg-primary/20 transition-colors text-sm font-medium cursor-pointer"
                            >
                                {item.date}
                            </button>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
