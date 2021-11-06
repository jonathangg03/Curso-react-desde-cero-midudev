import { useEffect, useState, useRef } from 'react'

function useNearScreen({ distance = '100px', externalRef, once = true } = {}) {
  const [isNearScreen, setShow] = useState(false)
  const fromRef = useRef()
  useEffect(() => {
    let observer

    const element = externalRef ? externalRef.current : fromRef.current

    const onChange = (entries) => {
      const el = entries[0]

      if (el.isIntersecting) {
        setShow(true)
        once && observer.disconnect()
      } else {
        !once && setShow(false)
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

      if (element) observer.observe(element)
    })

    return () => observer && observer.disconnect()
  }, [distance, externalRef])
  return { isNearScreen, fromRef }
}

export default useNearScreen
