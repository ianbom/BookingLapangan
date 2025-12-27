import React from "react";

export default function VenueFacilities() {
    const facilities = [
        { icon: "wifi", label: "Free WiFi" },
        { icon: "shower", label: "Showers" },
        { icon: "local_parking", label: "Parking Area" },
        { icon: "videocam", label: "CCTV" },
        { icon: "restaurant", label: "Canteen" },
        { icon: "checkroom", label: "Locker Room" },
        { icon: "mosque", label: "Prayer Room" },
        { icon: "ac_unit", label: "AC Waiting Room" },
    ];

    return (
        <div>
            <h3 className="text-xl font-bold text-text-main mb-4">Facilities</h3>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                {facilities.map((facility, index) => (
                    <div
                        key={index}
                        className="flex flex-col items-center justify-center p-4 rounded-xl bg-surface-light border border-gray-100 text-center gap-2"
                    >
                        <span className="material-symbols-outlined text-[#4c9a66] text-3xl">
                            {facility.icon}
                        </span>
                        <span className="text-sm font-medium text-text-main">
                            {facility.label}
                        </span>
                    </div>
                ))}
            </div>
        </div>
    );
}
