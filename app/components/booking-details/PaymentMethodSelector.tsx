export default function PaymentMethodSelector() {
    return (
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
            <div className="px-6 py-4 border-b border-gray-100 bg-gray-50/50">
                <h2 className="text-xl font-bold flex items-center gap-3 text-text-main">
                    <div className="size-8 rounded-full bg-primary/20 flex items-center justify-center text-primary">
                        <span className="material-symbols-outlined text-sm">payments</span>
                    </div>
                    METODE PEMBAYARAN
                </h2>
            </div>
            <div className="p-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {/* QRIS */}
                    <label className="cursor-pointer relative group">
                        <input type="radio" name="payment_method" className="peer sr-only " defaultChecked />
                        <div className="p-4 rounded-xl border-2 border-gray-200 bg-white transition-all hover:border-primary/50 peer-checked:border-primary peer-checked:bg-primary/5 flex items-center gap-4 h-full">
                            <div className="size-12 rounded-lg bg-gray-50 flex items-center justify-center border border-gray-100 shrink-0">
                                <span className="material-symbols-outlined text-2xl text-gray-700">qr_code_2</span>
                            </div>
                            <div className="flex-1">
                                <h3 className="font-bold text-text-main">QRIS</h3>
                                <p className="text-xs text-gray-500">Scan & Pay Instantly</p>
                            </div>
                            <div className="size-5 rounded-full border-2 border-gray-300 peer-checked:border-primary flex items-center justify-center">
                                <div className="size-2.5 rounded-full bg-primary opacity-0 peer-checked:opacity-100 transition-all duration-200"></div>
                            </div>
                        </div>
                    </label>
                    {/* Bank Transfer */}
                    <label className="cursor-pointer relative group">
                        <input type="radio" name="payment_method" className="peer sr-only" />
                        <div className="p-4 rounded-xl border-2 border-gray-200 bg-white transition-all hover:border-primary/50 peer-checked:border-primary peer-checked:bg-primary/5 flex items-center gap-4 h-full">
                            <div className="size-12 rounded-lg bg-gray-50 flex items-center justify-center border border-gray-100 shrink-0">
                                <span className="material-symbols-outlined text-2xl text-gray-700">account_balance</span>
                            </div>
                            <div className="flex-1">
                                <h3 className="font-bold text-text-main">Bank Transfer</h3>
                                <p className="text-xs text-gray-500">BCA, Mandiri, BRI</p>
                            </div>
                            <div className="size-5 rounded-full border-2 border-gray-300 peer-checked:border-primary flex items-center justify-center">
                                <div className="size-2.5 rounded-full bg-primary opacity-0 peer-checked:opacity-100 transition-all duration-200"></div>
                            </div>
                        </div>
                    </label>
                    {/* E-Wallet */}
                    <label className="cursor-pointer relative group md:col-span-2">
                        <input type="radio" name="payment_method" className="peer sr-only" />
                        <div className="p-4 rounded-xl border-2 border-gray-200 bg-white transition-all hover:border-primary/50 peer-checked:border-primary peer-checked:bg-primary/5 flex items-center gap-4 h-full">
                            <div className="size-12 rounded-lg bg-gray-50 flex items-center justify-center border border-gray-100 shrink-0">
                                <span className="material-symbols-outlined text-2xl text-gray-700">account_balance_wallet</span>
                            </div>
                            <div className="flex-1">
                                <h3 className="font-bold text-text-main">E-Wallet</h3>
                                <p className="text-xs text-gray-500">GoPay, OVO, Dana</p>
                            </div>
                            <div className="size-5 rounded-full border-2 border-gray-300 peer-checked:border-primary flex items-center justify-center">
                                <div className="size-2.5 rounded-full bg-primary opacity-0 peer-checked:opacity-100 transition-all duration-200"></div>
                            </div>
                        </div>
                    </label>
                </div>
            </div>
        </div>
    );
}
