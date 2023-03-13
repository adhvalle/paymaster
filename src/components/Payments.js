import './Payments.css'

import { formatCurrency } from '../helpers/currencies'
import { humanizeDateDiff } from '../helpers/dates'
import { orderPayments } from '../utils/payments'

function PaymentItem ({ name, amount, description, created }) {
  return (
    <div className='payments__item'>
      <div className='payments__info'>
        <p>{name}</p>
        <p className='payments__item--rtl'>{formatCurrency(amount)}</p>
      </div>
      <div className='payments__data'>
        <p>{description}</p>
        <p className='payments__item--rtl'>{humanizeDateDiff(created)}</p>
      </div>
    </div>
  )
}

function Payments ({ payments }) {
  const orderedPayments = orderPayments(payments)

  return (
    <div className='payments'>
      {
        orderedPayments.map(payment => (
          <PaymentItem key={payment.id} {...payment} />
        ))
      }
    </div>
  )
}

export default Payments
