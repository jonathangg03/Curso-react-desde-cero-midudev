import { useState, useEffect, useContext } from 'react'
import GifsContext from '../context/GifsContext'
import getGifs from '../utils/getGifs'

export function useGifs({ keyword } = { keyword: null }) {
  const [loading, setLoading] = useState(false)
  const { gifs, setGifs } = useContext(GifsContext)

  useEffect(() => {
    setLoading(true)

    const keywordToUse =
      keyword || localStorage.getItem('lastKeyword') || 'random'
    //Sí no hay keyword al usar este hook, toma la keyword de la ultima busqueda.
    getGifs({ keyword: keywordToUse }).then((gifs) => {
      setGifs(gifs)
      setLoading(false)
      localStorage.setItem('lastKeyword', keyword) //seteamos la ultima busqueda
    })
  }, [keyword, setGifs])

  return { loading, gifs }
}
