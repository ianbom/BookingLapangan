import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import AboutHero from "../components/about/AboutHero";
import AboutIntro from "../components/about/AboutIntro";
import MissionVision from "../components/about/MissionVision";
import WhyChooseUs from "../components/about/WhyChooseUs";
import SportsList from "../components/about/SportsList";
import TeamSection from "../components/about/TeamSection";
import AboutCTA from "../components/about/AboutCTA";

export default function AboutPage() {
    return (
        <div className="bg-background-light min-h-screen flex flex-col font-display text-text-main">
            <Navbar />
            <main className="grow">
                <AboutHero />
                <AboutIntro />
                <MissionVision />
                <WhyChooseUs />
                <SportsList />
                <TeamSection />
                <AboutCTA />
            </main>
            <Footer />
        </div>
    );
}
