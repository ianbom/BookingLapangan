export default function OrderReviewSummary() {
    return (
        <section className="rounded-xl border border-gray-100 bg-white p-6 shadow-sm">
            <h2 className="mb-6 flex items-center gap-2 text-xl font-bold text-text-main">
                <span className="material-symbols-outlined text-primary">receipt_long</span>
                Ringkasan Pesanan
            </h2>
            <div className="flex flex-col gap-6 sm:flex-row">
                {/* Image */}
                <div className="shrink-0">
                    <div className="h-48 w-full sm:w-64 overflow-hidden rounded-lg bg-gray-200">
                        <div
                            className="h-full w-full bg-cover bg-center transition-transform hover:scale-105"
                            style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuCD5DtmCVjS-pDhKKpeyRuAT-UyVXvdT5IxIb1SuPicWBIR4nhkGlDFDDf0rFWH8vpJdrR5gKo9UgahT_DJzfXW6v_SFvXm7uV1UNmUb8kyUtnnjbS-m_ZHvIeM0jBTrWfljU8-MLO0h253QUL7W8q1XX7uteoRkuxYw0gLPYTkXWfThBynma_R-dQC-dTvFK3PxpvaRj34-Reo3lvSCC9T18dfQUbFKelxtF9LLzl6hFLo_w5dJOsU_lz1UXdEEdrUwURL6ohbNs3l")' }}
                        ></div>
                    </div>
                </div>
                {/* Details */}
                <div className="flex flex-1 flex-col justify-between gap-4">
                    <div>
                        <h3 className="text-2xl font-bold text-text-main">Grand Futsal Arena</h3>
                        <p className="flex items-center gap-1 text-sm text-gray-500">
                            <span className="material-symbols-outlined text-lg">location_on</span>
                            Jl. Sudirman No. 45, Jakarta Selatan
                        </p>
                        <div className="mt-2 inline-flex items-center rounded bg-primary/10 px-2 py-1 text-xs font-bold text-green-700">
                            Lapangan A (Rumput Sintetis)
                        </div>
                    </div>
                    <div className="grid grid-cols-1 gap-y-3 gap-x-6 sm:grid-cols-2 text-sm text-text-main">
                        <div className="flex items-center gap-3">
                            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-gray-50">
                                <span className="material-symbols-outlined text-primary">calendar_today</span>
                            </div>
                            <div>
                                <p className="text-xs text-gray-500">Tanggal</p>
                                <p className="font-semibold">Senin, 12 Okt 2023</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-3">
                            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-gray-50">
                                <span className="material-symbols-outlined text-primary">schedule</span>
                            </div>
                            <div>
                                <p className="text-xs text-gray-500">Waktu</p>
                                <p className="font-semibold">19:00 - 21:00 (2 Jam)</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-3">
                            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-gray-50">
                                <span className="material-symbols-outlined text-primary">person</span>
                            </div>
                            <div>
                                <p className="text-xs text-gray-500">Pemesan</p>
                                <p className="font-semibold">Budi Santoso</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-3">
                            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-gray-50">
                                <span className="material-symbols-outlined text-primary">chat</span>
                            </div>
                            <div>
                                <p className="text-xs text-gray-500">WhatsApp</p>
                                <p className="font-semibold">0812-3456-7890</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
