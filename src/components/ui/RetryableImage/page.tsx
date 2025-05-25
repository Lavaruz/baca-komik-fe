'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';

interface RetryableImageProps {
  src: string;
  alt?: string;
  index: number;
  className?: string;
}

export default function RetryableImage({ src, alt, className, index }: RetryableImageProps) {
  const [retryCount, setRetryCount] = useState(0);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [finalSrc, setFinalSrc] = useState(src);

  // Reset state every time src or retryCount changes
  useEffect(() => {
    setLoading(true);
    setError(false);
    // Append retryCount to force reload
    setFinalSrc(`${src}?retry=${retryCount}`);
  }, [src, retryCount]);

  const handleRetry = () => {
    setRetryCount((prev) => prev + 1);
  };

  const addDefaultImg = (ev:any) => {
    ev.target.src = "default-dog.jpg"
  }

  return (
    <div className={`relative w-full ${className}`} style={{ aspectRatio: '3 / 4' }}>
      {loading && !error && (
        <div className="absolute inset-0 bg-gray-200 animate-pulse z-0" />
      )}

      {error && (
        <div className="absolute inset-0 flex flex-col items-center justify-center bg-second z-10">
          <button onClick={handleRetry} className="mt-2 px-4 py-2 bg-main text-white rounded-xl hover:bg-main/80">
            Refresh
          </button>
        </div>
      )}

      <Image
        src={finalSrc}
        alt={alt || 'comic-image'}
        className={`object-contain transition-opacity duration-300 w-full h-auto cursor-pointer ${
          loading || error ? 'opacity-0' : 'opacity-100'
        }`}
        width={0}
        height={0}
        sizes='100vw'
        onLoad={() => {
          setLoading(false);
          setError(false);
        }}
        // onError={() => {
        //   setError(true);
        //   setLoading(false);
        // }}
      />
    </div>
  );
}


// 'use client';

// import { useState, useEffect } from 'react';

// interface RetryableImageProps {
//   src: string;
//   alt?: string;
//   index: number;
//   className?: string;
// }

// export default function RetryableImage({ src, alt, className, index }: RetryableImageProps) {
//   const [retryCount, setRetryCount] = useState(0);
//   const [progress, setProgress] = useState(0);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(false);
//   const [imageBlobUrl, setImageBlobUrl] = useState<string | null>(null);

//   const finalSrc = `${src}?retry=${retryCount}`;

//   const fetchImage = async () => {
//     try {
//       setLoading(true);
//       setError(false);
//       setProgress(0);

//       const xhr = new XMLHttpRequest();
//       xhr.open('GET', finalSrc, true);
//       xhr.responseType = 'blob';

//       xhr.onprogress = (event) => {
//         if (event.lengthComputable) {
//           const percent = Math.round((event.loaded / event.total) * 100);
//           setProgress(percent);
//         }
//       };

//       xhr.onload = () => {
//         if (xhr.status === 200) {
//           const blob = xhr.response;
//           const url = URL.createObjectURL(blob);
//           setImageBlobUrl(url);
//           setLoading(false);
//         } else {
//           throw new Error('Failed to load image');
//         }
//       };

//       xhr.onerror = () => {
//         setError(true);
//         setLoading(false);
//       };

//       xhr.send();
//     } catch (err) {
//       setError(true);
//       setLoading(false);
//     }
//   };

//   useEffect(() => {
//     fetchImage();

//     return () => {
//       // cleanup blob URL
//       if (imageBlobUrl) {
//         URL.revokeObjectURL(imageBlobUrl);
//       }
//     };
//   }, [src, retryCount]);

//   const handleRetry = () => {
//     setRetryCount((prev) => prev + 1);
//   };

//   return (
//     <div className={`relative w-full ${className}`} style={{ aspectRatio: '3 / 4' }}>
//       {/* Progress Bar */}
//       {loading && !error && (
//         <div className="absolute inset-0 flex items-center justify-center bg-gray-100 z-10">
//           <div className="w-3/4 h-2 bg-gray-300 rounded overflow-hidden">
//             <div
//               className="h-full bg-main transition-all duration-200"
//               style={{ width: `${progress}%` }}
//             />
//           </div>
//         </div>
//       )}

//       {/* Error State */}
//       {error && (
//         <div className="absolute inset-0 flex flex-col items-center justify-center bg-second z-20">
//           <button
//             onClick={handleRetry}
//             className="mt-2 px-4 py-2 bg-main text-white rounded-xl hover:bg-main/80"
//           >
//             Refresh
//           </button>
//         </div>
//       )}

//       {/* Actual Image */}
//       {!error && imageBlobUrl && (
//         <img
//           src={imageBlobUrl}
//           alt={alt || 'comic-image'}
//           className={`object-contain transition-opacity duration-300 w-full h-auto ${
//             loading ? 'opacity-0' : 'opacity-100'
//           }`}
//           onLoad={() => setLoading(false)}
//           onError={() => {
//             setError(true);
//             setLoading(false);
//           }}
//         />
//       )}
//     </div>
//   );
// }
