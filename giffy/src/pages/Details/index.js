import useGlobalGifs from '../../hooks/useGlobalGifs'
import Gif from '../../components/Gif'

export default function Details({ params }) {
  const gifs = useGlobalGifs()
  const gif = gifs.find((singleGif) => singleGif.id === params.id)

  console.log(gif)
  return <Gif {...gif} />
}
