import {
  render,
  waitForElement,
  fireEvent,
  screen
} from '@testing-library/react'
import App from '../App'

test('La home funciona como se espera', async () => {
  const { container } = render(<App />)
  const gifLink = await waitForElement(() =>
    container.querySelector('.Gif-link')
  )
  expect(gifLink).toBeVisible()

  //Deprecated por hacerlo con clases, es solo por el ejemplo
})

test('search from could be used', async () => {
  render(<App />)
  const input = await screen.findByRole('textbox')
  const button = await screen.findByRole('button')

  fireEvent.change(input, { target: { value: 'Matrix' } })
  fireEvent.click(button)

  console.log(button)

  const title = await screen.findByText('Matrix')
  expect(title).toBeVisible()

  //No está funcionando, no encuentra el boton
})
