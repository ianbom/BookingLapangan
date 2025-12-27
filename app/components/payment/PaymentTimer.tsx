import React from "react";

export default function PaymentTimer() {
    return (
        <div className="w-full flex flex-col items-center gap-6 bg-surface-light border border-gray-100 rounded-2xl p-6 mb-8 shadow-sm">
            {/* Timer Component */}
            <div className="flex gap-3 w-full justify-center">
                <div className="flex flex-col items-center gap-2">
                    <div className="flex h-12 w-12 md:h-14 md:w-14 items-center justify-center rounded-lg bg-background-light border border-gray-100">
                        <p className="text-text-main text-lg font-bold">00</p>
                    </div>
                    <p className="text-xs text-gray-500 uppercase font-medium">Jam</p>
                </div>
                <div className="flex h-12 items-center justify-center pt-1 text-gray-400">
                    :
                </div>
                <div className="flex flex-col items-center gap-2">
                    <div className="flex h-12 w-12 md:h-14 md:w-14 items-center justify-center rounded-lg bg-background-light border border-gray-100">
                        <p className="text-text-main text-lg font-bold">14</p>
                    </div>
                    <p className="text-xs text-gray-500 uppercase font-medium">Menit</p>
                </div>
                <div className="flex h-12 items-center justify-center pt-1 text-gray-400">
                    :
                </div>
                <div className="flex flex-col items-center gap-2">
                    <div className="flex h-12 w-12 md:h-14 md:w-14 items-center justify-center rounded-lg bg-background-light border border-gray-100">
                        <p className="text-primary text-lg font-bold">59</p>
                    </div>
                    <p className="text-xs text-gray-500 uppercase font-medium">Detik</p>
                </div>
            </div>
            {/* Progress Bar */}
            <div className="w-full max-w-sm flex flex-col gap-2">
                <div className="flex justify-between text-sm">
                    <span className="text-text-main font-medium">Memproses...</span>
                    <span className="text-primary font-bold">75%</span>
                </div>
                <div className="h-2 w-full bg-gray-100 rounded-full overflow-hidden">
                    <div className="h-full bg-primary w-3/4 rounded-full animate-pulse"></div>
                </div>
            </div>
        </div>
    );
}
