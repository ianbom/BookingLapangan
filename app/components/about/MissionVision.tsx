export default function MissionVision() {
    return (
        <section className="py-20 bg-background-light">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
                    {/* Mission */}
                    <div className="bg-white p-8 md:p-10 rounded-3xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                        <div className="size-14 rounded-2xl bg-primary/10 flex items-center justify-center text-primary mb-6">
                            <span className="material-symbols-outlined text-3xl">flag</span>
                        </div>
                        <h3 className="text-2xl font-bold mb-4 text-text-main">Misi Kami</h3>
                        <p className="text-gray-600 leading-relaxed">
                            Membangun ekosistem olahraga yang terintegrasi, transparan, dan mudah diakses oleh siapa saja, di mana saja, kapan saja.
                        </p>
                    </div>
                    {/* Vision */}
                    <div className="bg-white p-8 md:p-10 rounded-3xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                        <div className="size-14 rounded-2xl bg-primary/10 flex items-center justify-center text-primary mb-6">
                            <span className="material-symbols-outlined text-3xl">visibility</span>
                        </div>
                        <h3 className="text-2xl font-bold mb-4 text-text-main">Visi Kami</h3>
                        <p className="text-gray-600 leading-relaxed">
                            Menjadi platform pemesanan lapangan olahraga nomor satu di Indonesia yang terpercaya dan mendukung gaya hidup sehat masyarakat.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
