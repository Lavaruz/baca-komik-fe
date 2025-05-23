import Link from "next/link"

interface GenreInterface{
    genre: string,
    description: string,
    counter: number,
    imageUrl: string
}

export default function Genre(genreInterface: GenreInterface){
    return (
        <Link
            href={`/genre/${genreInterface.genre}`}
            className="hover:scale-[0.99] hover:bg-gray-200/60 duration-300 rounded-md p-6 group h-[300px] flex flex-col justify-end relative overflow-hidden"
            style={{ backgroundImage: `url(${genreInterface.imageUrl})` }}
            >
            {/* Gradient Layer */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/80 via-35% to-transparent"></div>

            {/* Content */}
            <div className="relative z-10 flex flex-col gap-2">
                <div className="">
                    <h2 className="text-2xl truncate font-semibold text-white uppercase">{genreInterface.genre}</h2>
                    <p className="text-orange-400/80">{genreInterface.description}</p>
                </div>
                <div className="flex items-center gap-2 text-2xl text-white/90">
                    <i className="uil uil-books"></i>
                    <p className="font-semibold">{genreInterface.counter}</p>
                </div>
            </div>
        </Link>

    )
}