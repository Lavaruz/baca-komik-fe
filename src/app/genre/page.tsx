import Card from "@/components/ui/Card/page"
import Search from "@/components/ui/Search/page"
import Genre from "@/components/ui/Genre/page"
import TypeComic from "@/components/ui/Type/page";

export default function Page(){
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
  
  return (
    <div className="container pb-20">
      
      {/* <Search></Search> */}

      <div className="">
        {/* <h1 className="text-4xl font-black text-black/70">TIPE <br />KOMIK</h1> */}
        <div className="grid grid-cols-4">
          <TypeComic title="DOUJIN" description="Komik dari Author" imgUrl="h1.jpg"></TypeComic>
          <TypeComic title="MANHWA" description="Komik dari Korea" imgUrl="h2.webp"></TypeComic>
          <TypeComic title="MANGA" description="Komik dari Jepang" imgUrl="h3.jpg"></TypeComic>
          <TypeComic title="MANGA" description="Komik dari Jepang" imgUrl="Cover3.webp"></TypeComic>
        </div>
      </div>

      <div className="mt-10">
        <h1 className="text-4xl font-black text-black/70">KATEGORI<br />GENRE</h1>
        <div className="grid grid-cols-4 gap-3 mt-6">
          {hentaiGenresTwo.map(genre => (
            <Genre genre={genre.genre} description={genre.description} counter={366} imageUrl=""></Genre>
          ))}
        </div>
      </div>

    </div>
  )
}