import Link from "next/link";
import React from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import FailedHero from "../../components/payment/FailedHero";
import FailedTransactionDetails from "../../components/payment/FailedTransactionDetails";

export default function PaymentFailedPage() {
    return (
        <div className="bg-background-light text-text-main min-h-screen flex flex-col transition-colors duration-200 font-display">
            <Navbar />
            <main className="flex-1 flex flex-col items-center justify-center p-4 md:px-40 py-10 w-full max-w-[1200px] mx-auto">
                <div className="w-full max-w-[600px] flex flex-col gap-6">
                    <FailedHero />
                    <FailedTransactionDetails />
                    {/* Action Buttons */}
                    <div className="flex flex-col gap-3 mt-4">
                        <button className="w-full cursor-pointer flex items-center justify-center rounded-lg h-12 px-6 bg-primary hover:bg-green-400 text-background-dark text-base font-bold tracking-[0.015em] transition-all shadow-lg hover:shadow-primary/20">
                            <span className="mr-2 material-symbols-outlined">refresh</span>
                            COBA LAGI
                        </button>
                        <button className="w-full cursor-pointer flex items-center justify-center rounded-lg h-12 px-6 bg-transparent border-2 border-primary/20 hover:border-primary/50 text-text-main hover:bg-primary/5 text-base font-bold tracking-[0.015em] transition-all">
                            <span className="mr-2 material-symbols-outlined">credit_card</span>
                            GANTI METODE PEMBAYARAN
                        </button>
                        <div className="pt-4 flex justify-center">
                            <Link
                                href="/"
                                className="text-[#4c9a66] text-sm font-medium hover:text-primary transition-colors flex items-center gap-1 group"
                            >
                                <span className="material-symbols-outlined text-lg group-hover:-translate-x-1 transition-transform">
                                    arrow_back
                                </span>
                                Kembali ke Beranda
                            </Link>
                        </div>
                    </div>
                    {/* Help Section */}
                    <div className="mt-8 pt-6 border-t border-dashed border-gray-100 flex flex-col items-center gap-2">
                        <p className="text-[#4c9a66] text-sm text-center">
                            Butuh bantuan segera?
                        </p>
                        <div className="flex gap-4">
                            <Link
                                href="#"
                                className="flex items-center gap-2 text-text-main text-sm font-semibold hover:text-primary transition-colors"
                            >
                                <span className="material-symbols-outlined text-green-600">
                                    chat
                                </span>
                                WhatsApp Admin
                            </Link>
                            <span className="text-gray-300">|</span>
                            <Link
                                href="#"
                                className="flex items-center gap-2 text-text-main text-sm font-semibold hover:text-primary transition-colors"
                            >
                                <span className="material-symbols-outlined text-blue-500">
                                    mail
                                </span>
                                Email Support
                            </Link>
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
}
