import ListOfGifs from 'components/ListOfGifs'
import { useGifs } from 'hooks/useGifs'

export default function SearchResults({ params }) {
  const { keyword } = params
  const { loading, gifs } = useGifs({ keyword })

  return (
    <>
      {loading ? (
        <h2>Loading...</h2>
      ) : (
        <>
          <h3>{decodeURI(keyword)}</h3>
          <ListOfGifs gifs={gifs} />
        </>
      )}
    </>
  )
}
