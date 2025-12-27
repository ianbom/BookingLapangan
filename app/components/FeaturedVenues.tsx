import React from "react";
import Image from "next/image";

export default function FeaturedVenues() {
    const venues = [
        {
            name: "Downtown Futsal Arena",
            location: "Jakarta Pusat",
            tags: ["Futsal", "Indoor"],
            price: "Rp 150.000",
            rating: "4.8",
            image:
                "https://lh3.googleusercontent.com/aida-public/AB6AXuAUHQWi3kMQpJJx2A3WPaK0ugaYXeqD1HfQ1VcB7nYvYhwYsSUBLo92IE2JZ99dEtHSvUnDmKql-tYpkc60Ac9u2KcdARL9yijcsb5ONPYdFrf7YMtkHNqF8ECaVqOYlZ61WGVJdQfSlz_GzUsQ9DScLxh6FRwfId0moNCeQBhTpvxIE9XBPvhJDr836lu9By37aaON7cLWZLrzx8-4j5N4lmGAjVXWvg_DNQKOzMyxUkykZZ81cVh2F7_aF4sPoQh36IPlxR18CLqn",
        },
        {
            name: "Padel Pro Center",
            location: "Jakarta Selatan",
            tags: ["Padel", "Outdoor"],
            price: "Rp 250.000",
            rating: "4.9",
            image:
                "https://lh3.googleusercontent.com/aida-public/AB6AXuCcPX_fuHzH-MlEvr6lcQRavQHU8jk5-kFP2trcn7Ft5dW-jMMX4fS94QEqVMYgpo27mQ2mee_X-FV7h2Qecy6X8t5hndgxjtsj1B4-z1iY5PSIdJkMoS60frRrjPLGYcqS5pOFNUDoiHvV1L7LAgLVDAOJJ7k3wjM78xBzqFpexJpxBY5IHYbfRvKVm99Jv8_HQAYAhoPPEzrp0LNvazunU-fyLcMRsvAX6giDu356dc3Yvrooe5wXbCyOtupSHIT93Sd1E5NacY19",
        },
        {
            name: "City Hoops Gym",
            location: "Jakarta Barat",
            tags: ["Basket", "Indoor"],
            price: "Rp 200.000",
            rating: "4.5",
            image:
                "https://lh3.googleusercontent.com/aida-public/AB6AXuCc1cqzvN-56EBvSNGuiY-3GEmjxTqMLaIqD4M1VrPHBvcM8GwnUINDjOgLAb605KLNplo6yk7Iz6VbOX2sRHWJ0uhBWrIRaAhtnYvb3umjkIh8nwIWZuQZnOxM3HKx9YVKZNokDIKQqpd5EbU8VBS1LvMVeKUmDOEv83AJSnoDOGlR92T4KoL7WuoynoPw2Tm5AoIZaB57gj_favN9tkBPo9YoJnMtpJ_fjZZF5KtXx5vkjmG0X-lCQRO1YcS0wsqRoWyPXN559915",
        },
        {
            name: "Smash Badminton Hall",
            location: "Jakarta Utara",
            tags: ["Bulutangkis", "Indoor"],
            price: "Rp 100.000",
            rating: "4.7",
            image:
                "https://lh3.googleusercontent.com/aida-public/AB6AXuCIwh5B0L6oXebFRMFmFXwJnyw2H-UZNhR0IlwFUalwmaUX1MGThgffVZYSuGI-ROlo-7-iy9O3PSrqpbEDoKL0r9P42zab4QNnCgUYpaPhXQmOYjwte3jWNTtGXoYJBCpifMlQTj3bgV9Fd4zBamwPHX67f7IvwxnucD7nOmDJ2Julrcq9YjMeKX-cWLvgISbdTg0WgZCNFiWrAvNLqIgFFTBonjnO3PxpamUsvofZSDjlG2NYkIn0BWyNTtKfX8fN5Q2J5SscVu74",
        },
    ];

    return (
        <section className="py-16 bg-white border-t border-gray-100">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-end mb-10">
                    <div>
                        <h2 className="text-3xl font-bold text-text-main mb-2">
                            Venue Unggulan
                        </h2>
                        <p className="text-gray-500">Lapangan terbaik pilihan untukmu.</p>
                    </div>
                    <a
                        href="#"
                        className="hidden sm:flex items-center gap-1 text-primary font-bold hover:underline"
                    >
                        Lihat semua
                        <span
                            className="material-symbols-outlined"
                            style={{ fontSize: "20px" }}
                        >
                            arrow_forward
                        </span>
                    </a>
                </div>

                {/* Horizontal Scroll Container */}
                <div className="flex overflow-x-auto pb-8 gap-6 no-scrollbar snap-x snap-mandatory">
                    {venues.map((venue, index) => (
                        <div
                            key={index}
                            className="min-w-[280px] md:min-w-[340px] bg-background-light rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all snap-start border border-gray-100 group"
                        >
                            <div className="relative h-48 overflow-hidden">
                                <Image
                                    src={venue.image}
                                    alt={venue.name}
                                    fill
                                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                                />
                                <div className="absolute top-3 right-3 bg-white px-2 py-1 rounded-md flex items-center gap-1 text-xs font-bold shadow-sm">
                                    <span
                                        className="material-symbols-outlined text-yellow-400 fill-current"
                                        style={{
                                            fontSize: "14px",
                                            fontVariationSettings: "'FILL' 1",
                                        }}
                                    >
                                        star
                                    </span>
                                    <span className="text-text-main">{venue.rating}</span>
                                </div>
                            </div>
                            <div className="p-5">
                                <div className="flex justify-between items-start mb-2">
                                    <div>
                                        <h3 className="text-lg font-bold text-text-main truncate">
                                            {venue.name}
                                        </h3>
                                        <p className="text-sm text-gray-500 flex items-center gap-1 mt-1">
                                            <span
                                                className="material-symbols-outlined"
                                                style={{ fontSize: "14px" }}
                                            >
                                                location_on
                                            </span>
                                            {venue.location}
                                        </p>
                                    </div>
                                </div>
                                <div className="flex flex-wrap gap-2 my-4">
                                    {venue.tags.map((tag, i) => (
                                        <span
                                            key={i}
                                            className="px-2 py-1 bg-primary/10 text-primary text-xs font-medium rounded"
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                                <div className="flex items-center justify-between mt-4 pt-4 border-t border-gray-200">
                                    <div className="flex flex-col">
                                        <span className="text-xs text-gray-500">Mulai dari</span>
                                        <span className="text-lg font-bold text-text-main">
                                            {venue.price}
                                            <span className="text-sm font-normal text-gray-500">
                                                /jam
                                            </span>
                                        </span>
                                    </div>
                                    <button className="bg-primary hover:bg-[#0fd650] text-background-dark font-bold py-2 px-4 rounded-lg text-sm transition-colors cursor-pointer">
                                        Pesan Sekarang
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
