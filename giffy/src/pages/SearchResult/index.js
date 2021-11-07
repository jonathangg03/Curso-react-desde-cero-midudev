import { useEffect, useRef, useCallback } from 'react'
import debounce from 'just-debounce-it'
import ListOfGifs from 'components/ListOfGifs'
import { useGifs } from 'hooks/useGifs'
import useNearScreen from 'hooks/useNearScreen'

export default function SearchResults({ params }) {
  const { keyword } = params
  const { loading, gifs, setPage } = useGifs({ keyword })
  const externalRef = useRef() //Creamos externalRef porque useNearScreen al inicio no tiene un elemento del DOM como ref, entonces con el realizamos la validación.
  const { isNearScreen } = useNearScreen({
    externalRef: loading ? null : externalRef,
    once: false
  })

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
      {loading ? (
        <h2>Loading...</h2>
      ) : (
        <>
          <h3>{decodeURI(keyword)}</h3>
          <ListOfGifs gifs={gifs} />
          <div id='visor' ref={externalRef}></div>
        </>
      )}
    </>
  )
}
