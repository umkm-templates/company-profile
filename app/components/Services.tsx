const services = [
  {
    title: "Produk Berkualitas",
    description: "Produk lokal pilihan dengan kualitas terbaik.",
  },
  {
    title: "Harga Terjangkau",
    description: "Harga kompetitif untuk semua kalangan.",
  },
  {
    title: "Respon Cepat",
    description: "Pelayanan cepat melalui WhatsApp.",
  },
];

export default function Services() {
  return (
    <section className="px-6 py-16">
      <h2 className="mb-8 text-center text-3xl font-bold">Layanan Kami</h2>

      <div className="mx-auto grid max-w-5xl gap-6 md:grid-cols-3">
        {services.map((service, index) => (
          <article key={index} className="rounded-xl border p-6">
            <h3 className="mb-2 text-lg font-semibold">{service.title}</h3>
            <p className="text-gray-600">{service.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
