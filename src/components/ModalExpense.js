import { useState } from 'react'

function ModalExpense ({ showModal, payments, closeModal, addExpense }) {
  if (!showModal) return false

  const [name, updateName] = useState('')
  const [amount, updateAmount] = useState(0)
  const [description, updateDescription] = useState('')

  const handleDescription = event => {
    const newDescription = event.target.value
    updateDescription(newDescription)
  }

  const handleAmount = event => {
    const newAmount = event.target.value ? parseInt(event.target.value) : event.target.value
    updateAmount(newAmount)
  }

  const handleSelectName = event => {
    const newName = event.target.value
    updateName(newName)
  }

  const handleSubmit = event => {
    event.preventDefault()
    if (!name || !amount || !description) return false
    addExpense({
      name,
      amount,
      description,
      created: Date.now()
    })
  }

  return (
    <div
      className='modal'
      data-testid='modal'
      onClick={closeModal}
    >
      <div
        className='modal__inner'
        onClick={e => { e.stopPropagation() }}
      >
        <form
          className='form'
          onSubmit={handleSubmit}
        >
          <div>
            <label className='form__label'>Amigo</label>
            <select onChange={handleSelectName}>
              <option value=''>-</option>
              {
                payments.map(({ name }) => (
                  <option value={name} key={name}>{name}</option>
                ))
              }
            </select>
          </div>
          <div>
            <label className='form__label'>Gasto</label>
            <input
              className='form__input'
              data-testid='number'
              type='number'
              value={amount}
              onChange={handleAmount}
            />
          </div>
          <div>
            <label className='form__label'>Descripción</label>
            <input
              className='form__input'
              type='text'
              value={description}
              onChange={handleDescription}
            />
          </div>
          <button>Añadir</button>
        </form>
      </div>
    </div>
  )
}

export default ModalExpense
