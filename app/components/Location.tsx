export default function Location() {
  return (
    <section className="px-6 py-16">
      <h2 className="mb-8 text-center text-3xl font-bold">Lokasi Kami</h2>

      <div className="mx-auto max-w-5xl overflow-hidden rounded-xl border">
        <iframe
          src="https://www.google.com/maps?q=-6.200000,106.816666&z=15&output=embed"
          width="100%"
          height="350"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>

      <p className="mt-4 text-center text-gray-600">
        Jl. Contoh Alamat No.123, Jakarta
      </p>
    </section>
  );
}
