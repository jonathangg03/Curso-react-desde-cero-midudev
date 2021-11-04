import { useEffect, useState, useRef } from 'react'

function useNearScreen({ distance = '100px' } = {}) {
  const [show, setShow] = useState(false)
  const fromRef = useRef()
  useEffect(() => {
    let observer

    const onChange = (entries) => {
      const el = entries[0]

      if (el.isIntersecting) {
        setShow(true)
        observer.disconnect()
      }
    }

    Promise.resolve(
      typeof IntersectionObserver !== 'undefined'
        ? IntersectionObserver
        : import('intersection-observer')
    ).then(() => {
      observer = new IntersectionObserver(onChange, {
        rootMargin: distance //Cuando haya una distancia de 100px
      })

      observer.observe(fromRef.current)
    })

    return () => observer && observer.disconnect()
  }, [distance])
  return { show, fromRef }
}

export default useNearScreen
