export function formatTanggalRelative(tanggalString: string): string {
  const now = new Date();
  const tanggal = new Date(tanggalString);

  const diffInMs = now.getTime() - tanggal.getTime();
  const diffInDays = Math.floor(diffInMs / (1000 * 60 * 60 * 24));

  if (diffInDays <= 7) {
    if (diffInDays === 0) return "Hari ini";
    if (diffInDays === 1) return "1 hari lalu";
    return `${diffInDays} hari lalu`;
  }

  return tanggal.toLocaleDateString("id-ID", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

export function isRecentUpload(tanggalString: string): boolean {
  const now = new Date();
  const tanggal = new Date(tanggalString);

  const diffInMs = now.getTime() - tanggal.getTime();
  const diffInDays = Math.floor(diffInMs / (1000 * 60 * 60 * 24));

  return diffInDays === 1;
}
