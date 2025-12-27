import Link from "next/link";
import React from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import SuccessHero from "../../components/payment/SuccessHero";
import TransactionCard from "../../components/payment/TransactionCard";

export default function PaymentSuccessPage() {
    return (
        <div className="bg-background-light min-h-screen flex flex-col font-display">
            <Navbar />
            <main className="flex-grow flex items-center justify-center p-4 sm:p-8 animate-fade-in">
                <div className="w-full max-w-lg">
                    <SuccessHero />
                    <TransactionCard />
                    {/* Action Buttons */}
                    <div className="flex flex-col gap-3 sm:flex-row sm:justify-center">
                        <button className="w-full sm:w-auto px-6 py-3 bg-primary hover:bg-green-400 text-black font-bold rounded-lg shadow-md hover:shadow-lg transition-all duration-200 flex items-center justify-center gap-2 transform hover:-translate-y-0.5 cursor-pointer">
                            <span className="material-symbols-outlined">history</span>
                            LIHAT RIWAYAT BOOKING
                        </button>
                        <Link
                            href="/"
                            className="w-full sm:w-auto px-6 py-3 bg-transparent border-2 border-gray-100 text-text-main font-bold rounded-lg hover:bg-gray-100 transition-colors flex items-center justify-center gap-2"
                        >
                            <span className="material-symbols-outlined">home</span>
                            KEMBALI KE HOME
                        </Link>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
}
