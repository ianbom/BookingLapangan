import React from "react";

export default function FailedTransactionDetails() {
    return (
        <div className="bg-surface-light rounded-xl border border-gray-100 shadow-sm overflow-hidden mt-2">
            <div className="bg-gray-50 px-6 py-4 border-b border-gray-100 flex items-center gap-3">
                <span className="material-symbols-outlined text-[#4c9a66]">
                    receipt_long
                </span>
                <h3 className="font-bold text-text-main text-sm uppercase tracking-wider">
                    Rincian Transaksi
                </h3>
            </div>
            <div className="p-6 grid grid-cols-1 md:grid-cols-2 gap-y-6 gap-x-4">
                <div className="flex flex-col gap-1">
                    <p className="text-[#4c9a66] text-xs font-medium uppercase">
                        ID Booking
                    </p>
                    <p className="text-text-main text-base font-semibold font-mono">
                        #BO-2023-889
                    </p>
                </div>
                <div className="flex flex-col gap-1">
                    <p className="text-[#4c9a66] text-xs font-medium uppercase">
                        Total Pembayaran
                    </p>
                    <p className="text-text-main text-base font-semibold">Rp 150.000</p>
                </div>
                <div className="flex flex-col gap-1">
                    <p className="text-[#4c9a66] text-xs font-medium uppercase">Lokasi</p>
                    <p className="text-text-main text-base font-medium">
                        Lapangan Futsal Galaxy, Court A
                    </p>
                </div>
                <div className="flex flex-col gap-1 md:col-span-2">
                    <div className="flex items-start gap-3 p-3 bg-red-50 rounded-lg border border-red-100">
                        <span className="material-symbols-outlined text-[#ef4444] text-xl mt-0.5">
                            error
                        </span>
                        <div>
                            <p className="text-[#ef4444] text-sm font-bold">Alasan Gagal</p>
                            <p className="text-text-main text-sm">
                                Transaksi ditolak oleh bank penerbit. Saldo tidak mencukupi atau
                                kartu kadaluarsa.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
