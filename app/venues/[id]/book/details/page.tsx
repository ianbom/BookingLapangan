import Link from "next/link";
import React from "react";
import Navbar from "../../../../components/Navbar";
import Footer from "../../../../components/Footer";
import BookingProgress from "../../../../components/booking-details/BookingProgress";
import CustomerDataForm from "../../../../components/booking-details/CustomerDataForm";
import PaymentMethodSelector from "../../../../components/booking-details/PaymentMethodSelector";

export default function BookingDetailsPage() {
    return (
        <div className="bg-background-light min-h-screen flex flex-col font-display text-text-main">
            <Navbar />
            <main className="grow w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                {/* Progress Steps */}
                <BookingProgress step={3} />

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
                    {/* Left Column: Forms */}
                    <div className="lg:col-span-2 space-y-8">
                        {/* Booking Info Summary (Mobile only, visible on desktop in right column) */}
                        <div className="lg:hidden bg-white rounded-xl shadow-sm border border-gray-100 p-6">
                            <h2 className="text-lg font-bold mb-4 flex items-center gap-2">
                                <span className="material-symbols-outlined text-primary">info</span>
                                BOOKING INFO
                            </h2>
                            <div className="space-y-3 divide-y divide-gray-100">
                                <div className="flex justify-between py-2">
                                    <span className="text-gray-500">Field</span>
                                    <span className="font-medium text-right">Futsal Court A (Synthetic)</span>
                                </div>
                                <div className="flex justify-between py-2">
                                    <span className="text-gray-500">Date & Time</span>
                                    <span className="font-medium text-right">Oct 24, 2023 • 18:00</span>
                                </div>
                                <div className="flex justify-between py-2">
                                    <span className="text-gray-500">Duration</span>
                                    <span className="font-medium text-right">2 Hours</span>
                                </div>
                                <div className="flex justify-between py-2 pt-4">
                                    <span className="text-gray-500 font-bold">Total Price</span>
                                    <span className="font-bold text-primary text-lg text-right">Rp 300.000</span>
                                </div>
                            </div>
                        </div>

                        <CustomerDataForm />
                        <PaymentMethodSelector />

                        {/* Action Button Mobile */}
                        <div className="lg:hidden sticky bottom-4 z-10">
                            <Link href="/venues/1/book/review">
                                <button className="w-full bg-primary hover:bg-[#0fd650] text-text-main font-bold text-lg py-4 px-6 rounded-xl shadow-lg transition-colors flex items-center justify-center gap-2 cursor-pointer">
                                    LANJUTKAN KE PEMBAYARAN
                                    <span className="material-symbols-outlined">arrow_forward</span>
                                </button>
                            </Link>
                        </div>
                    </div>

                    {/* Right Column: Summary & Sticky Info (Desktop) */}
                    <div className="hidden lg:block space-y-6">
                        <div className="sticky top-24">
                            {/* Booking Summary Card */}
                            <div className="bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden">
                                <div className="h-32 bg-gray-200 relative overflow-hidden">
                                    {/* Background Pattern/Image */}
                                    <div className="absolute inset-0 bg-linear-to-br from-primary/10 to-primary/30"></div>
                                    <img
                                        alt="Green futsal field texture"
                                        className="w-full h-full object-cover opacity-80 mix-blend-overlay"
                                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuCfB4_ql1rPxNNYtYlIr8RWL-d6T1txp5pO_y7jstqAMMUGxcORlk6ibC31FrSj9btzm3v5tWzfX2IIH3ohLjVPAqDYxTE62k_5f5ZIRNIWRGzyCuXrOH1p_fSifYWblpN8ZbapznniqdzaNIHKbfOapq1elpDDQ_KGKwKxuO4zeJy9Gt_SpXqlpxlUt70uEaTKZtWnbpPr__59GdRV9kvoulDzjwVdeHP8XElQlnNU4QdVAKYek65B6DJjdxYAlkfO30Hv9GGL-ZdZ"
                                    />
                                    <div className="absolute bottom-4 left-4">
                                        <span className="bg-black/60 text-white text-xs font-bold px-2 py-1 rounded backdrop-blur-sm">Futsal</span>
                                    </div>
                                </div>
                                <div className="p-6">
                                    <h2 className="text-xl font-bold mb-1">BOOKING INFO</h2>
                                    <p className="text-gray-500 text-sm mb-6">Review your selection</p>
                                    <div className="space-y-4">
                                        {/* Field */}
                                        <div className="flex gap-3 items-start">
                                            <div className="size-8 rounded-lg bg-gray-100 flex items-center justify-center shrink-0">
                                                <span className="material-symbols-outlined text-gray-400 text-sm">stadium</span>
                                            </div>
                                            <div>
                                                <p className="text-xs text-gray-500 font-medium uppercase tracking-wide">Field</p>
                                                <p className="font-bold text-text-main">Futsal Court A (Synthetic)</p>
                                            </div>
                                        </div>
                                        {/* Date */}
                                        <div className="flex gap-3 items-start">
                                            <div className="size-8 rounded-lg bg-gray-100 flex items-center justify-center shrink-0">
                                                <span className="material-symbols-outlined text-gray-400 text-sm">calendar_month</span>
                                            </div>
                                            <div>
                                                <p className="text-xs text-gray-500 font-medium uppercase tracking-wide">Date</p>
                                                <p className="font-bold text-text-main">Thursday, Oct 24, 2023</p>
                                            </div>
                                        </div>
                                        {/* Time */}
                                        <div className="flex gap-3 items-start">
                                            <div className="size-8 rounded-lg bg-gray-100 flex items-center justify-center shrink-0">
                                                <span className="material-symbols-outlined text-gray-400 text-sm">schedule</span>
                                            </div>
                                            <div>
                                                <p className="text-xs text-gray-500 font-medium uppercase tracking-wide">Time & Duration</p>
                                                <p className="font-bold text-text-main">18:00 - 20:00 (2 Hours)</p>
                                            </div>
                                        </div>
                                    </div>
                                    <hr className="my-6 border-dashed border-gray-200" />
                                    <div className="flex justify-between items-end mb-6">
                                        <div>
                                            <p className="text-sm text-gray-500">Total Payment</p>
                                            <p className="text-xs text-gray-500">(Inc. Tax)</p>
                                        </div>
                                        <p className="text-2xl font-bold text-primary">Rp 300.000</p>
                                    </div>
                                    <Link href="/venues/1/book/review">
                                        <button className="w-full bg-primary hover:bg-[#0fd650] text-text-main font-bold py-3.5 px-6 rounded-lg shadow-md hover:shadow-lg transition-all transform hover:-translate-y-0.5 flex items-center justify-center gap-2 cursor-pointer">
                                            LANJUTKAN KE PEMBAYARAN
                                            <span className="material-symbols-outlined text-lg">arrow_forward</span>
                                        </button>
                                    </Link>
                                </div>
                            </div>
                            {/* Security Badge */}
                            <div className="flex items-center justify-center gap-2 text-gray-500 text-xs">
                                <span className="material-symbols-outlined text-sm">lock</span>
                                <span>Payments are secure and encrypted</span>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
}
