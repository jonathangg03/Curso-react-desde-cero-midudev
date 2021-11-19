import React from 'react'
import { useLocation } from 'wouter'
import useForm from './hook'

const RATINGS = ['g', 'pg', 'pg-13', 'r']

function SearchForm({ initialKeyword = '', initialRating = '' }) {
  const [path, pushLocation] = useLocation()

  const { keyword, rating, times, updateKeyword, updateRating } = useForm({
    initialKeyword,
    initialRating
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    pushLocation(`/search/${keyword}/${rating}`)
  }

  const handleChange = (e) => {
    updateKeyword(e.target.value)
  }

  const handleChangeRating = (e) => {
    updateRating(e.target.value)
  }

  return (
    <form onSubmit={handleSubmit}>
      <input type='text' value={keyword} onChange={handleChange} />
      <select value={rating} onChange={handleChangeRating}>
        <option disabled>Rating type</option>
        {RATINGS.map((rating) => (
          <option key={rating}>{rating}</option>
        ))}
      </select>
      <small>{times}</small>
    </form>
  )
}

export default React.memo(SearchForm)
