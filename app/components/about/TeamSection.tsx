import Image from "next/image";

export default function TeamSection() {
    return (
        <section className="py-20 lg:py-28">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <h2 className="text-3xl md:text-4xl font-bold mb-16 text-text-main">Tim Dibalik Layar</h2>
                <div className="flex flex-wrap justify-center gap-12 md:gap-20">
                    {[
                        {
                            name: "Sarah Wijaya",
                            role: "CEO & Founder",
                            img: "https://lh3.googleusercontent.com/aida-public/AB6AXuC51zYyBHWS4BmW1eHNUIMBRPZW4pPuM4S8UwNt2FHU555DnVCx-UOyB7Lp8IiTfHX5w1G802OKrRgiPJnbXdfFJR9LQDOM37xK9PXQrhWewlwFg7e38LG-79rGBblNAA0SJn8meINC_InRMQ0meqTCEc170FR-nu-Vqv6J5tx5fivYVGncDoaONMX2IbPc6v2dpPmvEIcEbi0LugTeYEO9pxBdyli0TaVFkpK_JX0BqjBSaI_8Jhd9KW7HY9hl-mi8zBeILuzZtAy4"
                        },
                        {
                            name: "Budi Santoso",
                            role: "CTO",
                            img: "https://lh3.googleusercontent.com/aida-public/AB6AXuAnfXg4IhS6a7mi44qSTzw4rV9vokePVT0NBA2af7SbRMg-cY16P_ptZI-LA6GorNhcgjim5JsofQ8mEr8QJrgtFScqHuDZLrcb3Of4wHSPzpJvpmzGz-BxDanVP_H2dcHLC0hhnrlmM9ueJW8L3IkGIQEV5VHLJ9OGJmpln-CIViPBCH_3V4MqWTmUf9shElMNnMWia7ZHGxtQQv8GYuDM177J_V5dUdBKOllQv9mZ_mKsYKzJ1p4GP8Weo2kQoSUAMz_gHIifQkPc"
                        },
                        {
                            name: "Linda Kusuma",
                            role: "Head of Operations",
                            img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDq6RpyJF1DCbr9wEbV4pv1uj7VelhLJTGgqx2fWHtDYJJvdwh-yqv7VEF40cDF8a0navDENqTVJ3Xkz5DCNixF-0D5E-4s3pyN41iJyEFDTnv6hCq53UNPXMFb9T_Cebwy62M7s9C--zkDvsEV31DNzi7t4QlOh-P86MQL4uwq8uVw-qTZpX74uvoS1WMW53yrqph4sU_OBnUjQho7hTQhtmEs8SP-itPLZHM29VkUlgf36JYIxCOSsVL8zw6fX4Q_RTh97fduNhC8"
                        }
                    ].map((member, idx) => (
                        <div key={idx} className="flex flex-col items-center group">
                            <div className="size-40 rounded-full overflow-hidden mb-6 border-4 border-white shadow-xl relative">
                                <Image
                                    src={member.img}
                                    alt={`Portrait of ${member.name}`}
                                    fill
                                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                                />
                            </div>
                            <h4 className="text-xl font-bold text-text-main mb-1">{member.name}</h4>
                            <p className="text-primary font-medium tracking-wide text-sm uppercase">{member.role}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
