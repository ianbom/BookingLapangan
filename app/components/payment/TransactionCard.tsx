import Link from "next/link";
import React from "react";

export default function TransactionCard() {
    return (
        <div className="bg-surface-light rounded-xl shadow-xl border border-gray-100 overflow-hidden mb-8">
            {/* Receipt Header Pattern */}
            <div className="h-2 w-full bg-linear-to-r from-primary/60 via-primary to-primary/60"></div>
            <div className="p-6 sm:p-8">
                {/* Amount Section */}
                <div className="text-center pb-6 border-b border-gray-100 border-dashed">
                    <p className="text-sm font-medium text-gray-500 mb-1 uppercase tracking-wider">
                        Total Bayar
                    </p>
                    <p className="text-3xl font-bold text-text-main">Rp 150.000</p>
                </div>
                {/* Details Grid */}
                <div className="pt-6 space-y-4">
                    <div className="flex justify-between items-center">
                        <span className="text-gray-500 text-sm">ID Transaksi</span>
                        <span className="font-mono font-medium text-text-main">
                            #TRX-88291
                        </span>
                    </div>
                    <div className="flex justify-between items-center">
                        <span className="text-gray-500 text-sm">Metode Pembayaran</span>
                        <div className="flex items-center gap-2">
                            <span className="material-symbols-outlined text-primary text-sm">
                                qr_code_2
                            </span>
                            <span className="font-medium text-text-main">QRIS / Gopay</span>
                        </div>
                    </div>
                    <div className="flex justify-between items-center">
                        <span className="text-gray-500 text-sm">Tanggal Transaksi</span>
                        <span className="font-medium text-text-main">
                            12 Okt 2023, 10:42 WIB
                        </span>
                    </div>
                </div>
                {/* Booking Brief */}
                <div className="mt-6 p-4 bg-background-light rounded-lg border border-gray-100 flex gap-4 items-center">
                    <div className="size-16 rounded-md overflow-hidden shrink-0 bg-gray-200">
                        <div
                            className="w-full h-full bg-cover bg-center"
                            style={{
                                backgroundImage:
                                    "url('https://lh3.googleusercontent.com/aida-public/AB6AXuC_d6nGhA3WOLY2bcq8PXgSZybLczHAbCTCKuzlxnP0jS7zdZkFt29CZHyxg6cf45P69Xx1EA07yUT_hztZNr8wiwTvlhnz6slP-RnSGg--bGY4FhO_YnOsXcliBrPEXANtfbikYBMKW4PorTOpWe45xW5miOBtwSoI35gQLTLtBhn1rNOEZGcjxLqOkSKU7jHjpjwsvwMw6Fyfn_2dO0LWkzKGpD7SSu3-k0puRj4Qgv4pgjlPuNMRRQH-xXPo6Q7hmm-gBDIS_1EX')",
                            }}
                        ></div>
                    </div>
                    <div className="flex-1 min-w-0">
                        <h4 className="font-bold text-text-main truncate">
                            Lapangan Futsal A (Vinyl)
                        </h4>
                        <p className="text-sm text-gray-500 truncate">
                            12 Okt 2023 • 19:00 - 20:00
                        </p>
                    </div>
                </div>
                {/* Download Link */}
                <div className="mt-6 text-center">
                    <Link
                        href="#"
                        className="inline-flex items-center gap-1 text-sm font-medium text-green-600 hover:text-green-700 hover:underline"
                    >
                        <span className="material-symbols-outlined text-lg">download</span>
                        Unduh Bukti Pembayaran (PDF)
                    </Link>
                </div>
            </div>
        </div>
    );
}
