import Link from "next/link";
import React from "react";

export default function BookingHeader({ venueId }: { venueId: string }) {
    return (
        <header className="w-full bg-surface-light border-b border-[#e7f3eb] px-6 lg:px-40 py-3 shadow-sm">
            <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                    <Link
                        href={`/venues/${venueId}`}
                        className="flex items-center gap-2 text-[#4c9a66] hover:text-text-main transition-colors text-sm font-medium"
                    >
                        <span
                            className="material-symbols-outlined"
                            style={{ fontSize: "20px" }}
                        >
                            arrow_back
                        </span>
                        <span>Kembali ke Detail</span>
                    </Link>
                </div>
                <div className="flex items-center gap-2">
                    <span className="text-xs font-bold bg-primary/20 text-[#0eb545] px-3 py-1 rounded-full">
                        LANGKAH 2/3
                    </span>
                </div>
            </div>
        </header>
    );
}
