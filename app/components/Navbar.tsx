import Link from "next/link";
import React from "react";

export default function Navbar() {
    return (
        <nav className="sticky top-0 z-50 w-full border-b border-text-light bg-surface-light/95 backdrop-blur-sm">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-20">
                    {/* Logo */}
                    <Link href="/" className="flex items-center gap-3">
                        <div className="size-8 text-primary bg-background-dark rounded-lg flex items-center justify-center">
                            <span
                                className="material-symbols-outlined text-primary"
                                style={{ fontSize: "24px" }}
                            >
                                sports_soccer
                            </span>
                        </div>
                        <h2 className="text-text-main text-xl font-bold tracking-tight">
                            ProField
                        </h2>
                    </Link>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex flex-1 justify-end items-center gap-8">
                        <div className="flex items-center gap-8">
                            <Link
                                href="/"
                                className="text-sm font-medium hover:text-primary transition-colors"
                            >
                                Home
                            </Link>
                            <Link
                                href="/venues"
                                className="text-sm font-medium hover:text-primary transition-colors"
                            >
                                Sewa Lapangan
                            </Link>
                            <Link
                                href="/about"
                                className="text-sm font-medium hover:text-primary transition-colors"
                            >
                                Tentang
                            </Link>
                            <Link
                                href="/contact"
                                className="text-sm font-medium hover:text-primary transition-colors"
                            >
                                Kontak
                            </Link>
                        </div>
                        <Link
                            href="/dashboard"
                            className="bg-primary hover:bg-primary/90 text-background-dark text-sm font-bold h-10 px-6 rounded-lg transition-colors duration-200 flex items-center gap-2"
                        >
                            <span
                                className="material-symbols-outlined"
                                style={{ fontSize: "20px" }}
                            >
                                login
                            </span>
                            <span>Masuk / Daftar</span>
                        </Link>
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="md:hidden flex items-center">
                        <button className="text-text-main p-2">
                            <span className="material-symbols-outlined">menu</span>
                        </button>
                    </div>
                </div>
            </div>
        </nav>
    );
}
