import SearchResults from './pages/SearchResult'
import Home from './pages/Home'
import Details from './pages/Details'
import './App.css'
import { Route } from 'wouter'
import StaticContext from './context/StaticContext'
import { GifsContextProvider } from './context/GifsContext'

function App() {
  return (
    <StaticContext.Provider
      value={{
        name: 'midudev',
        suscrito: true
      }}
    >
      <div className='App'>
        <section className='App-content'>
          <GifsContextProvider>
            <Route path='/' component={Home} />
            <Route path='/search/:keyword/:rating?' component={SearchResults} />
            <Route path='/gif/:id' component={Details} />
            <Route path='/404' component={() => <h1>Error</h1>} />
          </GifsContextProvider>
        </section>
      </div>
    </StaticContext.Provider>
  )
}

export default App
