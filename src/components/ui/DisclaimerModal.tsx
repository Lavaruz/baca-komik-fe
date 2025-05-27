'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';

export default function DisclaimerModal() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const verified = localStorage.getItem('gentai-verified');
    if (!verified) {
      setVisible(true);
    }
  }, []);

  const handleAgree = () => {
    localStorage.setItem('gentai-verified', 'true');
    setVisible(false);
  };

  const handleLeave = () => {
    window.location.href = 'https://id.shinigami.asia'; // atau situs netral lain
  };

  if (!visible) return null;

  return (
    <div className="backdrop-blur fixed inset-0 bg-black/80 flex justify-center items-center z-[1000]">
      <div className="bg-second text-foreground p-6 rounded-xl max-w-md text-center w-[90%] m-auto">
        <i className='uil uil-exclamation-triangle text-5xl'></i>
        <h2 className="text-xl font-bold mb-4 mt-4"><span className='text-red-500'>Disclaimer!</span> - Konten Dewasa</h2>
        <p className="">
          Website ini mengandung konten dewasa dan hanya boleh diakses oleh pengguna berusia 18 tahun ke atas.
        </p>
        <div className="flex flex-col justify-center gap-2 mt-8">
            <button className="bg-main text-white px-4 py-4 rounded-full" onClick={handleAgree}>
                Aku diatas 18 Tahun
            </button>
            <button className="text-link px-4 py-4" onClick={handleLeave} >
                Keluar, Aku dibawah 18 Tahun
            </button>
        </div>
        <p className='text-xs text-foreground/40 mt-3'>Dengan menekan tombol diatas kamu menyetujui <Link className='text-link/60' href={"/terms-of-service"}>Terms of Service</Link> kami</p>
      </div>
    </div>
  );
}
