import Link from "next/link";
import React from "react";
import Sidebar from "@/app/components/dashboard/Sidebar";
import DashboardStats from "@/app/components/dashboard/DashboardStats";
import UpcomingBookingCard from "@/app/components/dashboard/UpcomingBookingCard";
import LoyaltyCard from "@/app/components/dashboard/LoyaltyCard";
import PromoCard from "@/app/components/dashboard/PromoCard";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

export default function DashboardPage() {
    return (

        <div className="flex h-screen w-full bg-background-light font-display text-text-main overflow-hidden">
            {/* Main Content Area */}
            <main className="flex-1 flex flex-col h-full overflow-y-auto relative">
                <Navbar />
                <div className="flex flex-1 w-full max-w-[1440px] mx-auto">
                    {/* <Sidebar /> */}
                    <div className="flex-1 p-6 md:p-10 pb-10 w-full min-w-0">
                        {/* Greeting Header */}
                        <header className="mb-8">
                            <h1 className="text-3xl md:text-4xl font-bold tracking-tight text-text-main">
                                Selamat datang, Ian!{" "}
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
                </div>

                {/* Simple Footer */}
                <Footer />
            </main>
        </div>
    );
}
