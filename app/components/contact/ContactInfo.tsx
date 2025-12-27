export default function ContactInfo() {
    return (
        <>
            {/* Contact Info Cards */}
            <div className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm">
                <h3 className="text-xl font-bold mb-8 text-text-main">Informasi Kontak</h3>
                <div className="space-y-8">
                    {/* Address */}
                    <div className="flex gap-5">
                        <div className="size-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0 text-primary">
                            <span className="material-symbols-outlined text-2xl">location_on</span>
                        </div>
                        <div>
                            <p className="text-sm font-bold text-gray-400 mb-1 uppercase tracking-wide">Alamat Kantor</p>
                            <p className="text-base font-semibold text-text-main">Jl. Olahraga No. 10, Jakarta Selatan, DKI Jakarta 12430</p>
                        </div>
                    </div>
                    {/* Phone */}
                    <div className="flex gap-5">
                        <div className="size-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0 text-primary">
                            <span className="material-symbols-outlined text-2xl">call</span>
                        </div>
                        <div>
                            <p className="text-sm font-bold text-gray-400 mb-1 uppercase tracking-wide">Telepon</p>
                            <p className="text-base font-semibold text-text-main mb-1">+62 812 3456 7890</p>
                            <p className="text-xs text-gray-500">Senin - Jumat, 09:00 - 17:00</p>
                        </div>
                    </div>
                    {/* Email */}
                    <div className="flex gap-5">
                        <div className="size-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0 text-primary">
                            <span className="material-symbols-outlined text-2xl">mail</span>
                        </div>
                        <div>
                            <p className="text-sm font-bold text-gray-400 mb-1 uppercase tracking-wide">Email</p>
                            <p className="text-base font-semibold text-text-main">support@profield.id</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Map */}
            <div className="aspect-4/3 w-full rounded-2xl overflow-hidden border border-gray-200 relative group shadow-sm">
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d126907.0301429074!2d106.73356396555132!3d-6.284074212574971!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f1ec2422b981%3A0x30c0423c89b7060!2sSouth%20Jakarta%2C%20South%20Jakarta%20City%2C%20Jakarta!5e0!3m2!1sen!2sid!4v1645434193649!5m2!1sen!2sid"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen={true}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="w-full h-full grayscale-20 hover:grayscale-0 transition-all duration-700"
                ></iframe>
                <div className="absolute bottom-4 left-4 bg-white px-4 py-3 rounded-xl shadow-lg flex items-center gap-3 pointer-events-none">
                    <span className="material-symbols-outlined text-red-500 text-2xl">place</span>
                    <span className="text-sm font-bold text-text-main">Kantor Utama</span>
                </div>
            </div>

            {/* Social Media */}
            <div>
                <h3 className="text-sm font-bold uppercase tracking-wider text-gray-400 mb-5">Ikuti Kami</h3>
                <div className="flex flex-wrap gap-4">
                    {["Instagram", "Facebook", "WhatsApp"].map((social, idx) => (
                        <a
                            key={idx}
                            href="#"
                            className="flex items-center gap-2 px-5 py-3 bg-white rounded-xl border border-gray-200 hover:border-primary hover:text-primary transition-all duration-200 font-medium text-sm shadow-sm hover:shadow-md"
                        >
                            <span className="material-symbols-outlined text-xl">
                                {social === "Instagram" ? "photo_camera" : social === "Facebook" ? "public" : "chat"}
                            </span>
                            {social}
                        </a>
                    ))}
                </div>
            </div>
        </>
    );
}
