import ChapterClient from "../../../components/layout/ChapterClient"
import { GetChapterById } from "@/app/lib/chapter"
import { getComicById } from "@/app/lib/comic"
import DisqusLibrary from "../../../components/layout/DisqusComment"
import { Metadata } from "next"
import { ChapterInterface, ComicsDataInterface } from "@/app/lib/interface"

type Props = {
  params: { slug: string }
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const ID = (await params).slug
  const CHAPTER: ChapterInterface = await GetChapterById(ID)
  const COMIC: ComicsDataInterface = await getComicById(CHAPTER.comicId)

  return {
    title: `${CHAPTER.title} - ${COMIC.title}`,
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

export default async function ChapterPage({ params }: Props) {
  const SLUG = (await params).slug
  const CHAPTER = await GetChapterById(SLUG)
  const COMIC = await getComicById(CHAPTER.comicId)

  return (
    <>
      <ChapterClient CHAPTER={CHAPTER} COMIC={COMIC} />
      <div className="max-w-4xl mx-auto px-4 mt-12">
        <div className="md:h-18 mb-6 flex flex-col md:flex-row gap-2">
          <div className="bg-second w-full h-16 md:h-full flex items-center justify-center text-sm text-foreground/80">
            <p>ads_chapters_3</p>
          </div>
          <div className="bg-second w-full h-16 md:h-full flex items-center justify-center text-sm text-foreground/80">
            <p>ads_chapters_4</p>
          </div>
        </div>
        <DisqusLibrary url={`https://1s3qndx9-3000.asse.devtunnels.ms/${SLUG}`} title={CHAPTER.title} />
      </div>
    </>
  )
}
