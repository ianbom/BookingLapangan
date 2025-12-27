import React from "react";

interface BookingProgressProps {
    step: number;
}

export default function BookingProgress({ step }: BookingProgressProps) {
    const totalSteps = 4;
    const progress = (step / totalSteps) * 100;

    let stepTitle = "";
    if (step === 3) stepTitle = "Booking Details";
    if (step === 4) stepTitle = "Review Order & Pembayaran";

    return (
        <div className="mb-8 max-w-3xl mx-auto">
            <div className="flex flex-col gap-2">
                <div className="flex justify-between items-end mb-2">
                    <p className="text-text-main text-lg font-bold">
                        Langkah {step} dari {totalSteps}: {stepTitle}
                    </p>
                    <p className="text-gray-500 text-sm font-medium">{progress}% Selesai</p>
                </div>
                <div className="h-2.5 w-full bg-gray-200 rounded-full overflow-hidden">
                    <div
                        className="h-full bg-primary rounded-full transition-all duration-500 ease-out"
                        style={{ width: `${progress}%` }}
                    ></div>
                </div>
            </div>
        </div>
    );
}
