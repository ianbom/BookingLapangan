import React from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import PendingHero from "../../components/payment/PendingHero";
import PaymentTimer from "../../components/payment/PaymentTimer";
import PendingTransactionDetails from "../../components/payment/PendingTransactionDetails";

export default function PaymentPendingPage() {
    return (
        <div className="font-display bg-background-light text-text-main min-h-screen flex flex-col">
            <Navbar />
            <main className="flex-grow flex flex-col items-center justify-center px-4 py-12 md:py-20 relative overflow-hidden">
                {/* Decorative Background Element */}
                <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none z-0">
                    <div className="absolute right-[10%] top-[10%] w-64 h-64 rounded-full bg-primary blur-[100px]"></div>
                    <div className="absolute left-[10%] bottom-[10%] w-48 h-48 rounded-full bg-primary blur-[80px]"></div>
                </div>
                <div className="w-full max-w-[640px] z-10 flex flex-col gap-8">
                    <PendingHero />
                    <PaymentTimer />
                    <PendingTransactionDetails />
                </div>
            </main>
            <Footer />
        </div>
    );
}
