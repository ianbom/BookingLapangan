export default function WhyChooseUs() {
    return (
        <section className="py-20 lg:py-28">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4 text-text-main">Kenapa Memilih ProField?</h2>
                    <p className="text-gray-500 text-lg">Pengalaman terbaik untuk atlet rekreasional dan profesional.</p>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {[
                        {
                            icon: "bolt",
                            title: "Booking Cepat",
                            desc: "Sistem real-time kami memastikan Anda mendapatkan slot lapangan dalam hitungan detik tanpa perlu menelepon."
                        },
                        {
                            icon: "verified_user",
                            title: "Lapangan Terverifikasi",
                            desc: "Setiap mitra lapangan kami telah melalui proses verifikasi standar kualitas untuk kenyamanan bermain Anda."
                        },
                        {
                            icon: "support_agent",
                            title: "Layanan Seamless",
                            desc: "Dari pencarian hingga pembayaran, kami mendesain pengalaman yang mulus dan modern untuk pelanggan."
                        }
                    ].map((item, index) => (
                        <div key={index} className="flex flex-col items-center text-center p-8 rounded-2xl bg-surface-light border border-transparent hover:border-gray-100 hover:shadow-lg transition-all duration-300 group">
                            <div className="size-20 rounded-2xl bg-white shadow-sm border border-gray-100 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                                <span className="material-symbols-outlined text-4xl text-primary">{item.icon}</span>
                            </div>
                            <h3 className="text-xl font-bold mb-3 text-text-main">{item.title}</h3>
                            <p className="text-gray-600 leading-relaxed">{item.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
