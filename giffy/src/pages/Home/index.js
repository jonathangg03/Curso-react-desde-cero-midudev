import { useState } from 'react'
import { Link, useLocation } from 'wouter'
import ListOfGifs from '../../components/ListOfGifs'
import { useGifs } from '../../hooks/useGifs'
import './Home.css'

const POPULAR_GIFS = ['matrix', 'Venezuela', 'Chile', 'Morty']

export default function Home() {
  const [keyword, setKeyword] = useState('')
  const [path, pushLocation] = useLocation()

  const { loading, gifs } = useGifs() //Como no pasamos una keyword, en el home tenemos la ultima busqueda de gifs

  const handleSubmit = (e) => {
    e.preventDefault()
    pushLocation(`/search/${keyword}`)
  }

  const handleChange = (e) => {
    setKeyword(e.target.value)
  }

  return (
    <div>
      <section className='home__container'>
        <Link to='/' className='home'>
          <h1>GIFFY</h1>
        </Link>
        <form onSubmit={handleSubmit}>
          <input type='text' value={keyword} onChange={handleChange} />
        </form>
        <h3>Ultima busqueda</h3>
        <ListOfGifs gifs={gifs} />
        {POPULAR_GIFS.map((gif) => (
          <Link to={`/search/${gif}`}>Gifs de {gif}</Link>
        ))}
      </section>
    </div>
  )
}
