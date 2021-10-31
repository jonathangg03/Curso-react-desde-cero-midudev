import { useEffect, useState } from 'react'
import getGifs from '../utils/getGifs'
import Gif from './Gif'

export default function ListOfGifs({ params }) {
  const [loading, setLoading] = useState(false)
  const { keyword } = params
  const [gifs, setGifs] = useState([])

  useEffect(() => {
    setLoading(true)
    getGifs({ keyword }).then((gifs) => {
      setGifs(gifs)
      setLoading(false)
    })
  }, [keyword])

  if (loading) return <div>Loading...</div>

  return (
    <div>
      {gifs.map(({ id, title, url }) => (
        <Gif title={title} url={url} id={id} key={id} />
      ))}
    </div>
  )
}
