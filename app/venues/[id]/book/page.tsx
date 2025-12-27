import Link from "next/link";
import React from "react";
import BookingHeader from "../../../components/booking/BookingHeader";
import DateSelector from "../../../components/booking/DateSelector";
import TimeSelector from "../../../components/booking/TimeSelector";
import BookingSummaryCard from "../../../components/booking/BookingSummaryCard";
import Navbar from "../../../components/Navbar";
import Footer from "../../../components/Footer";

// Since this is a server component handling dynamic params
type PageProps = {
    params: Promise<{ id: string }>;
};

export default async function BookingPage({ params }: PageProps) {
    const { id } = await params;

    return (
        <div className="bg-background-light min-h-screen flex flex-col font-display">
            <Navbar />
            <BookingHeader venueId={id} />

            {/* Main Content */}
            <main className="flex-grow w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-40 py-8">
                {/* Page Heading */}
                <div className="mb-8">
                    <h1 className="text-3xl md:text-4xl font-black text-text-main mb-2 tracking-tight">
                        Booking: Lapangan Futsal Pro
                    </h1>
                    <p className="text-[#4c9a66] text-base">
                        Silahkan pilih tanggal dan jam main yang tersedia.
                    </p>
                </div>

                <div className="flex flex-col lg:flex-row gap-8 items-start">
                    {/* Left Column: Selection Area */}
                    <div className="flex-1 w-full space-y-8">
                        <DateSelector />
                        <TimeSelector />
                    </div>

                    {/* Right Column: Summary Card (Sticky) */}
                    <div className="w-full lg:w-[380px] lg:sticky lg:top-24 flex-shrink-0">
                        <BookingSummaryCard />
                        {/* Help Text */}
                        <p className="text-center text-xs text-[#4c9a66] mt-4">
                            Butuh bantuan?{" "}
                            <Link href="#" className="underline hover:text-text-main">
                                Hubungi Admin
                            </Link>
                        </p>
                    </div>
                </div>
            </main>

            {/* Footer (Simplified as per booking page design often requires, but user asked to not change footer, so we can reuse the global one or just the simple one from HTML if strictly following design. The HTML had a unique simple footer, so I will implement that unique simple footer here as part of the page or reuse the main one. The instructions said 'Tidak perlu mengubah header dan footer' but the HTML HAS a different header and footer. Usually this means keep the PROJECT's header/footer, but for a standalone booking flow, the provided HTML is specific. I will follow the HTML's structure for the content but maybe I should have reused the main Footer if they meant 'keep the main layout'. However, the booking flow usually has a minimized footer. I will use the one from the HTML to match the specific design request.) */}
            <Footer />
        </div>
    );
}
