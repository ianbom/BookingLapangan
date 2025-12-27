import Link from "next/link";
import React from "react";
import Sidebar from "@/app/components/dashboard/Sidebar";
import DashboardStats from "@/app/components/dashboard/DashboardStats";
import UpcomingBookingCard from "@/app/components/dashboard/UpcomingBookingCard";
import LoyaltyCard from "@/app/components/dashboard/LoyaltyCard";
import PromoCard from "@/app/components/dashboard/PromoCard";

export default function DashboardPage() {
    return (
        <div className="flex h-screen w-full bg-background-light font-display text-text-main overflow-hidden">
            {/* Sidebar Navigation */}
            <Sidebar />
            

            {/* Main Content Area */}
            <main className="flex-1 flex flex-col h-full overflow-y-auto relative">
                <div className="flex-1 max-w-[1200px] mx-auto p-6 md:p-10 pb-10 w-full">
                    {/* Greeting Header */}
                    <header className="mb-8">
                        <h1 className="text-3xl md:text-4xl font-bold tracking-tight text-text-main">
                            Selamat datang, Ahmad!{" "}
                            <span className="inline-block animate-pulse">👋</span>
                        </h1>
                        <p className="text-gray-500 mt-2">Ready for your next game?</p>
                    </header>

                    {/* Stats Grid */}
                    <DashboardStats />

                    {/* Content Columns */}
                    <div className="grid grid-cols-1 xl:grid-cols-3 gap-8">
                        {/* Left Column: Upcoming Booking */}
                        <UpcomingBookingCard />

                        {/* Right Column: Loyalty & Promo */}
                        <div className="flex flex-col gap-6">
                            <LoyaltyCard />
                            {/* Mini Promo / Secondary Card */}
                            <PromoCard />
                        </div>
                    </div>
                </div>

                {/* Simple Footer */}
                <footer className="w-full py-6 px-10 border-t border-[#e2e8f0] bg-surface-light/80 backdrop-blur-md mt-auto">
                    <div className="max-w-[1200px] mx-auto flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500">
                        <div className="flex gap-6">
                            <Link href="#" className="hover:text-primary transition-colors">
                                Privacy Policy
                            </Link>
                            <Link href="#" className="hover:text-primary transition-colors">
                                Terms of Service
                            </Link>
                            <Link href="#" className="hover:text-primary transition-colors">
                                Help Center
                            </Link>
                        </div>
                        <div>
                            <p>Made for Sports Enthusiasts ⚽️🎾</p>
                        </div>
                    </div>
                </footer>
            </main>
        </div>
    );
}
