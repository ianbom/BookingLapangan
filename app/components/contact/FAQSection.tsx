export default function FAQSection() {
    return (
        <section className="py-20 bg-white border-t border-gray-100">
            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <h2 className="text-2xl md:text-3xl font-bold mb-10 text-text-main">Pertanyaan Umum</h2>
                <div className="grid md:grid-cols-2 gap-6 text-left">
                    <div className="p-8 rounded-2xl bg-background-light border border-gray-100 hover:border-primary/30 transition-colors">
                        <h4 className="text-lg font-bold text-text-main mb-3 flex items-center gap-3">
                            <div className="size-8 rounded-lg bg-primary/20 flex items-center justify-center text-primary shrink-0">
                                <span className="material-symbols-outlined text-xl">help</span>
                            </div>
                            Bagaimana cara reschedule?
                        </h4>
                        <p className="text-gray-600 pl-11 text-sm leading-relaxed">
                            Anda dapat mengubah jadwal booking melalui menu &quot;Booking Saya&quot; maksimal 24 jam sebelum jadwal main.
                        </p>
                    </div>
                    <div className="p-8 rounded-2xl bg-background-light border border-gray-100 hover:border-primary/30 transition-colors">
                        <h4 className="text-lg font-bold text-text-main mb-3 flex items-center gap-3">
                            <div className="size-8 rounded-lg bg-primary/20 flex items-center justify-center text-primary shrink-0">
                                <span className="material-symbols-outlined text-xl">payments</span>
                            </div>
                            Metode pembayaran apa saja?
                        </h4>
                        <p className="text-gray-600 pl-11 text-sm leading-relaxed">
                            Kami menerima transfer bank, e-wallet (GoPay, OVO), dan kartu kredit untuk semua transaksi booking.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
