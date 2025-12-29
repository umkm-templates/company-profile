import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.umkmcompany.com"),
  title: {
    default: "UMKM Company | Produk & Layanan Terpercaya",
    template: "%s | UMKM Company",
  },
  description:
    "UMKM Company menyediakan produk dan layanan berkualitas dengan harga terjangkau. Order mudah via WhatsApp.",
  keywords: [
    "UMKM",
    "usaha kecil",
    "produk lokal",
    "jasa UMKM",
    "bisnis lokal",
  ],
  openGraph: {
    title: "UMKM Company | Produk & Layanan Terpercaya",
    description: "Solusi terbaik untuk kebutuhan bisnis dan produk lokal Anda.",
    url: "https://www.umkmcompany.com",
    siteName: "UMKM Company",
    locale: "id_ID",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "UMKM Company",
    description: "Produk dan layanan UMKM terpercaya. Order via WhatsApp.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id">
      <body>{children}</body>
    </html>
  );
}
