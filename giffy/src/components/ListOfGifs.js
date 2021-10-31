import { useEffect, useState } from 'react'
import getGifs from '../utils/getGifs'
import Gif from './Gif'

export default function ListOfGifs({ keyword }) {
  const [gifs, setGifs] = useState([])

  useEffect(() => {
    getGifs({ keyword }).then((gifs) => setGifs(gifs))
  }, [keyword])

  return (
    <div>
      {gifs.map(({ id, title, url }) => (
        <Gif title={title} url={url} id={id} key={id} />
      ))}
    </div>
  )
}
