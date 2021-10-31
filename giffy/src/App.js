import ListOfGifs from './components/ListOfGifs'
import './App.css'
import { useState } from 'react'

function App() {
  const [keyword, setKeyword] = useState('cat')

  return (
    <div className='App'>
      <section className='App-content'>
        <button onClick={() => setKeyword('panda')}>Cambiar</button>
        <ListOfGifs keyword={keyword} />
      </section>
    </div>
  )
}

export default App
