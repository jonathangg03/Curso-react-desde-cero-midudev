import { useEffect, useRef, useCallback } from 'react'
import debounce from 'just-debounce-it'
import ListOfGifs from 'components/ListOfGifs'
import { useGifs } from 'hooks/useGifs'
import useNearScreen from 'hooks/useNearScreen'
import SearchForm from 'components/SearchForm'
import { Helmet } from 'react-helmet'

export default function SearchResults({ params }) {
  const { keyword, rating = 'g' } = params
  const { loading, gifs, setPage } = useGifs({ keyword, rating })
  const externalRef = useRef() //Creamos externalRef porque useNearScreen al inicio no tiene un elemento del DOM como ref, entonces con el realizamos la validación.
  const { isNearScreen } = useNearScreen({
    externalRef: loading ? null : externalRef,
    once: false
  })

  const title = gifs ? `${gifs.length} resultados de ${keyword}` : ''
  //const debounceHandleNextPage = useRef() //La función la guardamos en una referencia, para que cuando este componente se vuelva a renderizar, no vuelva a crear la función. Esto lo arreglamos con useCallback
  console.log(isNearScreen)

  // const handleNextPage = () => setPage((prevPage) => prevPage + 1)
  // const handleNextPage = () => console.log('next page')

  const debounceHandleNextPage = useCallback(
    debounce(() => setPage((prevPage) => prevPage + 1), 200),
    []
  )

  useEffect(() => {
    if (isNearScreen) debounceHandleNextPage()
  }, [debounceHandleNextPage, isNearScreen])

  return (
    <>
      <Helmet>
        <title>{title}</title>
        <description></description>
      </Helmet>
      {loading ? (
        <h2>Loading...</h2>
      ) : (
        <>
          <h3>{decodeURI(keyword)}</h3>
          <SearchForm initialKeyword={keyword} initialRating={rating} />
          <ListOfGifs gifs={gifs} />
          <div id='visor' ref={externalRef}></div>
        </>
      )}
    </>
  )
}
