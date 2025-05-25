export default function Page(){
    return (
        <footer className="border-t py-8 border-gray-800 bg-[#18181B]">
            <div className="container flex gap-3 flex-col lg:flex-row items-center justify-center md:justify-between">
                <div className="">
                    <p className="font-medium text-xl text-center md:text-left">Gentai</p>
                    <p className="text-foreground/80 text-sm hidden md:block">Baca Komik Paling Ngebut</p>
                </div>
                <div className="">
                    <p className="text-sm">@Copyright 2025 by Gentai</p>
                </div>
                <div className="flex items-center gap-3">
                    <p>Instagram</p>
                    <p>Twitter</p>
                    <p>Thread</p>
                </div>
            </div>
        </footer>
    )
}