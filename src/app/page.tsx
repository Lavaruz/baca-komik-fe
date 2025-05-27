import HomeClient from "@/components/layout/HomeClient";
import { Metadata } from "next";

export async function generateMetadata(): Promise<Metadata> {
  // const ID = (await params).slug
  // const COMIC: ComicsDataInterface = await getComicById(ID)
  return {
    title: "Baca Komik Hentai Gratis",
    description: "Baca komik hentai terupdate dan terlengkap hanya di Gentai. Akses cepat, bebas iklan popup, dan update setiap hari!",
    keywords: ["komik hentai", "baca hentai", "komik 18+", "komik dewasa"],
    openGraph: {
      title: "Gentai – Baca Komik Hentai Gratis",
      description: "Baca komik hentai terupdate dan terlengkap hanya di Gentai.",
      url: "https://gentai.to/",
      siteName: "Gentai",
      images: [
        {
          url: "https://gentai.to/og-image.jpg",
          width: 1200,
          height: 630,
          alt: "Gentai cover image",
        },
      ],
      locale: "id_ID",
      type: "website",
    },
    robots: {
      index: false,
      follow: false,
    },
  }
}

export default function Home() {
  return <HomeClient></HomeClient>
}
