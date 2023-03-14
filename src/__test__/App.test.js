import { render, screen } from '@testing-library/react'
import App from '../App'

test('It should has title content', () => {
  render(<App />)

  const title = screen.getByText(/PAGADOR/i)
  expect(title).toBeInTheDocument()
})
