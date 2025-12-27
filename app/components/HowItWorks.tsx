import React from "react";

export default function HowItWorks() {
    const steps = [
        {
            icon: "search",
            title: "Cari Lokasi",
            description: "Temukan venue olahraga terdekat dari rumah atau kantormu.",
        },
        {
            icon: "stadium",
            title: "Pilih Venue",
            description:
                "Bandingkan harga, fasilitas, dan ulasan untuk memilih yang terbaik.",
        },
        {
            icon: "event_available",
            title: "Pilih Jadwal",
            description: "Pilih tanggal dan slot waktu yang cocok untuk timmu.",
        },
        {
            icon: "sports_handball",
            title: "Main & Nikmati",
            description: "Datang, mainkan pertandinganmu, dan pantau statistikmu.",
        },
    ];

    return (
        <section className="py-16 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-text-main mb-4">
                        Cara Kerja
                    </h2>
                    <p className="text-gray-500 max-w-2xl mx-auto">
                        Memesan pertandingan berikutnya semudah 1-2-3-4. Masuk ke lapangan
                        lebih cepat.
                    </p>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {steps.map((step, index) => (
                        <div
                            key={index}
                            className="flex flex-col items-center text-center group"
                        >
                            <div className="w-16 h-16 rounded-2xl bg-primary/10 text-primary flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-background-dark transition-colors duration-300">
                                <span
                                    className="material-symbols-outlined"
                                    style={{ fontSize: "32px" }}
                                >
                                    {step.icon}
                                </span>
                            </div>
                            <h3 className="text-lg font-bold text-text-main mb-2">
                                {step.title}
                            </h3>
                            <p className="text-sm text-gray-500 leading-relaxed">
                                {step.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
