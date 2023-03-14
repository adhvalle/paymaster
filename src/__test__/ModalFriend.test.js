import { render, screen, act } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import ModalFriend from '../components/ModalFriend'

test('It should render the component', () => {
  const addFriend = true
  render(<ModalFriend showModal={addFriend} />)

  const app = screen.getByTestId('modal')
  expect(app).toMatchSnapshot()
})

test('It should render the component', async () => {
  const addFriendFn = jest.fn()
  const addFriend = true
  render(<ModalFriend showModal={addFriend} addFriend={addFriendFn} />)

  const input = screen.getByRole('textbox')
  const button = screen.getByRole('button')

  act(() => {
    /* fire events that update state */
    userEvent.type(input, 'new name')
    userEvent.click(button)
  })
  expect(addFriendFn).toHaveBeenCalledWith('new name')
})
