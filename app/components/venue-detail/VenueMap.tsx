import React from "react";
import Image from "next/image";

export default function VenueMap() {
    return (
        <div className="bg-surface-light rounded-2xl border border-gray-100 overflow-hidden">
            <div className="relative h-40 w-full group">
                <Image
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuAqaIMbVetBc9Qa2qim658wz9Sz2bPLnd0FM3LWx1_YoVdOV0pie8eFHSV7qvi-tfeWnafDsa93iPvHtBdqiDIISQuGfsR3-1WiQwmjQQRZw7t-XHDRQ13BCsnMxWSqP-ByPZAJyym7T6detwcmzr_-dqz7i_PfrpRtlwUATxXKwLNnQzrU0RiWaLEy_iOhTcgmJszuubEqQDBmUTnrgsJjeT5cvyELaP-IMHN9N-ok_dgfTxAYWstYNmGIccmKnjtj8Fg6vOki-lF-"
                    alt="Map location view"
                    fill
                    className="object-cover opacity-80 group-hover:opacity-100 transition-opacity"
                />
            </div>
            <div className="p-4">
                <p className="font-bold text-text-main text-sm mb-1">
                    Galaxy Futsal Arena
                </p>
                <p className="text-xs text-gray-500 mb-3">
                    Jl. Kemang Raya No. 12, Jakarta Selatan
                </p>
                <button className="w-full text-primary text-xs font-bold uppercase tracking-wider hover:underline text-left cursor-pointer">
                    Get Directions
                </button>
            </div>
        </div>
    );
}
