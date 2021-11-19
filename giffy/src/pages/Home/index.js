import { Link, useLocation } from 'wouter'
import ListOfGifs from '../../components/ListOfGifs'
import TrendingSearches from '../../components/TrendingSearch'
import SearchForm from 'components/SearchForm'
import { useGifs } from '../../hooks/useGifs'
import './Home.css'

export default function Home() {
  const { loading, gifs } = useGifs() //Como no pasamos una keyword, en el home tenemos la ultima busqueda de gifs

  return (
    <div>
      <section className='home__container'>
        <Link to='/' className='home'>
          <h1>GIFFY</h1>
        </Link>
        <SearchForm />
        <h3>Ultima busqueda</h3>
        <ListOfGifs gifs={gifs} />
        <TrendingSearches />
      </section>
    </div>
  )
}
