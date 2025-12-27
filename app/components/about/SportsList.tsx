import Link from "next/link";
import Image from "next/image";

export default function SportsList() {
    return (
        <section className="py-20 bg-surface-light border-y border-gray-100">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-end mb-12">
                    <div>
                        <h2 className="text-3xl md:text-4xl font-bold mb-3 text-text-main">Pilihan Olahraga</h2>
                        <p className="text-gray-500">Temukan venue untuk olahraga favoritmu.</p>
                    </div>
                    <Link href="/venues" className="hidden md:flex items-center gap-2 text-primary font-bold hover:underline">
                        Lihat Semua <span className="material-symbols-outlined text-sm">arrow_forward</span>
                    </Link>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
                    {[
                        {
                            name: "Futsal",
                            count: "50+ Lapangan",
                            img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBZFgM7YZRH-ET45SSpcMgbT3A28eXiNUleK_svtwyLJpqzTaFMmarhXtpyzKY1O820Z6_KG1zWsuBJe-d9S8H8TvtUXbsk9hUjodtzCD-iZtEl8t8YeOeofP8JvT4ac7n53FynH7jTzNzG804UgbydRVaYTWHvs5A7vDPS_A49sb3KzCQf52u8-Cjf0CX8eve7dmlhYmroU4Le1-7dkfklxi2rgyIlTyCVSFZOHA75iL5DRbw6AwJLH4AjEfMVbYyAkOQ47HIXjQu5"
                        },
                        {
                            name: "Padel",
                            count: "15+ Lapangan",
                            img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCQq0Q-FxoTdodYlTPSXFMeBrHb5vDrll1J96RaCytTSl0bYzxbR4u5E10PimEdJBEaSiXEzjF0EMmwZ58xCvNMttvZDci1E5jTI1mJVLKzD-Y9DRpPaLq8HcU6WzrFCauVoBJbxQxnAU-3LBKN3GwoHD4XcxE-Hj2VcLZeG3HadSCFNcsaq5uVVDXlFCsEQO6f0HGRpnuvaUgo27dKkZeQA_mijYy-O1fdQTT8PVM-OQJ_mq0CEafucnQsbXZR8-LGPs-cban3M9Cf"
                        },
                        {
                            name: "Basket",
                            count: "30+ Lapangan",
                            img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCBtCv7IaupXftSARwoqKWjwrSSZQRbFKJF2g_e-J2v3sSE17uNlSrDFZXsgf5YN6w3mjhnUnYd2WCb3AsvyUEmUx3qD26S8JCE93eZxHHf_ZUKVqhOtt5o72DZuTHEVpa0VI9hQD2kuor8loJoKcmdnDSrI5cFBVFm3P1gt2pwMXn5HoSU_0N42Ps2hQaWdawZqxXVSKo-dyeSP-EbMz-_nYASsgCO5DZp_nlK2AFJB70raaK7nPkrO8C86EhjUgHEwCSs_8ccX-fH"
                        },
                        {
                            name: "Badminton",
                            count: "100+ Lapangan",
                            img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCNfynWJQSpgH38D7QgJuwJgjlpG_pRHG3aAj3SoJVNLv5UdtKBsR17jorlOS9hbh4pWRDtRz9Q1NKgW4B1ttKYn-qBlqs4oo4rVj8wLqdHwwoKc4yalgFRGJ255CyfOKLax4aibm4auZ8vgj9wWGSvT-YV7FcdF9vZ7xMC772OIG69tZtch_L2G11uvQX9jNNKJDYtAN6AJORBaAHxuMRooCX0A1YCfAr53ugKeKk6LTQj5ZIc-Zsq9_XnyrlcwbwcAuUifB8r5x6d"
                        }
                    ].map((sport, idx) => (
                        <div key={idx} className="group relative rounded-2xl overflow-hidden aspect-3/4 cursor-pointer shadow-md hover:shadow-xl transition-all duration-300">
                            <Image
                                src={sport.img}
                                alt={sport.name}
                                fill
                                className="object-cover transition-transform duration-700 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/20 to-transparent"></div>
                            <div className="absolute bottom-0 left-0 p-5 w-full">
                                <h3 className="text-white text-xl font-bold">{sport.name}</h3>
                                <p className="text-white/80 text-sm mt-1 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                                    {sport.count}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
