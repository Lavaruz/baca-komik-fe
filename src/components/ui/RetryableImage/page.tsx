// components/RetryableImage.tsx
'use client';

import { useState } from 'react';
import Image from 'next/image';

interface RetryableImageProps {
  src: string;
  alt?: string;
  index: number;
  className?: string;
}

export default function RetryableImage({ src, alt, className, index }: RetryableImageProps) {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [retryKey, setRetryKey] = useState(0);

  const handleRetry = () => {
    setError(false);
    setLoading(true);
    setRetryKey(prev => prev + 1); // trigger re-render image
  };

  return (
    <div className={`relative w-full ${className}`} style={{ aspectRatio: '3 / 4' }}>
        {loading && !error && (
            <div className="absolute inset-0 bg-gray-200 animate-pulse rounded" />
        )}

        {error && (
            <div className="absolute inset-0 flex flex-col items-center justify-center bg-red-100 text-red-600 z-10">
            <p>Gagal memuat gambar</p>
            <button onClick={handleRetry} className="mt-2 px-4 py-1 bg-blue-500 text-white rounded hover:bg-blue-600">Refresh</button>
            </div>
        )}

        <Image
            key={retryKey}
            src={src}
            alt={alt || 'comic-image'}
            fill // gunakan layout fill, jadi dia akan mengisi parent div
            className={`object-contain transition-opacity duration-300 ${
                loading || error ? 'opacity-0' : 'opacity-100'
            }`}
            onLoad={() => {
                setLoading(false);
            }}
            onError={() => {
                setError(true);
                setLoading(false);
            }}
        />
    </div>
  );
}
