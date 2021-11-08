import { useState } from 'react'

export default function SearchForm({ onSubmit }) {
  const [keyword, setKeyword] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    onSubmit({ keyword })
  }

  const handleChange = (e) => {
    setKeyword(e.target.value)
  }
  return (
    <form onSubmit={handleSubmit}>
      <input type='text' value={keyword} onChange={handleChange} />
    </form>
  )
}
