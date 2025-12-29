const products = [
  {
    id: 1,
    name: "Produk A",
    price: "Rp 25.000",
    image: "/product-a.jpg",
    message: "Halo, saya ingin pesan Produk A",
  },
  {
    id: 2,
    name: "Produk B",
    price: "Rp 40.000",
    image: "/product-b.jpg",
    message: "Halo, saya ingin pesan Produk B",
  },
  {
    id: 3,
    name: "Produk C",
    price: "Rp 15.000",
    image: "/product-c.jpg",
    message: "Halo, saya ingin pesan Produk C",
  },
  {
    id: 4,
    name: "Produk D",
    price: "Rp 25.000",
    image: "/product-a.jpg",
    message: "Halo, saya ingin pesan Produk D",
  },
  {
    id: 5,
    name: "Produk E",
    price: "Rp 40.000",
    image: "/product-b.jpg",
    message: "Halo, saya ingin pesan Produk E",
  },
  {
    id: 6,
    name: "Produk F",
    price: "Rp 15.000",
    image: "/product-c.jpg",
    message: "Halo, saya ingin pesan Produk F",
  },
];

const WHATSAPP_NUMBER = "628123456789";

export default function ProductCatalog() {
  return (
    <section className="px-6 py-16 bg-slate-50">
      <h2 className="mb-8 text-center text-3xl font-bold">Produk Unggulan</h2>

      <div className="mx-auto max-w-6xl">
        <div className="flex snap-x snap-mandatory gap-6 overflow-x-auto pb-4">
          {products.map((product) => (
            <div
              key={product.id}
              className="snap-center min-w-[260px] max-w-sm rounded-xl border bg-white p-4 shadow-sm"
            >
              {/* Image placeholder */}
              <div className="mb-4 h-40 rounded-lg bg-gray-200 flex items-center justify-center">
                <span className="text-gray-500 text-sm">Foto Produk</span>
              </div>

              <h4 className="text-lg font-semibold">{product.name}</h4>

              <p className="mb-4 font-bold text-green-600">{product.price}</p>

              <a
                href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
                  product.message
                )}`}
                target="_blank"
                className="block w-full rounded-lg bg-green-500 py-2 text-center font-semibold text-white hover:bg-green-600"
              >
                Pesan via WhatsApp
              </a>
            </div>
          ))}
        </div>

        <p className="mt-4 text-center text-sm text-gray-500">
          Geser untuk melihat produk lainnya →
        </p>
      </div>
    </section>
  );
}
