import Link from "next/link";
import React from "react";

export default function PendingTransactionDetails() {
    return (
        <>
            {/* Transaction Details */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full">
                <div className="flex gap-4 items-start rounded-xl border border-gray-100 bg-surface-light p-5 shadow-sm transition-transform hover:-translate-y-1 duration-300">
                    <div className="rounded-full bg-primary/10 p-2 text-primary shrink-0">
                        <span className="material-symbols-outlined">
                            confirmation_number
                        </span>
                    </div>
                    <div className="flex flex-col gap-1">
                        <p className="text-gray-500 text-sm font-medium">ID Pesanan</p>
                        <h2 className="text-text-main text-lg font-bold">
                            #FUTSAL-JKT-091
                        </h2>
                        <span className="inline-flex items-center gap-1 text-xs text-primary font-medium mt-1 cursor-pointer hover:underline">
                            <span className="material-symbols-outlined text-[14px]">
                                content_copy
                            </span>{" "}
                            Salin ID
                        </span>
                    </div>
                </div>
                <div className="flex gap-4 items-start rounded-xl border border-gray-100 bg-surface-light p-5 shadow-sm transition-transform hover:-translate-y-1 duration-300">
                    <div className="rounded-full bg-primary/10 p-2 text-primary shrink-0">
                        <span className="material-symbols-outlined">payments</span>
                    </div>
                    <div className="flex flex-col gap-1">
                        <p className="text-gray-500 text-sm font-medium">Total Tagihan</p>
                        <h2 className="text-text-main text-lg font-bold">Rp 250.000</h2>
                        <p className="text-gray-500 text-sm font-normal">
                            via E-Wallet (Gopay)
                        </p>
                    </div>
                </div>
            </div>
            {/* Action Buttons */}
            <div className="flex flex-col gap-4 mt-8 items-center w-full">
                <button className="w-full sm:max-w-xs h-12 flex items-center justify-center gap-2 rounded-lg bg-primary hover:bg-primary/90 text-text-main font-bold text-base transition-all shadow-lg shadow-primary/20 cursor-pointer">
                    <span>Cek Status Pembayaran</span>
                    <span className="material-symbols-outlined text-[20px]">refresh</span>
                </button>
                <Link
                    href="/"
                    className="text-gray-500 hover:text-primary font-medium text-sm flex items-center gap-1 transition-colors"
                >
                    <span className="material-symbols-outlined text-[18px]">
                        arrow_back
                    </span>
                    Kembali ke Beranda
                </Link>
            </div>

            {/* FAQ Hint */}
            <div className="mt-8 text-center bg-blue-50 border border-blue-100 rounded-lg p-4 w-full">
                <p className="text-sm text-blue-800">
                    <span className="font-bold block mb-1">Butuh bantuan?</span>
                    Jika status tidak berubah dalam 10 menit, silakan hubungi <Link href="#" className="underline font-semibold hover:text-blue-600">Customer Service</Link> kami.
                </p>
            </div>
        </>
    );
}
