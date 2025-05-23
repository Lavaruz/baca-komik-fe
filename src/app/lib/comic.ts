import { cache } from "react"
import { ComicsInterface } from "./interface"

const ROOT_URL = "http://localhost:8091"

export async function getAllComics():Promise<ComicsInterface> {
    const data = await fetch(`${ROOT_URL}/api/v1/comics`)
    if (!data.ok) return {
        data: [],
        pagination: {
            page: 0,
            total: 0,
            totalPages: 0
        }
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