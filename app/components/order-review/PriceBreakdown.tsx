import Link from "next/link";
import React from "react";

export default function PriceBreakdown() {
    return (
        <div className="rounded-xl border border-gray-100 bg-white p-6 shadow-lg">
            <h2 className="mb-6 text-xl font-bold text-text-main">Rincian Harga</h2>
            <div className="flex flex-col gap-3 border-b border-gray-100 pb-4">
                <div className="flex justify-between text-sm text-text-main">
                    <span>Sewa Lapangan (2 Jam)</span>
                    <span>Rp 300.000</span>
                </div>
                <div className="flex justify-between text-sm text-text-main">
                    <span>Biaya Layanan</span>
                    <span>Rp 2.000</span>
                </div>
                <div className="flex justify-between text-sm text-primary font-medium">
                    <span>Kode Unik</span>
                    <span>- Rp 123</span>
                </div>
            </div>
            <div className="mt-4 mb-6 flex items-center justify-between">
                <span className="text-base font-bold text-gray-500">Total Pembayaran</span>
                <span className="text-2xl font-black text-text-main">Rp 301.877</span>
            </div>
            <div className="mb-6 flex items-start gap-3">
                <div className="flex h-5 items-center">
                    <input
                        className="h-4 w-4 rounded border-gray-300 text-primary focus:ring-primary"
                        id="terms"
                        type="checkbox"
                    />
                </div>
                <div className="text-xs leading-5">
                    <label className="font-medium text-gray-500" htmlFor="terms">
                        Saya setuju dengan <a className="font-bold text-primary hover:underline" href="#">syarat dan ketentuan</a> yang berlaku di SportBooker.
                    </label>
                </div>
            </div>
            <Link href="/payment/pending">
                <button className="group w-full flex items-center justify-center gap-2 rounded-lg bg-primary py-3.5 px-4 text-base font-bold text-[#0d1b12] shadow-md transition-all hover:bg-[#0fd651] hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 cursor-pointer">
                    <span>BAYAR SEKARANG</span>
                    <span className="material-symbols-outlined transition-transform group-hover:translate-x-1">arrow_forward</span>
                </button>
            </Link>
            <p className="mt-4 text-center text-xs text-gray-400">
                <span className="material-symbols-outlined align-middle text-sm mr-1">lock</span>
                Pembayaran aman & terenkripsi
            </p>
        </div>
    );
}
