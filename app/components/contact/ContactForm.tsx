"use client";

export default function ContactForm() {
    return (
        <div className="bg-white p-8 md:p-12 rounded-4xl shadow-lg border border-gray-100 h-full">
            <h2 className="text-3xl font-bold mb-8 text-text-main">Kirim Pesan</h2>
            <form className="flex flex-col gap-6" onSubmit={(e) => e.preventDefault()}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <label className="flex flex-col gap-2">
                        <span className="text-sm font-bold text-text-main ml-1">Nama Lengkap</span>
                        <input
                            type="text"
                            placeholder="Nama Anda"
                            className="w-full h-14 px-5 rounded-xl bg-background-light border-2 border-transparent focus:border-primary focus:bg-white outline-none transition-all placeholder:text-gray-400 font-medium"
                        />
                    </label>
                    <label className="flex flex-col gap-2">
                        <span className="text-sm font-bold text-text-main ml-1">Alamat Email</span>
                        <input
                            type="email"
                            placeholder="contoh@email.com"
                            className="w-full h-14 px-5 rounded-xl bg-background-light border-2 border-transparent focus:border-primary focus:bg-white outline-none transition-all placeholder:text-gray-400 font-medium"
                        />
                    </label>
                </div>
                <label className="flex flex-col gap-2">
                    <span className="text-sm font-bold text-text-main ml-1">Subjek</span>
                    <div className="relative">
                        <input
                            type="text"
                            placeholder="Judul pesan Anda"
                            className="w-full h-14 px-5 rounded-xl bg-background-light border-2 border-transparent focus:border-primary focus:bg-white outline-none transition-all placeholder:text-gray-400 font-medium"
                        />
                        <span className="material-symbols-outlined absolute right-5 top-4 text-gray-400 pointer-events-none">edit</span>
                    </div>
                </label>
                <label className="flex flex-col gap-2">
                    <span className="text-sm font-bold text-text-main ml-1">Pesan</span>
                    <textarea
                        rows={6}
                        placeholder="Tuliskan pertanyaan atau pesan Anda di sini..."
                        className="w-full p-5 rounded-xl bg-background-light border-2 border-transparent focus:border-primary focus:bg-white outline-none resize-none transition-all placeholder:text-gray-400 font-medium"
                    ></textarea>
                </label>
                <div className="pt-4">
                    <button
                        type="submit"
                        className="group w-full md:w-auto px-10 h-14 bg-primary text-background-dark font-bold text-lg rounded-xl hover:bg-[#0fd650] hover:shadow-lg hover:shadow-primary/20 hover:-translate-y-1 active:translate-y-0 text-center flex items-center justify-center gap-3 transition-all duration-200 cursor-pointer"
                    >
                        <span>Kirim Pesan</span>
                        <span className="material-symbols-outlined text-xl group-hover:translate-x-1 transition-transform">send</span>
                    </button>
                </div>
            </form>
        </div>
    );
}
