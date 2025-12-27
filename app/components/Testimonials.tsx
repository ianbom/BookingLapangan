import React from "react";
import Image from "next/image";

export default function Testimonials() {
    return (
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-background-light">
            <div className="max-w-4xl mx-auto text-center">
                <h2 className="text-3xl font-bold text-text-main mb-12">
                    Apa Kata Atlet
                </h2>
                <div className="relative bg-white p-8 md:p-12 rounded-2xl shadow-sm border border-gray-100">
                    <span className="absolute top-6 left-8 text-primary opacity-30">
                        <span
                            className="material-symbols-outlined"
                            style={{ fontSize: "64px" }}
                        >
                            format_quote
                        </span>
                    </span>
                    <div className="relative z-10">
                        <div className="flex justify-center mb-6">
                            <div className="flex gap-1 text-primary">
                                {[1, 2, 3, 4, 5].map((star) => (
                                    <span
                                        key={star}
                                        className="material-symbols-outlined fill-current"
                                        style={{ fontVariationSettings: "'FILL' 1" }}
                                    >
                                        star
                                    </span>
                                ))}
                            </div>
                        </div>
                        <p className="text-xl md:text-2xl font-medium text-text-main mb-8 leading-relaxed">
                            &quot;Aplikasi termudah yang pernah saya gunakan untuk booking lapangan dengan teman-teman.
                            Dulu harus telepon 5 tempat berbeda, sekarang cuma butuh beberapa detik!&quot;
                        </p>
                        <div className="flex items-center justify-center gap-4">
                            <div className="relative w-12 h-12 rounded-full overflow-hidden">
                                <Image
                                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuCGvUo4fCjjRKu1BM8vdLX3aALSuRDkz-tFlNan5BsGIl34t9vCZwzdSLw8-svZkksCkP2oNvT7Q3FyTHWoOaljQcZGpT-KA0dyj9uqEZf6tAw4vPxuSeEvmFeHzo5N0y4TxTgc_Aj_fUQizVhyjalBuwHtlYuq7G8x0WtSHrNCno9gn2nC3WZcHVCVY5NIxCwZ8AhW5OVY3LHhsBFIlMZYRn_WOZa60IA-WT6viAdJstZpfYQG_9u9P93AuE3Q6UzOiRcnOKpQty8A"
                                    alt="Portrait of a young man smiling"
                                    fill
                                    className="object-cover"
                                />
                            </div>
                            <div className="text-left">
                                <h4 className="font-bold text-text-main">Rizky Ramadhan</h4>
                                <p className="text-sm text-gray-500">Penggemar Futsal</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
