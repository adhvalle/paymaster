import { useState } from 'react'
import './App.css'
import payments from './mock.json'
import { getSessionStorage, setSessionStorage } from './helpers/storage'
import Payments from './components/Payments'
import Balance from './components/Balance'
import ModalFriend from './components/ModalFriend'
import ModalExpense from './components/ModalExpense'

const PAYMENTS_KEY = 'payments'

function App () {
  const [addFriend, setAddFriend] = useState(false)
  const [addExpense, setAddExpense] = useState(false)
  const [paymentsList, setPaymentsList] = useState(() => {
    const storagedPayments = getSessionStorage(PAYMENTS_KEY)
    if (storagedPayments) return JSON.parse(storagedPayments)
    return payments.results
  })

  const _setNewData = data => {
    setPaymentsList(data)
    setSessionStorage(PAYMENTS_KEY, JSON.stringify(data))
  }

  const handleAddFriend = newName => {
    const newList = [...paymentsList]
    newList.push({ name: newName, payments: [] })
    _setNewData(newList)
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
    _setNewData(newList)
    setAddExpense(false)
  }

  return (
    <main
      className='app'
      data-testid='app'
    >
      <header className='app__header'>
        <h1 className='app__title'>PAGADOR</h1>
      </header>
      <section className='app__wrapper'>
        <div className='app__inner'>
          <section>
            <div className='app__inner-header'>
              <h2 className='app__subtitle'>Balance</h2>
              <button onClick={() => setAddFriend(true)}>Añadir amigo</button>
            </div>
            <Balance payments={paymentsList} />
          </section>
          <section>
            <div className='app__inner-header'>
              <h2 className='app__subtitle'>Gastos</h2>
              <button onClick={() => setAddExpense(true)}>Añadir gasto</button>
            </div>
            <Payments payments={paymentsList} />
          </section>
        </div>
      </section>

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
    </main>
  )
}

export default App
