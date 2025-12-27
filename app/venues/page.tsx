import type { Metadata } from "next";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import VenueHero from "../components/venues/VenueHero";
import FilterSidebar from "../components/venues/FilterSidebar";
import VenueList from "../components/venues/VenueList";

export const metadata: Metadata = {
    title: "Halaman Daftar Lapangan - SportBooker",
    description: "Find your perfect game",
};

export default function VenuesPage() {
    return (
        <div className="flex flex-col min-h-screen">
            <Navbar />
            <main className="flex-grow w-full max-w-[1440px] mx-auto px-4 lg:px-10 py-8">
                <VenueHero />
                <div className="flex flex-col lg:flex-row gap-8">
                    <FilterSidebar />
                    <VenueList />
                </div>
            </main>
            <Footer />
        </div>
    );
}
