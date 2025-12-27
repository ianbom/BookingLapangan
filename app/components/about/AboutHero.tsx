
import Image from "next/image";

export default function AboutHero() {
    return (
        <section className="relative w-full py-12 md:py-20 lg:py-28">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col-reverse lg:flex-row items-center gap-12 lg:gap-20">
                    {/* Text Content */}
                    <div className="flex-1 flex flex-col gap-6 text-center lg:text-left">
                        <div className="space-y-4">
                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight text-text-main leading-tight">
                                Tentang Kami
                            </h1>
                            <p className="text-lg md:text-xl text-gray-600 leading-relaxed max-w-2xl mx-auto lg:mx-0">
                                Revolusi Cara Anda Memesan Lapangan Olahraga. Kami menghubungkan atlet dengan lapangan terbaik di kota.
                            </p>
                        </div>
                        <div className="flex justify-center lg:justify-start">
                            <button className="bg-primary hover:bg-primary/90 text-background-dark font-bold text-lg px-8 py-4 rounded-xl shadow-lg shadow-primary/20 transition-all hover:-translate-y-1">
                                Pelajari Lebih Lanjut
                            </button>
                        </div>
                    </div>
                    {/* Image */}
                    <div className="flex-1 w-full relative">
                        <div className="aspect-video rounded-2xl overflow-hidden shadow-2xl relative group transform hover:scale-[1.02] transition-transform duration-500">
                            <Image
                                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAlvuhBsa0LVYpMshHtZvdS3neOL8lmLHxTIxgmhuB1h8rt-EdcMCjTYdcID2bdh27wS9liREcgCm2sYasSJtTO3_ZfE0Cesm2T02CoxmXVeqea3xJXRKGAGNiwta-NNKAslcet1gkM085KMM9r0wuGAjjYRviDEaWK6CY-Ukmx-37v2aqnH7iRGNh7ysTaeqazk0-CICkFEb45FLBlDTtuQwf7x41eViHp04pZZC3S5LF6ukkP4bZ4eqFC1YxqWXwcEvALkO6NS9lH"
                                alt="Energetic group of friends playing futsal indoors"
                                fill
                                className="object-cover transition-transform duration-700 group-hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-linear-to-t from-black/20 to-transparent"></div>
                        </div>
                        {/* Decorative elements */}
                        <div className="absolute -z-10 -bottom-6 -right-6 w-32 h-32 bg-primary/20 rounded-full blur-2xl"></div>
                        <div className="absolute -z-10 -top-6 -left-6 w-32 h-32 bg-blue-500/20 rounded-full blur-2xl"></div>
                    </div>
                </div>
            </div>
        </section>
    );
}
