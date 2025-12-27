import Link from "next/link";
import React from "react";

export default function VenueBreadcrumb() {
    return (
        <nav className="flex items-center gap-2 text-sm text-[#4c9a66] mb-6">
            <Link href="/" className="hover:text-primary">
                Home
            </Link>
            <span
                className="material-symbols-outlined"
                style={{ fontSize: "16px" }}
            >
                chevron_right
            </span>
            <Link href="/venues" className="hover:text-primary">
                Venues
            </Link>
            <span
                className="material-symbols-outlined"
                style={{ fontSize: "16px" }}
            >
                chevron_right
            </span>
            <span className="text-text-main font-medium">Galaxy Futsal Arena</span>
        </nav>
    );
}
