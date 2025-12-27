import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ContactHero from "../components/contact/ContactHero";
import ContactInfo from "../components/contact/ContactInfo";
import ContactForm from "../components/contact/ContactForm";
import FAQSection from "../components/contact/FAQSection";

export default function ContactPage() {
    return (
        <div className="bg-background-light min-h-screen flex flex-col font-display text-text-main">
            <Navbar />
            <main className="grow">
                {/* Main Section */}
                <section className="pt-12 md:pt-20 pb-12 px-4 sm:px-6 lg:px-8">
                    <div className="max-w-7xl mx-auto">
                        <ContactHero />

                        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">
                            {/* Left Column: Contact Info & Map */}
                            <div className="lg:col-span-5 space-y-8">
                                <ContactInfo />
                            </div>

                            {/* Right Column: Contact Form */}
                            <div className="lg:col-span-7">
                                <ContactForm />
                            </div>
                        </div>
                    </div>
                </section>

                <FAQSection />
            </main>
            <Footer />
        </div>
    );
}
