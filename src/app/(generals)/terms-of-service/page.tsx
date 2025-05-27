import Head from "next/head";

export default function TermsPage() {
  return (
    <>
      <Head>
        <title>Terms of Service | Gentai</title>
      </Head>
      <main className="max-w-3xl mx-auto px-4 pb-10 text-white">
        <h1 className="text-3xl font-bold mb-6">Terms of Service – Gentai</h1>
        <p className="text-sm mb-4 text-gray-400">Last Updated: 27 Mei 2025</p>

        <p className="mb-4">
          Selamat datang di Gentai. Dengan mengakses dan menggunakan situs ini, Anda menyetujui Syarat dan Ketentuan yang berlaku berikut ini. Jika Anda tidak setuju dengan salah satu bagian dari ketentuan ini, mohon untuk tidak menggunakan situs Gentai.
        </p>

        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-2">1. Layanan Kami</h2>
          <p>
            Gentai adalah situs yang menyediakan akses baca komik berbasis konten dewasa, termasuk genre hentai dan sejenisnya. Semua komik yang ditampilkan di Gentai bukan hasil produksi asli kami, melainkan hasil <i>mirroring</i> atau <i>scraping</i> dari sumber pihak ketiga di internet.
            Kami tidak menjamin keakuratan, legalitas, atau keaslian konten tersebut.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-2">2. Usia Minimum Pengguna</h2>
          <p>
            Situs ini hanya ditujukan untuk pengguna yang berusia minimal 18 tahun atau usia dewasa sesuai hukum di wilayah hukum Anda. Dengan mengakses Gentai, Anda menyatakan bahwa Anda cukup umur secara hukum untuk melihat konten dewasa.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-2">3. Konten & Karakter dalam Komik</h2>
          <p>
            Gentai tidak memiliki kontrol atas isi dari komik yang ditampilkan. Beberapa karakter atau cerita mungkin menggambarkan situasi fiktif yang dapat dianggap tidak pantas oleh sebagian pengguna.
            Semua konten disediakan "sebagaimana adanya" dan hanya untuk hiburan pribadi.
            Kami tidak membuat, mengedit, atau menyunting konten tersebut, dan kami tidak bertanggung jawab atas representasi karakter, termasuk namun tidak terbatas pada usia, gender, atau situasi dalam cerita.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-2">4. Hak Cipta & Konten Pihak Ketiga</h2>
          <p>
            Semua komik yang ditampilkan di Gentai bukan milik kami. Hak cipta sepenuhnya dimiliki oleh pencipta/penerbit aslinya.
            Gentai tidak mengklaim kepemilikan konten. Jika Anda adalah pemilik hak cipta dan ingin menghapus konten Anda dari situs ini, silakan hubungi kami di <b>[youremail@domain.com]</b> dengan bukti valid. Kami akan merespons permintaan penghapusan dengan cepat jika valid.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-2">5. Larangan Penggunaan</h2>
          <p>
            Pengguna dilarang menggunakan situs Gentai untuk:
          </p>
          <ul className="list-disc list-inside ml-4">
            <li>Menyebarluaskan konten secara massal</li>
            <li>Menyalin ulang isi situs untuk tujuan komersial</li>
            <li>Mengakses situs dengan bot atau crawler secara agresif</li>
            <li>Melanggar hukum yang berlaku di wilayah Anda</li>
          </ul>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-2">6. Tanggung Jawab Pengguna</h2>
          <p>
            Anda bertanggung jawab atas penggunaan Anda atas situs ini. Gentai tidak bertanggung jawab atas:
          </p>
          <ul className="list-disc list-inside ml-4">
            <li>Konsekuensi hukum akibat mengakses konten tertentu</li>
            <li>Dampak sosial atau psikologis akibat konsumsi konten dewasa</li>
            <li>Pemblokiran akses oleh ISP atau pemerintah wilayah Anda</li>
          </ul>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-2">7. Perubahan pada Ketentuan</h2>
          <p>
            Gentai berhak untuk mengubah atau memperbarui Terms of Service ini kapan saja tanpa pemberitahuan sebelumnya. Versi terbaru akan selalu ditampilkan di halaman ini.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-2">8. Hukum yang Berlaku</h2>
          <p>
            Penggunaan situs ini tunduk pada hukum internasional umum yang berlaku pada internet. Anda bertanggung jawab untuk memastikan bahwa penggunaan Anda atas situs ini tidak melanggar hukum di wilayah Anda.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-2">9. Kontak</h2>
          <p>
            Untuk pertanyaan, permintaan takedown, atau klarifikasi, silakan hubungi kami melalui email: <b>[youremail@domain.com]</b>
          </p>
        </section>
      </main>
    </>
  );
}
