import React from "react";
import Image from "next/image";
import Link from "next/link";

interface VenueCardProps {
    id: string;
    name: string;
    image: string;
    location: string;
    rating: string;
    price: string;
    tags: string[];
    status?: "Available Now" | "Full Booked" | "Maintenence";
    disabled?: boolean;
}

export default function VenueCard({
    id,
    name,
    image,
    location,
    rating,
    price,
    tags,
    status = "Available Now",
    disabled = false,
}: VenueCardProps) {
    const isAvailable = status === "Available Now";
    const statusColor =
        status === "Available Now"
            ? "text-text-main"
            : status === "Full Booked" || status === "Maintenence"
                ? "text-red-800"
                : "text-text-main";

    const statusBg =
        status === "Available Now"
            ? "bg-white/90"
            : status === "Full Booked" || status === "Maintenence"
                ? "bg-red-100"
                : "bg-white"; // default

    const statusDot =
        status === "Available Now"
            ? "bg-primary animate-pulse"
            : status === "Full Booked" || status === "Maintenence"
                ? "bg-red-500"
                : "bg-primary";

    const getStatusText = (status: string) => {
        switch (status) {
            case "Available Now":
                return "Tersedia";
            case "Full Booked":
                return "Penuh";
            case "Maintenence":
                return "Perbaikan";
            default:
                return status;
        }
    };

    return (
        <div className="group bg-white rounded-xl overflow-hidden border border-[#e7f3eb] hover:shadow-lg transition-all duration-300 flex flex-col">
            <div className="relative h-48 overflow-hidden">
                <Image
                    src={image}
                    alt={name}
                    fill
                    className={`object-cover group-hover:scale-105 transition-transform duration-500 ${!isAvailable ? 'grayscale-[30%]' : ''}`}
                />
                <div
                    className={`absolute top-3 left-3 backdrop-blur-sm px-2.5 py-1 rounded-full flex items-center gap-1.5 shadow-sm ${statusBg}`}
                >
                    <div className={`size-2 rounded-full ${statusDot}`}></div>
                    <span className={`text-xs font-bold ${statusColor}`}>{getStatusText(status)}</span>
                </div>
                {isAvailable && (
                    <button className="absolute top-3 right-3 p-2 bg-white/20 hover:bg-white backdrop-blur-sm rounded-full text-white hover:text-red-500 transition-colors cursor-pointer">
                        <span
                            className="material-symbols-outlined"
                            style={{ fontSize: "20px" }}
                        >
                            favorite
                        </span>
                    </button>
                )}
            </div>
            <div className="p-4 flex flex-col flex-1">
                <div className="flex justify-between items-start mb-2">
                    <div>
                        <h3 className="font-bold text-lg text-text-main group-hover:text-primary transition-colors">
                            {name}
                        </h3>
                        <div className="flex items-center gap-1 text-gray-500 text-sm mt-1">
                            <span
                                className="material-symbols-outlined"
                                style={{ fontSize: "16px" }}
                            >
                                location_on
                            </span>
                            <span className="truncate">{location}</span>
                        </div>
                    </div>
                    <div className="flex items-center gap-1 bg-yellow-50 px-1.5 py-0.5 rounded text-yellow-700">
                        <span
                            className="material-symbols-outlined fill-current"
                            style={{ fontSize: "16px", fontVariationSettings: "'FILL' 1" }}
                        >
                            star
                        </span>
                        <span className="text-sm font-bold">{rating}</span>
                    </div>
                </div>
                <div className="flex flex-wrap gap-2 mb-4 mt-2">
                    {tags.map((tag, i) => (
                        <span
                            key={i}
                            className="text-[10px] uppercase font-bold tracking-wider px-2 py-1 bg-gray-100 text-gray-600 rounded"
                        >
                            {tag}
                        </span>
                    ))}
                </div>
                <div
                    className={`mt-auto pt-4 border-t border-gray-100 flex items-center justify-between ${!isAvailable ? "opacity-75" : ""
                        }`}
                >
                    <div>
                        <p className="text-xs text-gray-500">Mulai dari</p>
                        <p
                            className={`${!isAvailable ? "text-text-main" : "text-primary"
                                } font-bold text-lg`}
                        >
                            {price}
                            <span className="text-xs font-normal text-gray-500">/jam</span>
                        </p>
                    </div>
                    <Link
                        href={`/venues/${id}`}
                        className={`${disabled
                            ? "bg-gray-100 text-gray-400 cursor-not-allowed pointer-events-none flex items-center justify-center"
                            : "bg-[#e7f3eb] hover:bg-primary hover:text-text-main text-text-main font-bold flex items-center justify-center"
                            } py-2 px-4 rounded-lg text-sm transition-all`}
                        aria-disabled={disabled}
                    >
                        Detail
                    </Link>
                </div>
            </div>
        </div>
    );
}
