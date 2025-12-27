import React from "react";

export default function VenueHero() {
    return (
        <div
            className="mb-10 rounded-2xl overflow-hidden relative bg-cover bg-center h-[300px] flex items-center justify-center"
            style={{
                backgroundImage:
                    "linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.7)), url('https://lh3.googleusercontent.com/aida-public/AB6AXuAcBqw5qDi4WxIbQcKPjMO7RaGkZLBi_QQIvg4UEMwdX9NGhhUPyUqTD7SwyL1pbk1RRu2KappqlZEfbMK8LqzoHZtCWREF1G8ttOLgO522X2w19866aRvdtxmvW4peqKsSEZa7mQv_-Og7TRfY6WTwlcflR4uDUUColDGwU9X6VHMnvsuELSdwCGL5J5p5dzwQAv-dpEMulNHV8bmIC7mVfKrvUSzDKsHvNdFZMptNoyy0QxaFsnKwKCrwHztH1uPVkrpzXkK9ZSGm')",
            }}
        >
            <div className="text-center w-full max-w-2xl px-4 z-10 flex flex-col items-center gap-6">
                <h1 className="text-white text-3xl md:text-5xl font-black tracking-tight">
                    Temukan lapangan terbaikmu
                </h1>
                <div className="flex w-full bg-white rounded-xl p-2 shadow-xl items-center max-w-lg">
                    <div className="pl-3 text-gray-400">
                        <span className="material-symbols-outlined">search</span>
                    </div>
                    <input
                        type="text"
                        className="flex-1 border-none focus:ring-0 bg-transparent text-text-main placeholder-gray-400 text-base outline-none px-4"
                        placeholder="Cari nama lapangan..."
                    />
                    <button className="bg-primary hover:bg-[#0fd650] text-text-main font-bold rounded-lg px-6 py-2.5 transition-colors cursor-pointer">
                        Cari
                    </button>
                </div>
            </div>
        </div>
    );
}
