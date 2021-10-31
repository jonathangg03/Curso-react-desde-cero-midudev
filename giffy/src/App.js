import ListOfGifs from './components/ListOfGifs'
import './App.css'
import { Link, Route } from 'wouter'

function App() {
  return (
    <div className='App'>
      <section className='App-content'>
        <h1>App</h1>
        <Link to='/gif/pandas'>Gifs de Pandas</Link>
        <Link to='/gif/cat'>Gifs de Gatos</Link>
        <Link to='/gif/koala'>Gifs de Koalas</Link>
        <Route path='/gif/:keyword' component={ListOfGifs} />
      </section>
    </div>
  )
}

export default App
