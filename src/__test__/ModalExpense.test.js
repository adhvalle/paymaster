import { render, screen, act } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import ModalExpense from '../components/ModalExpense'

test('It should render the component', () => {
  const addExpense = true
  render(<ModalExpense showModal={addExpense} payments={[{ name: 'test name' }]} />)

  const app = screen.getByTestId('modal')
  expect(app).toMatchSnapshot()
})

test('It should render the component', async () => {
  Date.now = jest.fn(() => 1678812039071)
  const addExpenseFn = jest.fn()
  const addExpense = true
  render(<ModalExpense showModal={addExpense} payments={[{ name: 'test name' }]} addExpense={addExpenseFn} />)

  const option = screen.getByRole('combobox')
  const amount = screen.getByRole('spinbutton')
  const input = screen.getByRole('textbox')
  const button = screen.getByRole('button')

  act(() => {
    /* fire events that update state */
    userEvent.selectOptions(option, 'test name')
    userEvent.type(amount, '2000')
    userEvent.type(input, 'test description')
    userEvent.click(button)
  })
  expect(addExpenseFn).toHaveBeenCalledWith({
    name: 'test name',
    amount: 2000,
    description: 'test description',
    created: Date.now()
  })
})
