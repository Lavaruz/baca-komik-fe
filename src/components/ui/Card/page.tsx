import { ChapterInterface } from "@/app/lib/interface"
import Image from "next/image"
import Link from "next/link"

interface CardInterface{
    isNew?: boolean,
    title: string,
    src: string,
    id?: string,
    chapters?: ChapterInterface[]
}

export default function Card({id, isNew, title, src, chapters = []} : CardInterface){
    return (
    <div className="p-1.5 group hover:bg-card duration-300 rounded-md">
        <Link href={`/komik/${id}`} title={title}>
            <div className="rounded-md w-full aspect-[4/5] bg-gray-300 overflow-hidden relative shadow-md">
                {/* Layer hitam yang muncul saat hover */}
                <Image src={src} alt={title + "Cover"} fill style={{objectFit: "cover"}}></Image>
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-400 flex items-center justify-center"><i className="uil uil-book-open text-5xl text-white"></i></div>
                <span className="absolute top-1.5 right-1.5 bg-main rounded font-bold px-1.5 py-0.5 text-xs">Manhwa</span>
            </div>
            <div className="mt-1">
                <p className="font-medium duration-400 truncate">{title}</p>
                <div className="flex items-center justify-between">
                    {/* <p className="text-foreground/60 text-sm">CHAPTER 1</p> */}
                    {/* <div className="text-sm flex items-center gap-1">
                        <i className="uil uil-star text-yellow-500"></i>
                        <p className="text-black/60">7.8/10</p>
                    </div> */}
                </div>
                {/* {isNew && <span className="bg-red-500 text-white rounded px-1 py-0.5 text-xs">New</span>} */}
            </div>
        </Link>
        <div className="flex flex-col gap-1 mt-3">
            {chapters.map(chapter => (
                <Link href={"chapters/"+chapter.id} className="flex justify-between items-center hover:bg-main/60 duration-300 group-hover:bg-main bg-second text-foreground/80 rounded-lg w-full py-2 text-sm px-2">
                    <span>Chapter {chapter.chapterNumber}</span>
                    {isNew && <span className="bg-red-500 text-white rounded px-1 text-[10px] self-center">New</span>}
                </Link>
            ))}
        </div>
    </div>
    )
}