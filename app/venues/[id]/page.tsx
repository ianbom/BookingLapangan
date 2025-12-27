import type { Metadata } from "next";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import VenueBreadcrumb from "../../components/venue-detail/VenueBreadcrumb";
import VenueGallery from "../../components/venue-detail/VenueGallery";
import VenueTitle from "../../components/venue-detail/VenueTitle";
import VenueSpecs from "../../components/venue-detail/VenueSpecs";
import VenueFacilities from "../../components/venue-detail/VenueFacilities";
import VenueDescription from "../../components/venue-detail/VenueDescription";
import VenueReviews from "../../components/venue-detail/VenueReviews";
import BookingWidget from "../../components/venue-detail/BookingWidget";
import AvailabilityCalendar from "../../components/venue-detail/AvailabilityCalendar";
import VenueMap from "../../components/venue-detail/VenueMap";

export const metadata: Metadata = {
    title: "Galaxy Futsal Arena - SportBooker",
    description: "Book your perfect game at Galaxy Futsal Arena",
};

export default function VenueDetailPage() {
    return (
        <div className="flex flex-col min-h-screen">
            <Navbar />
            <main className="flex-grow w-full max-w-[1280px] mx-auto px-4 md:px-8 py-8">
                <VenueBreadcrumb />
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                    {/* Left Column: Gallery & Info */}
                    <div className="lg:col-span-8 flex flex-col gap-8">
                        <VenueGallery />
                        <VenueTitle />
                        <VenueSpecs />
                        <VenueFacilities />
                        <VenueDescription />
                        <VenueReviews />
                    </div>

                    {/* Right Column: Sidebar Widgets */}
                    <div className="lg:col-span-4 space-y-6 sticky top-24 h-fit">
                        <BookingWidget />
                        <AvailabilityCalendar />
                        <VenueMap />
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
}
