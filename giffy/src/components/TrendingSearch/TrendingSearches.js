import { useEffect, useState } from 'react'
import getTrendingTerms from '../../utils/getTrendingTermsService'
import Category from '../Category'

export default function TrendingSearches() {
  const [trends, setTrends] = useState([])

  useEffect(() => {
    getTrendingTerms().then(setTrends)
  }, [])
  return <Category name='Tendencias' options={trends} />
}
