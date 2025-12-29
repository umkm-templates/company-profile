import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import ProductCatalog from "./components/ProductCatalog";
import Testimonials from "./components/Testimonials";
import Location from "./components/Location";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      {/* SEO: Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            name: "UMKM Company",
            image: "https://www.umkmcompany.com/hero.jpg",
            url: "https://www.umkmcompany.com",
            telephone: "+62-812-3456-7890",
            address: {
              "@type": "PostalAddress",
              streetAddress: "Jl. Contoh Alamat No.123",
              addressLocality: "Jakarta",
              addressCountry: "ID",
            },
            sameAs: [
              "https://instagram.com/umkmcompany",
              "https://facebook.com/umkmcompany",
            ],
          }),
        }}
      />
      <main>
        <Navbar />
        <Hero />
        <Services />
        <ProductCatalog />
        <Testimonials />
        <Location />
        <Footer />
      </main>
    </>
  );
}
