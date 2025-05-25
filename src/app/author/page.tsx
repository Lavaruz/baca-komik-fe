import { getAllAuthors, getAllGenres } from "../lib/comic";
import { AuthorInterface, GenreInterface } from "../lib/interface";
import Link from "next/link";

export default async function Page(){
  const AUTHORS = await getAllAuthors()
  
  return (
    <div className="container pb-20">

      <div className="md:h-18 mb-6 flex flex-col md:flex-row gap-2">
        <div className="bg-second w-full h-16 md:h-full flex items-center justify-center text-sm text-foreground/80">
          <p>ads_author_1</p>
        </div>
        <div className="bg-second w-full h-16 md:h-full flex items-center justify-center text-sm text-foreground/80">
          <p>ads_author_2</p>
        </div>
      </div>


      <div className="mb-10">
        <div className="mb-4 px-2">
          <h1 className="text-2xl font-light">Author</h1>
          <p className="mt-1 text-foreground/60 text-sm">Cari author kesukaanmu</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-x-6 gap-y-3 text-sm">
          {AUTHORS.data.map((author: AuthorInterface) => (
            <Link href={`/author/${encodeURIComponent(author.name)}`} className="bg-second/70 hover:bg-second rounded-md py-2 px-4 flex items-center justify-between">
              <p className="truncate">{author.name}</p>
              <p className="bg-main flex items-center justify-center w-10 h-6 min-w-10 min-h-6 rounded-md text-xs">{author.comicCount}</p>
            </Link>
          ))}
        </div>
      </div>

      <div className="md:h-18 mb-6 flex flex-col md:flex-row gap-2">
        <div className="bg-second w-full h-16 md:h-full flex items-center justify-center text-sm text-foreground/80">
          <p>ads_author_3</p>
        </div>
        <div className="bg-second w-full h-16 md:h-full flex items-center justify-center text-sm text-foreground/80">
          <p>ads_author_4</p>
        </div>
      </div>
      
      {/* <Search></Search> */}

      {/* <div className="">
        <h1 className="text-4xl font-black text-black/70">TIPE <br />KOMIK</h1>
        <div className="grid grid-cols-4">
          <TypeComic title="DOUJIN" description="Komik dari Author" imgUrl="h1.jpg"></TypeComic>
          <TypeComic title="MANHWA" description="Komik dari Korea" imgUrl="h2.webp"></TypeComic>
          <TypeComic title="MANGA" description="Komik dari Jepang" imgUrl="h3.jpg"></TypeComic>
          <TypeComic title="MANGA" description="Komik dari Jepang" imgUrl="Cover3.webp"></TypeComic>
        </div>
      </div> */}

      {/* <div className="mt-10">
        <h1 className="text-4xl font-black text-black/70">KATEGORI<br />GENRE</h1>
        <div className="grid grid-cols-4 gap-3 mt-6">
          {hentaiGenresTwo.map(genre => (
            <Genre genre={genre.genre} description={genre.description} counter={366} imageUrl=""></Genre>
          ))}
        </div>
      </div> */}

    </div>
  )
}