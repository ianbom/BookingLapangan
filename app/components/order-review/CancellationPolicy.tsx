export default function CancellationPolicy() {
    return (
        <section className="rounded-xl border border-gray-100 bg-white p-6 shadow-sm">
            <h2 className="mb-4 flex items-center gap-2 text-xl font-bold text-text-main">
                <span className="material-symbols-outlined text-primary">policy</span>
                Kebijakan Pembatalan
            </h2>
            <div className="rounded-lg bg-gray-50 p-4 text-sm text-gray-500">
                <ul className="list-inside list-disc space-y-2">
                    <li>Pembatalan dapat dilakukan maksimal <strong>24 jam sebelum jadwal main</strong> untuk pengembalian dana 100%.</li>
                    <li>Pembatalan kurang dari 24 jam tidak dapat direfund.</li>
                    <li>Reschedule tersedia 1x dengan konfirmasi admin.</li>
                </ul>
            </div>
        </section>
    );
}
