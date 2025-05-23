import Link from "next/link"

export default function Page(){
    return (
        <nav className="border-b border-gray-800 z-[999] bg-[#18181B]">
            <div className="flex items-center justify-between py-8 px-[3%] md:px-0 container">
                <Link href={'/'} className="text-2xl font-bold">Gentai</Link>
                <div className="flex items-center gap-16">
                    <div className="hidden md:flex items-center gap-12">
                        <Link className="hover:text-link" href={'/'}>Explore</Link>
                        <Link className="hover:text-link" href={'/genre'}>Genre</Link>
                        <Link className="hover:text-link" href={"/author"}>Author</Link>
                    </div>
                </div>
                <div className="hidden w-max md:flex gap-16 items-center">
                    <div className="justify-self-end">
                        <input type="text" placeholder="Cari komik.." name="" id="" className="w-[300px] text-sm border border-gray-800 rounded-lg bg-second px-4 py-2" />
                    </div>
                    <button className="text-base font-semibold text-link"><i className="uil uil-sign-in-alt"></i> Login</button>
                </div>
            </div>
        </nav>
    )
}