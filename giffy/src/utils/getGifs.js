import { API_KEY } from './settings'

export default function getGifs({
  limit = 5,
  keyword = 'morty',
  page = 0
} = {}) {
  const API_URL = `https://api.giphy.com/v1/gifs/search?api_key=${API_KEY}&q=${keyword}&limit=${limit}&offset=${
    page * limit
  }&rating=g&lang=en`
  return fetch(API_URL)
    .then((res) => res.json())
    .then((response) => {
      const { data } = response
      const gifs = data.map((image) => {
        const { images, title, id } = image
        const { url } = images.downsized_medium
        return { title, id, url }
      })
      return gifs
    })
}
