import Link from "next/link";
import Image from "next/image";
import Card from "@/components/ui/Card/page";
import { notFound } from "next/navigation";
import { Metadata, ResolvingMetadata } from "next";
import { getComicById, GetComicChapterById} from "../../lib/comic"
import { ChapterInterface, ChaptersInterface, ComicsDataInterface } from "@/app/lib/interface";
import { formatTanggalRelative, isRecentUpload } from "../../lib/utils";
import DisqusLibrary from "@/components/layout/DisqusComment";

type Props = {
  params: Promise<{ slug: string }>
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>
}

export async function generateMetadata({ params }: Props, parent: ResolvingMetadata): Promise<Metadata> {
  const ID = (await params).slug
  const COMIC: ComicsDataInterface = await getComicById(ID)
  return {
    title: COMIC.title,
  }
}

export default async function ComicDetail({params}: Props) {
  const ID = (await params).slug
  const COMIC: ComicsDataInterface = await getComicById(ID)
  const CHAPTERS: ChaptersInterface = await GetComicChapterById(ID)

  if(COMIC.message) notFound()
  
  // notFound()
  return (
  <div className="container">
    <div className="md:h-18 mb-6 flex flex-col md:flex-row gap-2">
      <div className="bg-second w-full h-16 md:h-full flex items-center justify-center text-sm text-foreground/80">
        <p>ads_komik_1</p>
      </div>
      <div className="bg-second w-full h-16 md:h-full flex items-center justify-center text-sm text-foreground/80">
        <p>ads_komik_2</p>
      </div>
    </div>

    <div className="grid md:grid-cols-8 gap-6">
      <div className="md:col-span-6 px-[5%] md:px-0">
        <div className="pb-8 grid md:grid-cols-10 gap-6">
          <div className="md:col-span-3">
            <div className="rounded-md w-[85%] mx-auto md:w-full aspect-[4/5] bg-gray-300 overflow-hidden relative shadow-md">
                {/* Layer hitam yang muncul saat hover */}
                <Image src={"https://cdn.assamimuzaki.com/"+COMIC.coverImage} alt={COMIC.title} fill style={{objectFit: "cover"}}></Image>
                {/* <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-400 flex items-center justify-center"><i className="uil uil-book-open text-5xl text-white"></i></div>
                <span className="absolute top-1.5 right-1.5 bg-main text-white rounded font-bold px-1.5 py-0.5">Manhwa</span> */}
            </div>
            {CHAPTERS.data.length > 0 &&
            <div className="flex flex-col gap-2 mt-3">
              <Link href={`/chapters/${CHAPTERS.data[0].id}`} className="text-center w-full bg-main text-white font-bold py-3 md:py-2 rounded-lg"><i className="uil uil-play"></i> Baca Chapter 1</Link>
              {/* <button disabled className="disabled:opacity-60 w-full bg-main/10 text-main border border-main/40 font-bold py-3 md:py-2 rounded-lg"><i className="uil uil-bookmark"></i> Bookmark</button> */}
            </div>}
          </div>


          <div className="md:col-span-7">
            <h1 className="font-bold text-foreground/80 text-xl md:text-2xl">{COMIC.title}</h1>
            <p className="mt-4 text-foreground text-sm md:text-base">{COMIC.synopsis}</p>

            <div className="grid gap-x-6 gap-y-4 grid-cols-1 text-sm mt-4">
              <div className="grid grid-cols-[.4fr_1fr] sm:grid-cols-[.2fr_1fr] items-center">
                <span className="font-medium text-base lg:text-lg">Status</span>
                <button className="bg-second text-xs font-medium px-4 py-2 rounded-lg w-max">
                  {COMIC.status}
                </button>
              </div>
              
              <div className="grid grid-cols-[.4fr_1fr] sm:grid-cols-[.2fr_1fr] items-center">
                <span className="font-medium text-base lg:text-lg">Author</span>
                {COMIC.authors && COMIC.authors.length > 0 ?
                  COMIC.authors.map((author) => (
                    <Link key={author.id} href={`/author/${author.name}`} className="bg-second text-xs font-medium px-4 py-2 rounded-lg w-max hover:bg-main duration-300">
                      {author.name}
                    </Link>
                  ))
                :
                  <button className="bg-second text-xs font-medium px-4 py-2 rounded-lg w-max">
                    {COMIC.author}
                  </button>
                }
              </div>

              {COMIC.genres &&COMIC.genres.length > 0 &&
                <div className="grid grid-cols-[.4fr_1fr] sm:grid-cols-[.2fr_1fr] items-start">
                  <span className="font-medium text-base lg:text-lg">Genre</span>
                  <div className="flex flex-wrap gap-2">
                    {COMIC.genres.map((genre) => (
                      <Link href={`/explore?genre=${genre.name.trim()}`} key={genre.id} className="bg-second text-xs font-medium px-4 py-2 rounded-lg w-max hover:bg-main duration-300" >
                        {genre.name}
                      </Link>
                    ))}
                  </div>
                </div>
              }
            </div>
          </div>
        </div>

        <div className="mt-6 pb-8 pt-6 bg-second p-5 rounded-2xl">
          <p className="font-bold text-xl">Daftar Chapter <span className="text-link">{COMIC.title}</span></p>
          <form className="flex items-center divide-x divide-gray-800 bg-[#18181b] rounded-md overflow-hidden mt-4">
            <input className="w-full focus:outline-none px-3 text-sm" placeholder="Cari Judul/Chapter..." type="text" name="" id="" />
            <button type="button" className="cursor-pointer text-main px-3 py-2"><i className="uil uil-search font-medium"></i></button>
          </form>
          <div className="mt-6 max-h-[400px] overflow-auto">
            {CHAPTERS.data.map((chapter: ChapterInterface, index: number) => (
              <Link key={index} href={`/chapters/${chapter.id}`} className="flex gap-4 items-center border-t w-full py-2 border-[#18181b] lg:px-4">
                  <div className="text-link text-3xl w-[40px] flex justify-center font-medium">{chapter.chapterNumber}</div>
                  <div className="w-full">
                    <p className="font-bold text-lg">{chapter.title}</p>
                    <p className="text-foreground/80 text-sm mt-1">{formatTanggalRelative(chapter.createdAt)}</p>
                  </div>
                  {isRecentUpload(chapter.createdAt) && <div className="bg-red-500 p-1 font-medium text-[10px]">new</div>}
              </Link>
            ))}
          </div>
        </div>

        <div className="h-18 my-6">
          <div className="bg-second w-full h-full flex items-center justify-center text-sm text-foreground/80">
            <p>ads_komik_chapters</p>
          </div>
        </div>

        <div className="mt-8">
          <h1 className="text-xl mb-4 px-1 font-bold">Kamu Mungkin Suka</h1>
          <div className="grid grid-cols-2 md:grid-cols-4">
            {/* <Card title="" isNew={true} src="/img/Cover.webp"></Card> */}
            {/* <Card id="judul" title="MILF Hunting In Another World" isNew={true} src="/img/Cover2.webp"></Card>
            <Card id="judul" title="Secret Class" isNew={true} src="/img/Cover3.webp"></Card>
            <Card id="judul" title="Corruption in The Dungeon" isNew={false} src="/img/Cover4.webp"></Card>
            <Card id="judul" title="The Hole Diary" isNew={false} src="/img/Cover5.webp"></Card> */}
          </div>
        </div>

        <div className="max-w-4xl mx-auto px-4 mt-12">
          <DisqusLibrary url={`https://1s3qndx9-3000.asse.devtunnels.ms/${ID}`} title={COMIC.title} />
        </div>

      </div>
      <div className="md:col-span-2 px-[5%] md:px-0">
        <div className="sticky top-[2rem]">
          <div className="bg-second p-5 rounded-xl flex flex-col gap-3">
            <p className="text-lg font-bold mb-3">Gentai Socials</p>
            <button className="w-full py-2 bg-main text-white font-medium rounded">Join Discord Kita</button>
            {/* <button className="w-full py-2 bg-main text-white font-medium rounded">Join Discord Kita</button> */}
            <button className="w-full py-2 bg-blue-500 text-white font-medium rounded">Follow Facebook</button>
          </div>

          <div className="flex flex-col gap-2 mt-6">
            <div className="bg-second h-14 w-full flex items-center justify-center text-sm text-foreground/80">
              <p>ads_komik_3</p>
            </div>
            <div className="bg-second h-14 w-full flex items-center justify-center text-sm text-foreground/80">
              <p>ads_komik_4</p>
            </div>
            <div className="bg-second h-14 w-full flex items-center justify-center text-sm text-foreground/80">
              <p>ads_komik_5</p>
            </div>
            <div className="bg-second h-14 w-full flex items-center justify-center text-sm text-foreground/80">
              <p>ads_komik_6</p>
            </div>
          </div>
        </div>

      </div>
    </div>
  </div>
  )
}