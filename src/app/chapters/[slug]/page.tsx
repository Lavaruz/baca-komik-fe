import ChapterClient from "../../../components/layout/ChapterClient"
import { GetChapterById } from "@/app/lib/chapter"
import { getComicById } from "@/app/lib/comic"

type Props = {
  params: { slug: string }
}

export default async function ChapterPage({ params }: Props) {
  const SLUG = (await params).slug
  const CHAPTER = await GetChapterById(SLUG)
  const COMIC = await getComicById(CHAPTER.comicId)

  return <ChapterClient CHAPTER={CHAPTER} COMIC={COMIC} />
}
