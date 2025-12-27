import Link from "next/link";

export default function AboutCTA() {
    return (
        <section className="py-16 md:py-20 px-4">
            <div className="max-w-6xl mx-auto">
                <div className="bg-background-dark rounded-3xl overflow-hidden relative shadow-2xl p-10 md:p-16 flex flex-col md:flex-row items-center justify-between gap-8">
                    {/* Background Decoration */}
                    <div className="absolute top-0 right-0 w-2/3 h-full opacity-20 bg-linear-to-l from-primary to-transparent pointer-events-none"></div>

                    <div className="relative z-10 text-center md:text-left">
                        <h2 className="text-3xl md:text-5xl font-black text-white mb-4 leading-tight">
                            Siap Untuk Bermain?
                        </h2>
                        <p className="text-gray-300 text-lg md:text-xl">
                            Jangan biarkan lapangan kosong menunggu. Pesan sekarang!
                        </p>
                    </div>
                    <Link
                        href="/venues"
                        className="relative z-10 bg-primary hover:bg-primary/90 text-background-dark text-lg font-bold px-10 py-5 rounded-xl transition-transform hover:scale-105 shadow-lg shadow-primary/30 shrink-0"
                    >
                        Cari Lapangan
                    </Link>
                </div>
            </div>
        </section>
    );
}
