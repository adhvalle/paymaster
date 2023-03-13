import { useState } from 'react'
import './App.css'
import payments from './mock.json'
import Payments from './components/Payments'
import Balance from './components/Balance'
import ModalFriend from './components/ModalFriend'
import ModalExpense from './components/ModalExpense'

function App () {
  const [addFriend, setAddFriend] = useState(false)
  const [addExpense, setAddExpense] = useState(false)
  const [paymentsList, setPaymentsList] = useState(payments.results)

  const handleAddFriend = newName => {
    const newList = [...paymentsList]
    newList.push({ name: newName, payments: [] })
    setPaymentsList(newList)
    setAddFriend(false)
  }

  const handleAddExpense = newExpense => {
    const newList = [...paymentsList]
    const selectedFriend = paymentsList.findIndex(({ name }) => name === newExpense.name)
    newList[selectedFriend].payments.push({
      amount: newExpense.amount,
      created: newExpense.created,
      description: newExpense.description
    })
    setPaymentsList(newList)
    setAddExpense(false)
  }

  return (
    <div className='app'>
      <header className='app__header'>
        <h1 className='app__title'>PAGADOR</h1>
      </header>
      <div className='app__wrapper'>
        <div className='app__inner'>
          <div>
            <div className='app__inner-header'>
              <h2 className='app__subtitle'>Balance</h2>
              <button onClick={() => setAddFriend(true)}>Añadir amigo</button>
            </div>
            <Balance payments={paymentsList} />
          </div>
          <div>
            <div className='app__inner-header'>
              <h2 className='app__subtitle'>Gastos</h2>
              <button onClick={() => setAddExpense(true)}>Añadir gasto</button>
            </div>
            <Payments payments={paymentsList} />
          </div>
        </div>
      </div>

      <ModalFriend
        showModal={addFriend}
        closeModal={() => setAddFriend(false)}
        addFriend={handleAddFriend}
      />

      <ModalExpense
        showModal={addExpense}
        payments={paymentsList}
        closeModal={() => setAddExpense(false)}
        addExpense={handleAddExpense}
      />
    </div>
  )
}

export default App
