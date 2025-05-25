"use client"

import Card from "@/components/ui/Card/page"
import {getAllComics, GetRandomComics} from "./lib/comic"
import { ComicsDataInterface, ComicsInterface, ComicsRandomInterface } from "./lib/interface";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import { useRouter } from "next/navigation";
import Pagination from "@/components/layout/Pagination";

export default function Home() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const pageParam = parseInt(searchParams.get("page") || "1", 10);
  const limitComics = 10

  const [comics, setComics] = useState<ComicsInterface>({data: [], pagination: {page:1, total:0, totalPages: 1}});
  const [comicsRand, setComicsRand] = useState<ComicsRandomInterface>({data: [], count:0});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      const response = await getAllComics({ page: pageParam, limit: limitComics });
      const responseRand = await GetRandomComics({ count: 6 });
      setComics(response);
      setComicsRand(responseRand);
      setLoading(false);
    };
    fetchData();
  }, [pageParam]);

  const handlePageChange = (newPage: number) => {
    router.push(`/?page=${newPage}`);
  };

  return (
    <div className="container pb-20 px-[2%] md:px-0">
      
      <div className="md:h-18 mb-6 flex flex-col md:flex-row gap-2">
        <div className="bg-second w-full h-16 md:h-full flex items-center justify-center text-sm text-foreground/80">
          <p>ads_home_1</p>
        </div>
        <div className="bg-second w-full h-16 md:h-full flex items-center justify-center text-sm text-foreground/80">
          <p>ads_home_2</p>
        </div>
      </div>


      <div className="">
        <div className="">
          <div className="mb-3 px-2">
            <h1 className="text-2xl font-light">Paling Baru</h1>
            <p className="mt-1 text-foreground/60 text-sm">Komik Terbaru buat kamu</p>
          </div>

          {/* Lists */}
          {loading ? (
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-1">
              {[...Array(limitComics)].map((_, i) => (
                <div key={i} className="w-full text-center py-10 aspect-[4/5] flex items-center justify-center">
                  <div className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-main border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]"></div>
                </div>
              ))}
            </div>
          ) : (
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-1">
              {comics.data.map((comic: ComicsDataInterface, idx:number) => (
                <Card
                  key={comic.id}
                  title={comic.title}
                  src={"https://cdn.assamimuzaki.com/" + comic.coverImage}
                  id={comic.id}
                  chapters={comic.chapters}
                  isPriority={idx < 2}
                />
              ))}
              {/* <Card title="MILF Hunting In Another World" isNew={true} src="/img/Cover2.webp"></Card>
              <Card title="Secret Class" isNew={true} src="/img/Cover3.webp"></Card>
              <Card title="Corruption in The Dungeon" isNew={false} src="/img/Cover4.webp"></Card>
              <Card title="The Hole Diary" isNew={false} src="/img/Cover5.webp"></Card> */}
            </div>
          )}



          {/* Pagination */}
          <Pagination
            pageParam={pageParam}
            onPageChange={(newPage) => handlePageChange(newPage)}
            totalPages={comics.pagination.totalPages}
          />
        </div>

        <div className="md:h-18 my-8 flex flex-col md:flex-row gap-2">
          <div className="bg-second w-full h-16 md:h-full flex items-center justify-center text-sm text-foreground/80">
            <p>ads_home_3</p>
          </div>
          <div className="bg-second w-full h-16 md:h-full flex items-center justify-center text-sm text-foreground/80">
            <p>ads_home_4</p>
          </div>
        </div>

        <div className="">
          <div className="mb-3 px-2">
            <h2 className="text-2xl font-light">Random</h2>
            <p className="mt-1 text-foreground/60 text-sm">Mungkin kamu beruntung hari ini</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-1">
              {comicsRand.data.map((comic: ComicsDataInterface, idx:number) => (
                <Card
                  key={comic.id}
                  title={comic.title}
                  src={"https://cdn.assamimuzaki.com/" + comic.coverImage}
                  id={comic.id}
                  chapters={comic.chapters}
                  isPriority={idx < 2}
                />
              ))}
          </div>
        </div>
      </div>
    </div>
  );
}
