import React, { Suspense } from 'react'
import useNearScreen from 'hooks/useNearScreen'

const TrendingSearches = React.lazy(() => import('./TrendingSearches')) //Debe retornar un import dinamico del componente a usar

export default function LazyTrending() {
  const { isNearScreen, fromRef } = useNearScreen({ distance: '200px' })

  return (
    <div ref={fromRef}>
      <Suspense fallback='Cargando'>
        {isNearScreen ? <TrendingSearches /> : null}
      </Suspense>
    </div>
  )
}
