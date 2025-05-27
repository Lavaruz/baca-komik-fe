import Head from "next/head";

export default function PrivacyPolicy() {
  return (
    <>
      <Head>
        <title>Privacy Policy | Gentai</title>
      </Head>
      <main className="max-w-3xl mx-auto px-4 pb-10 text-white">
        <h1 className="text-3xl font-bold mb-6">Privacy Policy – Gentai</h1>
        <p className="text-sm mb-4 text-gray-400">Last Updated: 27 Mei 2025</p>

        <p className="mb-4">
          Gentai menghargai privasi Anda. Kebijakan privasi ini menjelaskan bagaimana kami mengumpulkan, menggunakan, dan melindungi informasi Anda saat menggunakan situs ini.
        </p>

        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-2">1. Data yang Kami Kumpulkan</h2>
          <ul className="list-disc list-inside ml-4">
            <li>IP Address dan data penggunaan (melalui server dan Cloudflare)</li>
            <li>Data statistik anonim (via Google Analytics atau layanan sejenis)</li>
            <li>Jika ada form/kontak, maka data yang Anda kirim</li>
          </ul>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-2">2. Bagaimana Kami Menggunakan Data</h2>
          <p>
            Data digunakan untuk analisis performa situs, menjaga keamanan, dan meningkatkan pengalaman pengguna. Kami tidak menjual atau membagikan data kepada pihak ketiga.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-2">3. Cookie & Pelacakan</h2>
          <p>
            Kami menggunakan cookie atau teknologi serupa untuk menyimpan preferensi dan melacak penggunaan situs. Anda dapat menonaktifkan cookie di browser Anda.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-2">4. Keamanan</h2>
          <p>
            Kami berusaha menjaga data Anda tetap aman dengan menerapkan praktik keamanan umum. Namun, kami tidak dapat menjamin 100% keamanan data di internet.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-2">5. Perubahan</h2>
          <p>
            Kebijakan privasi ini dapat berubah sewaktu-waktu. Kami akan memperbarui tanggal di atas jika ada perubahan.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-2">6. Hubungi Kami</h2>
          <p>
            Jika ada pertanyaan mengenai kebijakan ini, silakan hubungi kami di <b>[youremail@domain.com]</b>.
          </p>
        </section>
      </main>
    </>
  );
}
