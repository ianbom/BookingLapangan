import React from "react";
import Image from "next/image";

export default function VenueReviews() {
    const reviews = [
        {
            name: "Budi Santoso",
            date: "2 hari lalu",
            rating: 5,
            comment:
                "Lapangan mantap! Lantai vinylnya pas, tidak licin. Fasilitas bersih, terutama toiletnya. Pasti main lagi minggu depan.",
            avatar:
                "https://lh3.googleusercontent.com/aida-public/AB6AXuBAlLBOpaClrMX30Q129LQaQ2GMEsu94GMaaUqd7Wh-CZ15JIMXmHyB9LwfGDVVbCQKwnqN-ovISW3ZaM-KUV22qiilqrBHMnIDaYFUM_GuZNxAqUa5HMsKBm7VP7UKSu3T9PMlUh_doeMAkNPFbHVRfZ0YsrbRlS-8WsYwowmljDsXTrDP03tsKkO5B-O9LTwFuS-_y5hNhd_MOUh4CVNYC5QhgdZtpDIZsboOdY84BXqE85xA7WQHcaetZ5emrB03pbB9ij14h0Dg",
        },
        {
            name: "Sarah Wijaya",
            date: "1 minggu lalu",
            rating: 4,
            comment:
                "Tempat enak, tapi parkir agak susah pas weekend. Makanan di kantin lumayan enak!",
            avatar:
                "https://lh3.googleusercontent.com/aida-public/AB6AXuAuLZkITfyqQhy_Q6OJU9aGxvlcy3oPkUV4gnsvWerm3vUUP7GJIOvPiv-zSv9ez2jX7LiOqpKqQkVwNiwBZKM0vW3QuPpmsqR6-X5mJlchwH-vsebFi4CTrTi_rXICH7aoJow9mQ82K7TfiK2vVWdiRjqauCJsfR9FdeTyNVxza3m9CvVFhvXQ8jEmi2sbaw89LpgIDAQptLAoAV-hzsiSttZAC5KR8vh739T7TD6Y-uvDhXKfr_Lg15NQyMhW-zjEzRAHMlrvMy9d",
        },
    ];

    return (
        <div className="border-t border-gray-100 pt-8">
            <h3 className="text-xl font-bold text-text-main mb-6">Ulasan</h3>
            <div className="grid gap-6">
                {reviews.map((review, index) => (
                    <div
                        key={index}
                        className="bg-surface-light p-6 rounded-xl border border-gray-100"
                    >
                        <div className="flex justify-between items-start mb-4">
                            <div className="flex items-center gap-3">
                                <div className="size-10 rounded-full bg-gray-200 overflow-hidden relative">
                                    <Image
                                        src={review.avatar}
                                        alt={review.name}
                                        fill
                                        className="object-cover"
                                    />
                                </div>
                                <div>
                                    <p className="font-bold text-text-main">{review.name}</p>
                                    <p className="text-xs text-gray-500">{review.date}</p>
                                </div>
                            </div>
                            <div className="flex text-primary">
                                {[...Array(5)].map((_, i) => (
                                    <span
                                        key={i}
                                        className={`material-symbols-outlined text-[18px] ${i < review.rating ? "text-primary" : "text-gray-300"
                                            }`}
                                        style={{ fontVariationSettings: "'FILL' 1" }}
                                    >
                                        star
                                    </span>
                                ))}
                            </div>
                        </div>
                        <p className="text-gray-600">{review.comment}</p>
                    </div>
                ))}
            </div>
            <button className="mt-6 w-full py-3 text-[#4c9a66] font-medium hover:bg-[#e7f3eb] rounded-lg transition-colors cursor-pointer">
                Lihat semua 124 ulasan
            </button>
        </div>
    );
}
