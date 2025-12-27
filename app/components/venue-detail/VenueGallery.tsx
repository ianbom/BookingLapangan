import React from "react";
import Image from "next/image";

export default function VenueGallery() {
    const images = [
        "https://lh3.googleusercontent.com/aida-public/AB6AXuCa_sUjwG7d60BlD11DDKTcyRubnKoiRJ7MSSuq6XsPwAisHDa5u_xsHmSwt6PJM1sg4xT5-mcHmnVDjukloq6BlR_w-THBGzqcFboWRMG8dsERcfec6xH-SismKwn-Kn6BjurYU1pUv_T2LMWGAu_NDVrCgWsDknggng6c-IBFmmvzZiV6jEPZ78_CIXOsd3hzFFi9yvjtQarNYA3Kta4J_8WRUKEvN-NWmdu1AG4DhOmzNR5UnHzioB5MJi9aQZ68filWFHUrDtX-",
        "https://lh3.googleusercontent.com/aida-public/AB6AXuDqvo654pwfy1obj39zDcvKRx24PXtqsxxfeWvK82livCkYnIw8f6CyjWIU5Mp0_yadlQ02eJuxMpMg2A5lGHjm_sCDh8ckzsE5mZGPs46NJfT_9HLY9MrzavZfUhCVjNutSMSNohI0YHsnZdNNr-zEyr5qqS09WzFuOQrQ87ghGnRYxyJtDeUwwsiR8241gTmBWvPjMdapR3hB_rx_tCtvW2KTnhSeatuYauHGDbXlxY1B4mBt-M5xpOQnNh03aDFsgluKzFu6u0ei",
        "https://lh3.googleusercontent.com/aida-public/AB6AXuAtXlYYjvBumzMq7y45XKwU18yhMztha-gLomadRVfpQwzVIFu9klYhy41nXn9BCzlwvZg7flGRDqwfz6Mp6alhGn10L79H1V8ScHhvZtjl4EGfOgXqN1y5mQMP9TaZz4XJNe1ZKk5U9fY2jWDHN2rf6mLcrQ9auGoNA-c_Ev_xiCw0IJiNqST6aoocfboLsAzxQEbnLrS8Kbe3Ld7sQfcPDJ4SnPWVhiSYvf6yEeBqE_-u9vSsqaHGmbNwqoVJ5vc8xCgrTkAxdz3_",
        "https://lh3.googleusercontent.com/aida-public/AB6AXuBVrOlJLkwoOFUNpFIzdWMBpjBM1Yn5XQm2WTm3JVC5GfuSc3cCESkESp7rAikCKJ0kYIHUeB8oVpEZOngTwsO0jt0Z9VaodHElHf2a7KEUE4dYBPtKKPmtqpLqq--z75TjjNijLdndSKYnGPnvLN2NO1S9POJh0KMIG31NsSvLKimdKnfyN_jq972K26O9HjOiaPOJgClJCYZAG02nKJBv4gL5IxLUFrvRY5qWPvp98lf7Mmyb1vTY9nM3_J14RWtBUv7GZqvD0JVp",
    ];

    return (
        <div className="flex flex-col gap-4">
            <div className="w-full aspect-[16/9] rounded-2xl overflow-hidden bg-gray-200 relative group">
                <Image
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuD8VIVxQe-bBkTbp1xwPaFbXoE03HgGzR-U_Nl0zFW2luSEMBTeSepuFDzV-Ji7pkwT_cEMPDRnLB9SDb9XlVYwG6dpGwMm1Tc0oq52yvz1zbECZIg99FbTFbbW1LFUlyjBypf2lsPfLoZ9u5PxQQug4fDeIjXcZCAinGL4vpuenAhbZkDrCzibdPQKcZubVvlkj2qsdGCoSV9_R4h-fRThEwjOQAGMpbKuzoit50VEWZOLaC9qlkBCp7ULWOkNRWJ-eejRcC5PFUE5"
                    alt="Indoor futsal court with high ceilings and green vinyl flooring"
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute bottom-4 right-4 bg-black/50 backdrop-blur-md text-white px-3 py-1 rounded-lg text-xs font-medium flex items-center gap-2">
                    <span
                        className="material-symbols-outlined"
                        style={{ fontSize: "16px" }}
                    >
                        photo_library
                    </span>
                    View all photos
                </div>
            </div>
            <div className="flex gap-3 overflow-x-auto pb-2 scrollbar-hide">
                {images.map((src, index) => (
                    <button
                        key={index}
                        className={`relative min-w-[120px] h-[80px] rounded-lg overflow-hidden ${index === 0
                                ? "border-2 border-primary"
                                : "opacity-70 hover:opacity-100 transition-opacity"
                            }`}
                    >
                        <Image
                            src={src}
                            alt={`Thumbnail ${index + 1}`}
                            fill
                            className="object-cover"
                        />
                    </button>
                ))}
            </div>
        </div>
    );
}
