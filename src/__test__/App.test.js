import { render, screen, fireEvent, waitFor } from '@testing-library/react'
import App from '../App'

beforeEach(() => {
  render(<App />)
})

test('It should render the component', () => {
  const app = screen.getByTestId('app')
  expect(app).toMatchSnapshot()
})

test('It should open ModalFriend', async () => {
  fireEvent.click(screen.getByText('Añadir amigo'))
  await waitFor(() => expect(screen.getByText('Nombre')).toBeInTheDocument())
})

test('It should open ModalExpense', async () => {
  fireEvent.click(screen.getByText('Añadir gasto'))
  await waitFor(() => expect(screen.getByText('Amigo')).toBeInTheDocument())
})
