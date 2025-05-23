'use client'

import { useState } from "react"
import RetryableImage from "@/components/ui/RetryableImage/page"
import Link from "next/link"
import { ComicsDataInterface } from "@/app/lib/interface"
import Image from "next/image"

export default function ChapterClient({ CHAPTER, COMIC }: { CHAPTER: any, COMIC: ComicsDataInterface }) {
  const [isVisible, setIsVisible] = useState(false)
  const [isPopup, setIsPopup] = useState(false)

  const toggleUI = () => setIsVisible(prev => !prev)
  const togglePopup = () => setIsPopup(prev => !prev)

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' })
  const scrollToBottom = () => window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' })

  return (
    <div className="container">
        <div className="mt-6" onClick={toggleUI}>
            <div className="lg:w-[55%] m-auto">
            {CHAPTER.pages.map((page: string, index: number) => (
                // <RetryableImage key={page} src={"https://cdn.assamimuzaki.com/" + page} index={index} alt={CHAPTER.title + index} className="w-full h-auto cursor-pointer"></RetryableImage>
                <Image
                    src={"https://cdn.assamimuzaki.com/" + page}
                    alt={`Page ${page}`}
                    key={page}
                    width={0}
                    height={0}
                    sizes="100vw"
                    className="w-full h-auto cursor-pointer"
                    loading={index < 3 ? "eager" : "lazy"}
                    priority={index < 3}
                    onLoad={()=>{console.log("GG")}}
                />
            ))}
            </div>
        </div>

        {/* TOP BAR */}
        <div className={`fixed top-[1rem] container mx-auto left-1/2 -translate-x-1/2 z-50 w-[95%] md:w-full 
            bg-second rounded-lg justify-between items-center p-4 shadow-md transition-all duration-300 transform flex gap-4
            ${isVisible ? "opacity-100 translate-y-0 pointer-events-auto" : "opacity-0 -translate-y-10 pointer-events-none"}
        `}>
            <Link href={`/komik/`+COMIC.id}><i className="text-3xl uil uil-arrow-left text-white"></i></Link>
            <p className="text-white font-bold truncate">{CHAPTER.title}</p>
            <Link href="/"><i className="text-2xl lg:text-3xl uil uil-estate text-white"></i></Link>
        </div>

        {/* BOTTOM BAR */}
        <div className={`fixed container bottom-[1rem] mx-auto z-50 w-full justify-center gap-6 items-center
        transition-all duration-300 transform
        ${isVisible ? "opacity-100 translate-y-0 pointer-events-auto flex" : "opacity-0 translate-y-10 pointer-events-none flex"}
        `}>
            <button className="bg-second text-white rounded-full w-14 lg:w-16 h-14 lg:h-16"><i className="text-3xl lg:text-4xl uil uil-angle-left"></i></button>
            <button className="bg-second text-white rounded-full w-14 lg:w-16 h-14 lg:h-16"><i className="text-3xl lg:text-4xl uil uil-angle-right"></i></button>
            <button onClick={togglePopup} className="bg-second text-white rounded-full w-14 lg:w-16 h-14 lg:h-16"><i className="text-2xl lg:text-3xl uil uil-list-ul"></i></button>
            <Link href={"/"} className="bg-second flex items-center justify-center text-white rounded-full w-14 lg:w-16 h-14 lg:h-16"><i className="text-2xl lg:text-3xl uil uil-estate"></i></Link>
        </div>

        {/* ARROW BAR */}
        <div className={`fixed top-1/2 right-2 z-50 translate-y-full
            rounded-lg flex-col justify-between items-center transition-all duration-300 transform flex gap-4
            ${isVisible ? "opacity-100 translate-y-0 pointer-events-auto" : "opacity-0 -translate-y-10 pointer-events-none"}
        `}>
            <button onClick={scrollToTop} className="bg-second text-white rounded-full w-14 lg:w-16 h-14 lg:h-16"><i className="text-3xl lg:text-4xl uil uil-angle-up"></i></button>
            <button onClick={scrollToBottom} className="bg-second text-white rounded-full w-14 lg:w-16 h-14 lg:h-16"><i className="text-3xl lg:text-4xl uil uil-angle-down"></i></button>
        </div>

        {/* LIST CHAPTER */}
        <div hidden={!isPopup} className="fixed top-0 bottom-0 right-0 left-0 bg-black/50 z-[55] flex items-center justify-center">
            <div className="fixed p-5 py-8 md:bottom-auto bottom-0 bg-white md:rounded-2xl rounded-t-lg md:w-[750px] w-full overflow-y-auto">
                <div className="flex justify-between">
                    <p className="font-bold text-3xl">Search Chapter</p>
                    <button onClick={togglePopup} className="font-bold text-2xl"><i className="uil uil-times"></i></button>
                </div>
                <hr className="my-6 mb-4 border-gray-200" />
                <div className="">
                    <input type="text" className="p-4 mb-6 border border-gray-200 focus:outline-none bg-gray-100 rounded-2xl w-full" placeholder="Cari Chapter.." />
                </div>
                <div className="h-[60vh] overflow-y-auto flex flex-col gap-3">
                    { Array(6).fill(0).map((data, index) => (
                        <div key={index} className="rounded-2xl shadow-md px-4 py-5 bg-second/10 border border-main/40 font-bold text-xl text-main">Chapter {index+1}</div>
                    ))}
                </div>
            </div>
        </div>
    </div>
  )
}
