import { ComicsInterface, ComicsRandomInterface, GenreInterface } from "./interface"

const ROOT_URL = "http://localhost:8091"
// const ROOT_URL = "https://1s3qndx9-8091.asse.devtunnels.ms"

interface GetAllComicsConfig {
  limit?: number;
  page?: number;
  title?: string;
  author?: string;
  genre?: string;
}

export async function getAllComics(config: GetAllComicsConfig): Promise<ComicsInterface> {
  const queryParams = new URLSearchParams();

  if (config.limit) queryParams.append("limit", config.limit.toString());
  if (config.page) queryParams.append("page", config.page.toString());
  if (config.title) queryParams.append("title", config.title);
  if (config.author) queryParams.append("author", config.author);
  if (config.genre) queryParams.append("genre", config.genre);

  const url = `${ROOT_URL}/api/v1/comics?${queryParams.toString()}`;

  try {
    const response = await fetch(url, { cache: "no-store" }); // no-store untuk SSR / fresh fetch
    if (!response.ok) {
      console.error("Failed to fetch comics:", response.statusText);
      throw new Error("Failed to fetch comics");
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error in getAllComics:", error);
    return {
      data: [],
      pagination: {
        page: 0,
        total: 0,
        totalPages: 0
      }
    };
  }
}

export async function GetRandomComics(config:any):Promise<ComicsRandomInterface> {
    const options = {
        count: config.count ?? 10,
    }
    const data = await fetch(`${ROOT_URL}/api/v1/comics/random?count=${options.count}`)
    if (!data.ok) return {
        data: [],
        count: 0
    }
    const comics = await data.json()
    return comics
}

export const getComicById = async (id: string) => {
    const data = await fetch(`${ROOT_URL}/api/v1/comics/${id}`, {
        cache: "force-cache"
    })
    if (!data.ok) return { message: 'Failed to get comics' }
    const comics = data.json()
    return comics
}

export const GetComicChapterById = async (id: string) => {
    const data = await fetch(`${ROOT_URL}/api/v1/comics/${id}/chapters`)
    if (!data.ok) return { message: 'Failed to get comics' }
    const comics = data.json()
    return comics
}

export async function getAllGenres(): Promise<any> {
  const url = `${ROOT_URL}/api/v1/comics/genres`;

  try {
    const response = await fetch(url, { cache: "force-cache" }); // no-store untuk SSR / fresh fetch
    if (!response.ok) {
      console.error("Failed to fetch comics:", response.statusText);
      throw new Error("Failed to fetch comics");
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error in getAllComics:", error);
    return {
      data: [],
    };
  }
}

export async function getAllAuthors(): Promise<any> {
  const url = `${ROOT_URL}/api/v1/comics/authors`;

  try {
    const response = await fetch(url, { cache: "force-cache" }); // no-store untuk SSR / fresh fetch
    if (!response.ok) {
      console.error("Failed to fetch comics:", response.statusText);
      throw new Error("Failed to fetch comics");
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error in getAllComics:", error);
    return {
      data: [],
    };
  }
}