import { useState, useEffect, useContext } from 'react'
import GifsContext from '../context/GifsContext'
import getGifs from '../utils/getGifs'

const INITIAL_PAGE = 0

export function useGifs({ keyword, rating } = { keyword: null }) {
  const [loading, setLoading] = useState(false)
  const [page, setPage] = useState(INITIAL_PAGE)
  const { gifs, setGifs } = useContext(GifsContext)
  const [loadingNextPage, setLoadingNextPage] = useState(false)

  const keywordToUse = keyword || localStorage.getItem('lastKeyword') || 'cats'
  useEffect(() => {
    setLoading(true)

    //Sí no hay keyword al usar este hook, toma la keyword de la ultima busqueda.
    getGifs({ keyword: keywordToUse, rating }).then((gifs) => {
      setGifs(gifs)
      setLoading(false)
      localStorage.setItem('lastKeyword', keyword) //seteamos la ultima busqueda
    })
  }, [keyword, keywordToUse, setGifs, rating])

  useEffect(() => {
    if (page === INITIAL_PAGE) return

    setLoadingNextPage(true)

    getGifs({ keyword: keywordToUse, rating, page }).then((nextGifs) => {
      setGifs((prevGifs) => {
        return prevGifs.concat(nextGifs)
      })
    })
  }, [keywordToUse, page, setGifs, rating])

  return { loading, loadingNextPage, gifs, setPage }
}
