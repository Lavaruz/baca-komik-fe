import Card from "@/components/ui/Card/page"
import {getAllComics} from "./lib/comic"
import { ComicsDataInterface, ComicsInterface } from "./lib/interface";

export default async function Home() {
  const COMICS: ComicsInterface = await getAllComics()
  return (
    <div className="container pb-20 px-[1%] md:px-0">
      {/* <Search></Search> */}
      <div className="">
        {/* <h1 className="text-2xl font-bold mb-4 px-1">Paling Baru</h1> */}
        <div className="grid grid-cols-2 md:grid-cols-6">
          {COMICS.data.map((comic: ComicsDataInterface) => (
            <Card key={comic.id} title={comic.title} src={"https://cdn.assamimuzaki.com/"+comic.coverImage} id={comic.id} chapters={comic.chapters}></Card>
          ))}
          <Card title="MILF Hunting In Another World" isNew={true} src="/img/Cover2.webp"></Card>
          <Card title="Secret Class" isNew={true} src="/img/Cover3.webp"></Card>
          <Card title="Corruption in The Dungeon" isNew={false} src="/img/Cover4.webp"></Card>
          <Card title="The Hole Diary" isNew={false} src="/img/Cover5.webp"></Card>
        </div>
      </div>
    </div>
  );
}
