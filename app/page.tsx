import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import SearchWidget from "./components/SearchWidget";
import HowItWorks from "./components/HowItWorks";
import FeaturedVenues from "./components/FeaturedVenues";
import Testimonials from "./components/Testimonials";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <SearchWidget />
      <HowItWorks />
      <FeaturedVenues />
      <Testimonials />
      <Footer />
    </main>
  );
}
