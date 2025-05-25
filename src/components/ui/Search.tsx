"use client";

import { useRouter } from "next/navigation";
import { FormEvent, useState } from "react";

export default function Search({ className }: { className?: any }) {
  const router = useRouter();
  const [query, setQuery] = useState("");

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!query.trim()) return;

    router.push(`/search?q=${encodeURIComponent(query.trim())}`);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className={`${className} flex items-center divide-x divide-background bg-second overflow-hidden`}
    >
      <input
        className="w-full text-foreground focus:outline-none py-2.5 px-4"
        placeholder="Cari komik..."
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <button type="submit" className="cursor-pointer p-4 py-2.5">
        <i className="uil uil-search font-medium"></i>
      </button>
    </form>
  );
}
