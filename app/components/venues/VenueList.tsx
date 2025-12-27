import React from "react";
import VenueCard from "./VenueCard";

export default function VenueList() {
    const venues = [
        {
            id: "1",
            name: "Turbo Arena",
            location: "Jakarta Selatan",
            tags: ["Wifi", "Parking"],
            price: "Rp 150.000",
            rating: "4.8",
            image:
                "https://lh3.googleusercontent.com/aida-public/AB6AXuCSQ5Uw6UhRr6Pkv28VeMmiIX7PbOcIweuHiBkWT5gkgCjGGAAUjqo2ib4h9810sqFhkbqneC_LOXLA2puKzf-xT2x-Q5QWG6Sa803YQoMaVGYftH29kvLevvuKod4-w0bZ8d3176KVbr0YrHc6fFjLX9wXFJjvOFnFIh6w4YhL4erfyv1awFPZ4dhrn061aSArd42uXzgEQNdjuKLIpqfrvSRAuwDLAwPkmJsh99Pm3K7--XRvaJ6R2H2okT9UOcCiFyD1FbUvXrMh",
            status: "Available Now" as const,
            disabled: false,
        },
        {
            id: "2",
            name: "City Padel Center",
            location: "BSD City",
            tags: ["Shower", "Locker"],
            price: "Rp 200.000",
            rating: "5.0",
            image:
                "https://lh3.googleusercontent.com/aida-public/AB6AXuAgWA0YKcP7R5co0co7zHg2yCnUsIkjzWedS1QVaArBjKjugWkX7jcb2xwDdJjn2ToO0-DNBkesC1dz7ft03auKkUl5qbsM0hU4CzRvNWvYJX__1aDPXbHlPOCt793pwZ_LuelBt-LVEXnJSHoNNh9FaFWpv_ejA-yfIQMK8N88_DCNvXzdtaD-T5XtUR4D7J5-GnGea6jJE6awC8E-fRuLqUV89oyjxct6WGk9pb0VtTS6v8D6EH45LeyIyedysoTVRidLVBiZVf0D",
            status: "Full Booked" as const,
            disabled: true,
        },
        {
            id: "3",
            name: "Green Field XL",
            location: "Bandung",
            tags: ["Canteen"],
            price: "Rp 90.000",
            rating: "4.2",
            image:
                "https://lh3.googleusercontent.com/aida-public/AB6AXuBYPZ__13XodzsNgn_zBcKXhsg3GiPbpKSPKX1eh-IsyCgAWUYbGinldNglXjFrbdH_4Xrz5_1O_AeXAOxkCR8lxpjOz5J7wP8Cwpt8ECGjGW9GtnoWdGcGnEmv8OrEDB_LCHTH0FL6dzuNA324Hq7EBSqoKAPx7pB1wfJ4EpJCqXL95CMx43YtOjNKTH5YycossCbe81IbvDjyfygfwpZznb3iUQtFvHCULUONZJpz9GJd-u-zS4JkU0TSLVDsMDbbQ842iR8gES27",
            status: "Available Now" as const,
            disabled: false,
        },
        {
            id: "4",
            name: "Hoops Central",
            location: "Jakarta Pusat",
            tags: ["AC", "Pro Floor"],
            price: "Rp 250.000",
            rating: "4.9",
            image:
                "https://lh3.googleusercontent.com/aida-public/AB6AXuCqgxaWCfBw-57SVjtHkzbyVDgW2830qgef3SeOK323zWiYc4Ss2RxDYb0UEjhQ5he6qofmvgVdTyL40DKAgFDfp6k9ZojMvNN3Ta5nfGmlD3A7V9IKfwrjM6b7P601SRxyaNlzjwOnyUGjDXNmjhNlcB7K8IdaTaC1mOzyGCvOuLd019bGv0s5x3kTW2dR2Ufli8vmVyYIU1n5M04HPS0xCSGhtZsVEjcXQcW37knq4s-WuH8ZGAkknCIEGfOVMR0YV_M63aFe417t",
            status: "Available Now" as const,
            disabled: false,
        },
        {
            id: "5",
            name: "Elite Tennis Club",
            location: "Surabaya",
            tags: ["Clay"],
            price: "Rp 120.000",
            rating: "4.7",
            image:
                "https://lh3.googleusercontent.com/aida-public/AB6AXuBnyrRtz3TTjcQrfBGIt4cunoCPHh3cntbS3dxOoRiorOhMPCNw3pAxXIV5ojOpFEU_Dm5Cf6J1fE47h5Z0yqxpfMu4soUaCwtdGhrhC2Ye4ctXVQXe_8xLRPPHQGxQWLxZaWfuO7HeZSLH7qkTz68bBO7irNhMOw6f5jIn9DSVT0Llq6T-43nPx5sFFp1ffLa3rqnUGZ-i6W1f361xXdWr1f5H58q2r0oh5uw_YP2dtml9EROntcsX__fI7zabC15ziMfln2odsflX",
            status: "Maintenence" as const,
            disabled: true,
        },
        {
            id: "6",
            name: "Smash Arena",
            location: "Depok",
            tags: ["Carpet", "Shower"],
            price: "Rp 60.000",
            rating: "4.4",
            image:
                "https://lh3.googleusercontent.com/aida-public/AB6AXuD6IP2410bgK4q0ks-dpQReUIYkHMnVbTDPlF6gPlEc5jxKjBJKPjMtdvsOiPSUL07I0SM4CRdLMdgy5hgONnKHaU0-5u2QPfYxweuoR1GrMgDc47eVCcypdu-YNiZTjNNr8ufb_iKPmYQxMSfaHlhVvpucwJZuMyTEUYsBpVZQVQxS8nRJtPtMS8QhP56xPS6jywptfK9Cj9-N1LifBjGhb8t3Mng9wYYR1aLDCJSLn5U8KVjTndRCrCcs9hLd5ekEHxQLDg0EXW9B",
            status: "Available Now" as const,
            disabled: false,
        },
    ];

    return (
        <section className="flex-1">
            {/* Tabs */}
            <div className="mb-6 overflow-x-auto pb-2 scrollbar-hide">
                <div className="flex gap-2 min-w-max border-b border-gray-100">
                    <button className="px-5 py-3 border-b-[3px] border-primary text-text-main font-bold text-sm">
                        Semua Olahraga
                    </button>
                    {[
                        "Futsal",
                        "Badminton",
                        "Basket",
                        "Padel",
                        "Tenis",
                    ].map((sport) => (
                        <button
                            key={sport}
                            className="px-5 py-3 border-b-[3px] border-transparent text-gray-500 hover:text-primary font-medium text-sm transition-colors"
                        >
                            {sport}
                        </button>
                    ))}
                </div>
            </div>

            <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-bold">Menampilkan {venues.length} Venue</h2>
                <div className="flex items-center gap-2">
                    <span className="text-sm text-gray-500 hidden sm:inline">
                        Urutkan:
                    </span>
                    <select className="text-sm border-none bg-transparent font-bold text-text-main focus:ring-0 cursor-pointer outline-none">
                        <option>Rekomendasi</option>
                        <option>Harga: Terendah</option>
                        <option>Harga: Tertinggi</option>
                        <option>Rating</option>
                    </select>
                </div>
            </div>

            {/* Venues Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                {venues.map((venue, index) => (
                    <VenueCard key={index} {...venue} />
                ))}
            </div>

            {/* Load More */}
            <div className="mt-12 flex justify-center">
                <button className="flex items-center gap-2 px-8 py-3 bg-transparent border-2 border-primary text-text-main font-bold rounded-full hover:bg-primary hover:text-text-main transition-all cursor-pointer">
                    <span className="material-symbols-outlined">refresh</span>
                    Muat Lebih Banyak
                </button>
            </div>
        </section>
    );
}
