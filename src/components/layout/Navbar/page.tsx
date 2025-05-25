"use client";

import Search from "@/components/ui/Search";
import Link from "next/link";
import { useState, useRef, useEffect, FormEvent } from "react";
import { useRouter } from "next/navigation";

export default function Page() {
  const [isOpen, setIsOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [isFocused, setIsFocused] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const router = useRouter();

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  const handleSearchSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!query.trim()) return;
    router.push(`/search?q=${encodeURIComponent(query.trim())}`);
  };

  // 🔥 Shortcut Ctrl + K
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        inputRef.current?.focus();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <nav className="border-b border-second z-[999] bg-[#18181B] relative">
      <div className="flex items-center justify-between py-5 px-[4%] md:px-0 container">
        <div className="flex items-center gap-12">
          <button
            onClick={toggleMenu}
            aria-label="Toggle menu"
            className="relative z-[999] block lg:hidden"
          >
            <i className="uil uil-bars text-2xl"></i>
          </button>
          <Link href={"/"} className="relative z-[999]">
            gentai.to
          </Link>
        </div>

        <div className="hidden md:flex items-center gap-12">
          <Link className="hover:text-link" href={"/"}>
            Home
          </Link>
          <Link className="hover:text-link" href={"/genre"}>
            Genre
          </Link>
          <Link className="hover:text-link" href={"/author"}>
            Author
          </Link>
        </div>

        {/* ✅ Search desktop dengan animasi + shortcut */}
        <form
          onSubmit={handleSearchSubmit}
          className="hidden md:flex gap-4 items-center relative"
        >
          <input
            ref={inputRef}
            type="text"
            placeholder="Cari komik..."
            className={`transition-all duration-300 text-sm border border-second rounded-lg bg-second px-4 py-2 focus:outline-none ${
              isFocused ? "w-[400px]" : "w-[300px]"
            }`}
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
          />
          {/* Floating Ctrl+K hint */}
          <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none">
            <div className="text-xs text-foreground/60 px-2 py-0.5 rounded-md shadow">
              Ctrl + K
            </div>
          </div>
        </form>

      </div>

      {/* Search mobile */}
      <Search className={"block lg:hidden"} />

      {/* Panel popup menu */}
      <div
        className={`fixed top-0 left-0 h-full w-64 bg-[#18181B] shadow-lg z-[950] transform transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between p-4 border-b border-second">
          <span className=""></span>
          <button
            onClick={closeMenu}
            aria-label="Close menu"
            className="invisible text-link text-2xl"
          >
            &times;
          </button>
        </div>
        <nav className="flex flex-col p-4 divide-y divide-gray-800">
          <div className="space-y-6 pb-6">
            <Link
              href={"/"}
              onClick={closeMenu}
              className="hover:text-link flex gap-6 items-center text-sm text-foreground"
            >
              <i className="text-xl uil uil-estate"></i> Home
            </Link>
            <Link
              href={"/genre"}
              onClick={closeMenu}
              className="hover:text-link flex gap-6 items-center text-sm text-foreground"
            >
              <i className="text-xl uil uil-apps"></i> Genre
            </Link>
            <Link
              href={"/author"}
              onClick={closeMenu}
              className="hover:text-link flex gap-6 items-center text-sm text-foreground"
            >
              <i className="text-xl uil uil-users-alt"></i> Author
            </Link>
          </div>
        </nav>
      </div>

      {/* Backdrop semi-transparent */}
      {isOpen && (
        <div
          onClick={closeMenu}
          className="fixed inset-0 bg-black/50 z-[900]"
          aria-hidden="true"
        />
      )}
    </nav>
  );
}
