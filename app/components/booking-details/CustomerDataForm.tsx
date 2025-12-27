export default function CustomerDataForm() {
    return (
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
            <div className="px-6 py-4 border-b border-gray-100 bg-gray-50/50">
                <h2 className="text-xl font-bold flex items-center gap-3 text-text-main">
                    <div className="size-8 rounded-full bg-primary/20 flex items-center justify-center text-primary">
                        <span className="material-symbols-outlined text-sm">person</span>
                    </div>
                    DATA PEMESAN
                </h2>
            </div>
            <div className="p-6 space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Name */}
                    <div className="space-y-2">
                        <label className="text-sm font-medium text-text-main" htmlFor="fullname">Nama Lengkap</label>
                        <input
                            className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 bg-white focus:border-primary focus:ring-primary outline-none transition-all placeholder:text-gray-400 font-medium"
                            id="fullname"
                            placeholder="Masukkan nama lengkap"
                            type="text"
                            defaultValue="Budi Santoso"
                        />
                    </div>
                    {/* WhatsApp */}
                    <div className="space-y-2">
                        <label className="text-sm font-medium text-text-main" htmlFor="whatsapp">Nomor WhatsApp</label>
                        <div className="relative">
                            <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 font-medium">+62</span>
                            <input
                                className="w-full pl-14 pr-4 py-3 rounded-lg border-2 border-gray-200 bg-white focus:border-primary focus:ring-primary outline-none transition-all placeholder:text-gray-400 font-medium"
                                id="whatsapp"
                                placeholder="8xx-xxxx-xxxx"
                                type="tel"
                                defaultValue="81234567890"
                            />
                        </div>
                    </div>
                </div>
                {/* Email */}
                <div className="space-y-2">
                    <label className="text-sm font-medium text-text-main" htmlFor="email">Email <span className="text-gray-400 font-normal">(Opsional)</span></label>
                    <input
                        className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 bg-white focus:border-primary focus:ring-primary outline-none transition-all placeholder:text-gray-400 font-medium"
                        id="email"
                        placeholder="nama@email.com"
                        type="email"
                    />
                </div>
                {/* Notes */}
                <div className="space-y-2">
                    <label className="text-sm font-medium text-text-main" htmlFor="notes">Catatan Khusus</label>
                    <textarea
                        className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 bg-white focus:border-primary focus:ring-primary outline-none transition-all placeholder:text-gray-400 font-medium resize-none"
                        id="notes"
                        placeholder="Contoh: Butuh rompi tambahan"
                        rows={3}
                    ></textarea>
                </div>
            </div>
        </div>
    );
}
