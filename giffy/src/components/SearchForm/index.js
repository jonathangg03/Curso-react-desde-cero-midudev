import React, { useReducer } from 'react'
import { useLocation } from 'wouter'

const RATINGS = ['g', 'pg', 'pg-13', 'r']

const ACTIONS = {
  UPDATE_KEYWORD: 'update_keyword',
  UPDATE_RATING: 'update_rating'
}

const reducer = (state, action) => {
  switch (action.type) {
    case ACTIONS.UPDATE_KEYWORD:
      return {
        ...state,
        keyword: action.payload,
        times: state.times + 1
      }
    case ACTIONS.UPDATE_RATING:
      return {
        ...state,
        rating: action.payload
      }
    default:
      return state
  }
}

function SearchForm({ initialKeyword = '', initialRating = '' }) {
  const [path, pushLocation] = useLocation()

  const [state, dispatch] = useReducer(reducer, {
    keyword: decodeURIComponent(initialKeyword),
    rating: initialRating,
    times: 0
  })

  const { keyword, times, rating } = state

  const handleSubmit = (e) => {
    e.preventDefault()
    pushLocation(`/search/${keyword}/${rating}`)
  }

  const handleChange = (e) => {
    dispatch({ type: ACTIONS.UPDATE_KEYWORD, payload: e.target.value })
  }

  const handleChangeRating = (e) => {
    dispatch({ type: ACTIONS.UPDATE_RATING, payload: e.target.value })
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
