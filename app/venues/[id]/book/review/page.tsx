import React from "react";
import Navbar from "../../../../components/Navbar";
import Footer from "../../../../components/Footer";
import BookingProgress from "../../../../components/booking-details/BookingProgress";
import OrderReviewSummary from "../../../../components/order-review/OrderReviewSummary";
import CancellationPolicy from "../../../../components/order-review/CancellationPolicy";
import PriceBreakdown from "../../../../components/order-review/PriceBreakdown";

export default function ReviewOrderPage() {
    return (
        <div className="bg-background-light min-h-screen flex flex-col font-display text-text-main">
            <Navbar />
            <main className="grow w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                {/* Progress Steps */}
                <BookingProgress step={4} />

                <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:gap-12">
                    {/* Left Column: Details */}
                    <div className="lg:col-span-8 flex flex-col gap-6">
                        <OrderReviewSummary />

                        {/* Payment Method Display (Static as per HTML for review step) */}
                        <section className="rounded-xl border border-gray-100 bg-white p-6 shadow-sm">
                            <div className="mb-4 flex items-center justify-between">
                                <h2 className="flex items-center gap-2 text-xl font-bold text-text-main">
                                    <span className="material-symbols-outlined text-primary">credit_card</span>
                                    Metode Pembayaran
                                </h2>
                                <button className="text-sm font-bold text-primary hover:underline">Ubah</button>
                            </div>
                            <div className="flex items-center gap-4 rounded-lg border border-primary/20 bg-primary/5 p-4">
                                <div className="flex h-10 w-14 items-center justify-center rounded bg-white shadow-sm">
                                    <span className="font-bold text-xs text-blue-800">BCA</span>
                                </div>
                                <div>
                                    <p className="font-bold text-text-main">BCA Virtual Account</p>
                                    <p className="text-xs text-gray-500">Konfirmasi otomatis</p>
                                </div>
                                <div className="ml-auto">
                                    <span className="material-symbols-outlined text-primary">check_circle</span>
                                </div>
                            </div>
                        </section>

                        <CancellationPolicy />
                    </div>

                    {/* Right Column: Pricing & Action */}
                    <div className="lg:col-span-4">
                        <div className="sticky top-24 flex flex-col gap-6">
                            <PriceBreakdown />

                            {/* Help Box */}
                            <div className="rounded-xl bg-gray-50 p-4 text-center">
                                <p className="text-sm text-gray-500">Butuh bantuan?</p>
                                <a className="mt-1 inline-flex items-center gap-1 text-sm font-bold text-primary hover:underline" href="#">
                                    <span className="material-symbols-outlined text-lg">support_agent</span>
                                    Hubungi CS Kami
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
}
