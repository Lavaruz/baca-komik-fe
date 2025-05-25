"use client"

import Card from "@/components/ui/Card/page"
import {getAllComics} from "../lib/comic"
import { ComicsDataInterface, ComicsInterface } from "../lib/interface";
import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import { useRouter } from "next/navigation";
import Pagination from "@/components/layout/Pagination";

export default function Home() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const pageParam = parseInt(searchParams.get("page") || "1", 10);
  const queryParam = searchParams.get("q") || "";
  const limitComics = 10

  const [comics, setComics] = useState<ComicsInterface>({data: [], pagination: {page:1, total:0, totalPages: 1}});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      const response = await getAllComics({ page: pageParam, limit: limitComics, title: queryParam });
      setComics(response);
      setLoading(false);
    };
    fetchData();
  }, [pageParam, queryParam]);

  const handlePageChange = (newPage: number) => {
    router.push(`/?page=${newPage}`);
  };

  return (
    <div className="container pb-20 px-[1%] md:px-0">
      
      <div className="md:h-18 mb-6 flex flex-col md:flex-row gap-2">
        <div className="bg-second w-full h-16 md:h-full flex items-center justify-center text-sm text-foreground/80">
          <p>ads_search_1</p>
        </div>
        <div className="bg-second w-full h-16 md:h-full flex items-center justify-center text-sm text-foreground/80">
          <p>ads_search_2</p>
        </div>
      </div>


      <div className="">
        <div className="">
          <div className="mb-3 px-2">
            <h1 className="text-2xl font-light">Keyword: <span className="text-link">{queryParam}</span></h1>
            {/* <p className="text-foreground/60 text-sm mt-1">Komik Terbaru buat kamu</p> */}
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
            comics.data.length !== 0 ?
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
              </div>
             :
              <div className="flex items-center justify-center h-60">
                <p className="text-sm md:text-base text-foregound/60">Tidak ada komik yang cocok dengan keyword ini</p>
              </div>
          )}

          <div className="md:h-18 my-8 flex flex-col md:flex-row gap-2">
            <div className="bg-second w-full h-16 md:h-full flex items-center justify-center text-sm text-foreground/80">
              <p>ads_search_3</p>
            </div>
            <div className="bg-second w-full h-16 md:h-full flex items-center justify-center text-sm text-foreground/80">
              <p>ads_search_4</p>
            </div>
          </div>

          {/* Pagination */}
          <Pagination
            pageParam={pageParam}
            onPageChange={(newPage) => handlePageChange(newPage)}
            totalPages={comics.pagination.totalPages}
          />
        </div>
      </div>
    </div>
  );
}
