import Link from "next/link"

export default function Page() {
    return (
        <>
            <h1 className="">Hello, Blog Post Page Non Slug!</h1>
            <Link className="text-blue-400" href={'/manga/nama'} rel='noopener'>Buka Halaman Dengan Slug</Link>
        </>
    )
}