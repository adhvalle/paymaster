import './Balance.css'

import { getTotalBalance, getPaymentsByUser } from '../utils/payments'

function BalanceItem ({ name, total, totalExpenses }) {
  const totalExpended = (total - totalExpenses).toFixed(2)
  const resultClassName = totalExpended < 0
    ? 'balance__amount balance__amount--negative'
    : 'balance__amount'

  return (
    <div className='balance__item'>
      <span>{name}</span>
      <span className={resultClassName}>{totalExpended}</span>
    </div>
  )
}

function Balance ({ payments }) {
  const totalBalance = getTotalBalance(payments)
  const paymentsByUser = getPaymentsByUser(payments)
  const expensesByUser = totalBalance / payments.length

  return (
    <div className='balance'>
      {
        paymentsByUser.map(payment => (
          <BalanceItem
            key={payment.name}
            name={payment.name}
            total={payment.total}
            totalExpenses={expensesByUser}
          />
        ))
      }
    </div>
  )
}

export default Balance
