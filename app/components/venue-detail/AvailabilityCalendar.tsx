import React from "react";

export default function AvailabilityCalendar() {
    const days = ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"];
    const dates = [
        { day: 1, status: "none" },
        { day: 2, status: "none" },
        { day: 3, status: "full" },
        { day: 4, status: "none" },
        { day: 5, status: "none" },
        { day: 6, status: "limited" },
        { day: 7, status: "full" },
        { day: 8, status: "none" },
        { day: 9, status: "available" },
        { day: 10, status: "available" },
        { day: 11, status: "available" },
        { day: 12, status: "limited" },
        { day: 13, status: "available" },
        { day: 14, status: "none" },
    ];

    return (
        <div className="bg-surface-light rounded-2xl border border-gray-100 p-6">
            <div className="flex justify-between items-center mb-4">
                <h4 className="font-bold text-text-main">Availability</h4>
                <div className="flex gap-2">
                    <button className="size-8 flex items-center justify-center rounded-full hover:bg-gray-100 cursor-pointer text-gray-600">
                        <span className="material-symbols-outlined text-sm">
                            chevron_left
                        </span>
                    </button>
                    <span className="text-sm font-medium leading-8 text-text-main">
                        Oct 2023
                    </span>
                    <button className="size-8 flex items-center justify-center rounded-full hover:bg-gray-100 cursor-pointer text-gray-600">
                        <span className="material-symbols-outlined text-sm">
                            chevron_right
                        </span>
                    </button>
                </div>
            </div>
            {/* Calendar Grid Visual */}
            <div className="grid grid-cols-7 gap-y-4 text-center text-sm mb-4">
                {days.map((day) => (
                    <div key={day} className="text-gray-400 text-xs">
                        {day}
                    </div>
                ))}
                {/* Dates */}
                {dates.map((date, index) => (
                    <div key={index} className="relative">
                        {date.status === "none" ? (
                            <span className="text-gray-300">{date.day}</span>
                        ) : (
                            <>
                                <span className="z-10 relative text-text-main">
                                    {date.day}
                                </span>
                                <div
                                    className={`absolute -bottom-1 left-1/2 -translate-x-1/2 size-1 rounded-full ${date.status === "full"
                                        ? "bg-red-500"
                                        : date.status === "limited"
                                            ? "bg-yellow-400"
                                            : "bg-primary"
                                        }`}
                                ></div>
                            </>
                        )}
                    </div>
                ))}
            </div>
            {/* Legend */}
            <div className="flex justify-between items-center text-xs text-gray-500 pt-4 border-t border-gray-100">
                <div className="flex items-center gap-1.5">
                    <div className="size-2 rounded-full bg-primary"></div>
                    <span>Available</span>
                </div>
                <div className="flex items-center gap-1.5">
                    <div className="size-2 rounded-full bg-yellow-400"></div>
                    <span>Limited</span>
                </div>
                <div className="flex items-center gap-1.5">
                    <div className="size-2 rounded-full bg-red-500"></div>
                    <span>Full</span>
                </div>
            </div>
        </div>
    );
}
