export default function NotFound() {
  return (
    <div className="min-h-[80vh] flex flex-col items-center justify-center text-center px-4">
      <h1 className="text-6xl font-bold text-main mb-4">404</h1>
      <p className="text-xl text-foreground/80 mb-2">Halaman tidak ditemukan</p>
      <p className="text-foreground/60 mb-6">Sepertinya kamu nyasar, halaman yang kamu cari tidak tersedia.</p>
      <a
        href="/"
        className="px-6 py-2 bg-second text-foreground rounded-xl hover:bg-green-700 transition-all"
      >
        Kembali ke Beranda
      </a>
    </div>
  );
}
