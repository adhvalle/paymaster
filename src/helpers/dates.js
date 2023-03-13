/**
 * Returns the number of days between two dates
 * @param {Date} dateTo
 * @param {Date} dateFrom
 * @returns {Number}
 */
export const dayDiff = (dateTo = new Date(), dateFrom = new Date()) =>
  (dateTo.getTime() - dateFrom.getTime()) / (1000 * 3600 * 24)

/**
 * Humanize dates difference
 * @param {String} dateFrom
 * @param {String} dateTo
 * @returns {Object}
 */
export const humanizeDateDiff = (dateFrom = '') => {
  const startDate = dateFrom ? new Date(dateFrom) : new Date()
  const endDate = new Date()
  const days = dayDiff(endDate, startDate)
  return `hace ${days.toFixed()} días`
}
