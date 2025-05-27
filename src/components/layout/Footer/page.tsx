import Link from "next/link"

export default function Page(){
    return (
        <footer className="border-t py-8 border-gray-800 bg-[#18181B]">
            <div className="container flex gap-3 flex-col lg:flex-row items-center justify-center md:justify-between">
                <div className="">
                    <p className="font-medium text-xl text-center md:text-left">Gentai</p>
                    <p className="text-foreground/60 text-sm hidden md:block">Tempat baca paling nyaman</p>
                </div>
                <div className="text-center">
                    <p className="text-sm text-foreground/80">@Copyright 2025 Gentai All rights Reserved</p>
                </div>
                <div className="flex flex-end items-center gap-6 text-sm text-foreground/60">
                    <Link href={"/terms-of-service"}>Terms of Service</Link>
                    <Link href={"/privacy-policy"}>Privacy Policy</Link>
                </div>
            </div>
        </footer>
    )
}