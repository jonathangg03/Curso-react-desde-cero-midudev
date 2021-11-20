import { Link, Route } from 'wouter'
import StaticContext from './context/StaticContext'
import { GifsContextProvider } from './context/GifsContext'
import { UserContextProvider } from 'context/UserContext'
import Details from './pages/Details'
import SearchResults from './pages/SearchResult'
import Home from './pages/Home'
import Login from 'pages/Login'
import Header from 'components/Header'

import './App.css'
import Register from 'pages/Register'

function App() {
  return (
    <UserContextProvider>
      <div className='App'>
        <section className='App-content'>
          <Header />
          <Link to='/' className='home'>
            <h1>GIFFY</h1>
          </Link>
          <GifsContextProvider>
            <Route path='/' component={Home} />
            <Route path='/search/:keyword/:rating?' component={SearchResults} />
            <Route path='/gif/:id' component={Details} />
            <Route path='/login' component={Login} />
            <Route path='/register' component={Register} />
            <Route path='/404' component={() => <h1>Error</h1>} />
          </GifsContextProvider>
        </section>
      </div>
    </UserContextProvider>
  )
}

export default App
