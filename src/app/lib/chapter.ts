const ROOT_URL = "http://localhost:8091"
// const ROOT_URL = "https://1s3qndx9-8091.asse.devtunnels.ms"

export const GetChapterById = async (id: string) => {
    const data = await fetch(`${ROOT_URL}/api/v1/chapters/${id}`, {
        cache: "force-cache"
    })
    if (!data.ok) return { message: 'Failed to get comics' }
    const comics = data.json()
    return comics
}