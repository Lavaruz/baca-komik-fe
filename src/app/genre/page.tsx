import { getAllGenres } from "../lib/comic";
import { GenreInterface } from "../lib/interface";
import Link from "next/link";

export default async function Page(){
  const hentaiGenres = [
    { genre: "Vanilla", description: "Cerita romantis yang manis dan konsensual, sering menggambarkan hubungan pacaran yang sehat." },
    { genre: "NTR (Netorare)", description: "Cerita tentang pasangan yang direbut atau diselingkuhi, biasanya menyakitkan secara emosional." },
    { genre: "Incest", description: "Hubungan seksual antara anggota keluarga (ayah-anak, kakak-adik, dll)." },
    { genre: "Loli / Shota", description: "Karakter yang terlihat sangat muda atau seperti anak-anak; sering kontroversial." },
    { genre: "Yuri", description: "Hubungan romantis dan seksual antar perempuan." },
    { genre: "Yaoi / BL", description: "Hubungan romantis dan seksual antar pria (Boys' Love)." },
    { genre: "Futanari", description: "Karakter perempuan dengan alat kelamin pria, sering kali memiliki kedua organ." },
    { genre: "BDSM", description: "Tema dominasi dan submisi, termasuk bondage, hukuman, dan kontrol." },
    { genre: "Monster / Tentacle", description: "Hubungan seksual dengan makhluk non-manusia seperti monster atau tentakel." },
    { genre: "Mind Break", description: "Karakter kehilangan akal sehat akibat seks ekstrem atau manipulasi." },
    { genre: "Rape / Non-consensual", description: "Seks paksa, digambarkan tanpa persetujuan; sangat kontroversial." },
    { genre: "Cheating / Adultery", description: "Perselingkuhan atau hubungan di luar pernikahan, mirip NTR tapi lebih netral." },
    { genre: "Big Breasts / Oppai", description: "Fokus pada karakter dengan payudara besar." },
    { genre: "Schoolgirl / JK", description: "Karakter perempuan berseragam sekolah Jepang, biasanya siswi SMA." },
    { genre: "Teacher / Sensei", description: "Cerita tentang hubungan antara guru dan murid." },
    { genre: "Maid / Office Lady", description: "Latar pekerjaan seperti pembantu, sekretaris, atau wanita kantoran." },
    { genre: "MILF / Mature", description: "Karakter wanita dewasa, sering digambarkan sebagai ibu-ibu atau janda." },
    { genre: "Group / Orgy", description: "Seks grup dengan tiga orang atau lebih." },
    { genre: "Anal / Paizuri / Handjob", description: "Berdasarkan jenis aktivitas seksual tertentu seperti anal, payudara, atau tangan." },
    { genre: "Public Sex / Exhibitionism", description: "Seks di tempat umum atau dalam situasi yang bisa dilihat orang." },
    { genre: "Gender Bender", description: "Karakter yang berubah jenis kelamin karena sihir atau teknologi." },
    { genre: "Mind Control / Hypnosis", description: "Karakter dikendalikan pikirannya melalui hipnosis atau sihir." },
    { genre: "Slave / Training", description: "Tema perbudakan seksual dan pelatihan dominasi." },
    { genre: "Creampie / Bukkake", description: "Fokus pada ejakulasi internal (creampie) atau ejakulasi banyak pria (bukkake)." }
  ];

  const hentaiGenresTwo = [
    { genre: "Vanilla", description: "Romantis, konsensual" },
    { genre: "NTR", description: "Pasangan direbut" },
    { genre: "Incest", description: "Hubungan keluarga" },
    { genre: "Loli / Shota", description: "Karakter imut/anak-anak" },
    { genre: "Yuri", description: "Cewek × cewek" },
    { genre: "Yaoi / BL", description: "Cowok × cowok" },
    { genre: "Futanari", description: "Cewek dengan alat pria" },
    { genre: "BDSM", description: "Keras & dominasi" },
    { genre: "Monster / Tentacle", description: "Makhluk non-manusia" },
    { genre: "Mind Break", description: "Akal sehat hilang" },
    { genre: "Rape", description: "Tanpa persetujuan" },
    { genre: "Cheating", description: "Perselingkuhan" },
    { genre: "Big Breasts", description: "Payudara besar" },
    { genre: "Schoolgirl", description: "Siswi SMA" },
    { genre: "Teacher", description: "Guru & murid" },
    { genre: "Maid / OL", description: "Pembantu / wanita kantoran" },
    { genre: "MILF", description: "Wanita dewasa" },
    { genre: "Group", description: "Banyak pasangan" },
    { genre: "Anal", description: "Dari belakang" },
    { genre: "Paizuri", description: "Seks payudara" },
    { genre: "Handjob", description: "Dengan tangan" },
    { genre: "Public", description: "Tempat umum" },
    { genre: "Gender Bender", description: "Ganti kelamin" },
    { genre: "Hypnosis", description: "Hipnotis & kontrol" },
    { genre: "Slave", description: "Perbudakan" },
    { genre: "Creampie", description: "Ejakulasi dalam" },
    { genre: "Bukkake", description: "Ejakulasi ramai-ramai" }
  ];

  const GENRES = await getAllGenres()
  
  return (
    <div className="container pb-20">

      <div className="md:h-18 mb-6 flex flex-col md:flex-row gap-2">
        <div className="bg-second w-full h-16 md:h-full flex items-center justify-center text-sm text-foreground/80">
          <p>ads_genre_1</p>
        </div>
        <div className="bg-second w-full h-16 md:h-full flex items-center justify-center text-sm text-foreground/80">
          <p>ads_genre_2</p>
        </div>
      </div>


      <div className="mb-10">
        <div className="mb-4 px-2">
          <h1 className="text-2xl font-light">Genre</h1>
          <p className="mt-1 text-foreground/60 text-sm">Cari preferensi kamu disini</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-x-6 gap-y-3 text-sm">
          {GENRES.data.map((genre: GenreInterface) => (
            <Link href={`/genre/${encodeURIComponent(genre.name)}`} className="bg-second/70 hover:bg-second rounded-md py-2 px-4 flex items-center justify-between">
              <p className="truncate">{genre.name}</p>
              <p className="bg-main flex items-center justify-center w-10 h-6 min-w-10 min-h-6 rounded-md text-xs">{genre.comicCount}</p>
            </Link>
          ))}
        </div>
      </div>

      <div className="md:h-18 mb-6 flex flex-col md:flex-row gap-2">
        <div className="bg-second w-full h-16 md:h-full flex items-center justify-center text-sm text-foreground/80">
          <p>ads_genre_3</p>
        </div>
        <div className="bg-second w-full h-16 md:h-full flex items-center justify-center text-sm text-foreground/80">
          <p>ads_genre_4</p>
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