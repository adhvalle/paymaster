/**
 * get payments list by user
 * @param {Array} payments
 * @returns {Array}
 */
export const getPaymentsList = payments => {
  return payments.map((user, index) => {
    return user.payments.map(({ amount, created, description }, subindex) => ({
      id: `${index}-${subindex}`,
      name: user.name,
      amount,
      created,
      description
    }))
  }).flat()
}

/**
 * Get total result of all payments
 * @param {Array} payments
 * @returns {Array}
 */
export const getTotalBalance = payments => {
  return payments.reduce((total, user) => {
    const userBalance = user.payments.reduce((total, { amount }) => total + amount, 0)
    return total + userBalance
  }, 0)
}

/**
 * Sum up payments by user
 * @param {Array} payments
 * @returns {Array}
 */
export const getPaymentsByUser = payments => {
  return payments.map(({ name, payments }) => ({
    name,
    total: payments.reduce((total, { amount }) => total + amount, 0)
  }))
}

/**
 * sort payments by creation date
 * @param {Array} payments
 * @returns {Array}
 */
export const orderPayments = payments => {
  const paymetsList = getPaymentsList(payments)
  return paymetsList.sort((a, b) => new Date(b.created) - new Date(a.created))
}
