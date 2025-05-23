export default function Search(){
    return (
        <form className="flex items-center divide-x divide-gray-200 bg-white rounded-md border border-gray-200 overflow-hidden mb-6">
            <input className="w-full focus:outline-none py-2.5 px-4 text-black/70" placeholder="Cari Judul/Genre/Series/Character/Author/Group..." type="text" name="" id="" />
            <button type="button" className="cursor-pointer text-main p-4 py-2.5"><i className="uil uil-search font-medium"></i></button>
        </form>
    )
}