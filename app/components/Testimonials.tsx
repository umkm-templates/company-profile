const testimonials = [
  {
    name: "Budi Santoso",
    role: "Pemilik Toko Sembako",
    message:
      "Pelayanannya cepat dan produknya berkualitas. Sejak pakai jasa ini, penjualan saya meningkat.",
  },
  {
    name: "Siti Aminah",
    role: "Owner UMKM Kuliner",
    message:
      "Respon via WhatsApp sangat cepat. Website-nya juga membantu pelanggan order lebih mudah.",
  },
  {
    name: "Andi Wijaya",
    role: "Pengusaha Laundry",
    message:
      "Tampilan website simpel tapi profesional. Cocok untuk UMKM seperti kami.",
  },
  {
    name: "Jonathan Riandy",
    role: "Pengusaha Es Teh",
    message:
      "Tampilan website simpel tapi profesional. Cocok untuk UMKM seperti kami.",
  },
];

export default function Testimonials() {
  return (
    <section className="bg-slate-50 px-6 py-16">
      <h2 className="mb-8 text-center text-3xl font-bold">
        Testimoni Pelanggan
      </h2>

      <div className="mx-auto max-w-6xl">
        <div className="flex snap-x snap-mandatory gap-6 overflow-x-auto pb-4">
          {testimonials.map((item, index) => (
            <div
              key={index}
              className="snap-center min-w-[280px] max-w-sm rounded-xl bg-white p-6 shadow-sm border"
            >
              <p className="mb-4 text-gray-600">“{item.message}”</p>

              <div className="mt-4">
                <p className="font-semibold">{item.name}</p>
                <p className="text-sm text-gray-500">{item.role}</p>
              </div>
            </div>
          ))}
        </div>

        <p className="mt-4 text-center text-sm text-gray-500">
          Geser untuk melihat testimoni lainnya →
        </p>
      </div>
    </section>
  );
}
