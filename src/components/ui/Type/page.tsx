import Link from "next/link"

interface TypeInterface {
  title: string
  description: string
  imgUrl: string
}

export default function TypeComic(typeInterface: TypeInterface) {
  // Misal sementara URL image pakai title lowercase
  const bgImageUrl = `/img/${typeInterface.imgUrl}`

  return (
    <Link href={`/type/${typeInterface.title.toLowerCase()}`} className="h-[90vh] w-full text-center flex flex-col justify-end p-6 pb-16 relative overflow-hidden group">
      {/* Background Image Layer */}
      <div className="absolute inset-0 bg-center bg-cover transition-transform duration-500 scale-100 group-hover:scale-110 z-0" style={{ backgroundImage: `url(${bgImageUrl})` }}></div>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/80 via-20% to-transparent to-50% z-10"></div>

      {/* Content */}
      <div className="relative z-20">
        <h2 className="text-white text-3xl font-black">{typeInterface.title}</h2>
        <p className="text-white font-bold pt-8">{typeInterface.description}</p>
      </div>
    </Link>
  )
}
