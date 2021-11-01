import { useEffect, useState, useRef } from 'react'
import getTrendingTerms from '../../utils/getTrendingTermsService'
import Category from '../Category'

function TrendingSearches() {
  const [trends, setTrends] = useState([])

  useEffect(() => {
    getTrendingTerms().then(setTrends)
  }, [])
  return <Category name='Tendencias' options={trends} />
}

export default function LazyTrending() {
  const [show, setShow] = useState(false)
  const elementRef = useRef()

  useEffect(() => {
    const onChange = (entries) => {
      const el = entries[0]

      if (el.isIntersecting) {
        setShow(true)
        observer.disconnect()
      }
    }

    const observer = new IntersectionObserver(onChange, {
      rootMargin: '100px' //Cuando haya una distancia de 100px
    })

    observer.observe(elementRef.current)

    return () => observer.disconnect()
  }, [])

  return <div ref={elementRef}>{show ? <TrendingSearches /> : null}</div>
}
