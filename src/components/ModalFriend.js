import { useState } from 'react'

function ModalFriend ({ showModal, closeModal, addFriend }) {
  if (!showModal) return false

  const [name, updateName] = useState('')

  const handleChange = event => {
    const newName = event.target.value
    updateName(newName)
  }

  const handleSubmit = event => {
    event.preventDefault()
    addFriend(name)
  }

  return (
    <div
      className='modal'
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
            <label className='form__label'>Nombre</label>
            <input
              className='form__input'
              type='text'
              value={name}
              onChange={handleChange}
            />
          </div>
          <button>Añadir</button>
        </form>
      </div>
    </div>
  )
}

export default ModalFriend
