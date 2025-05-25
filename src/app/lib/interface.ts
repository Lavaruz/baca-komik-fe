export interface ComicsInterface {
    data: ComicsDataInterface[]
    pagination: ComicsPaginationInterface
}

export interface ComicsRandomInterface {
    data: ComicsDataInterface[]
    count: number
}

export interface ChaptersInterface {
    data: ChapterInterface[]
    pagination: ComicsPaginationInterface
}
  
export interface ComicsDataInterface {
    id: string
    title: string
    slug: string
    synopsis: string
    author: string
    status: string
    coverImage: string
    createdAt: string
    updatedAt: string
    chapters: ChapterInterface[]
    genres: GenreInterface[]
    authors: AuthorInterface[]
    message?: string
}
  
export interface ComicsPaginationInterface {
    total: number
    page: number
    totalPages: number
}

export interface ChapterInterface {
  pages: string[]
  id: string
  comicId: string
  title: string
  slug: string
  chapterNumber: number
  releaseDate: string
  createdAt: string
  updatedAt: string
}

export interface GenreInterface {
  id: string
  name: string
  description: any
  image: any
  createdAt: string
  updatedAt: string
  ComicGenres: ComicGenres
  comicCount?:number
}

export interface ComicGenres {
  createdAt: string
  updatedAt: string
  ComicId: string
  GenreId: string
}

export interface AuthorInterface {
  id: string
  name: string
  slug: string
  bio: any
  avatar: any
  createdAt: string
  updatedAt: string
  ComicAuthors: ComicAuthors
  comicCount?:number
}

export interface ComicAuthors {
  createdAt: string
  updatedAt: string
  ComicId: string
  AuthorId: string
}