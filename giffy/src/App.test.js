import { render } from '@testing-library/react'
import App from './App'

test('La app está renderizando', () => {
  const { getByText } = render(<App />)
  const title = getByText(/Ultima busqueda/i)
  expect(title).toBeInTheDocument()
})
