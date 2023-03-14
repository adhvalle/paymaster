/**
 * Returns the number of minutes between two dates
 * @param {Date} dateTo
 * @param {Date} dateFrom
 * @returns {Number}
 */
const minutesDiff = (dateTo = new Date(), dateFrom = new Date()) => (dateTo.getTime() - dateFrom.getTime()) / 60000

/**
 * Returns the number of hours between two dates
 * @param {Date} dateTo
 * @param {Date} dateFrom
 * @returns {Number}
 */
const hoursDiff = (dateTo = new Date(), dateFrom = new Date()) => ((dateTo.getTime() - dateFrom.getTime()) / 60000) / 60

/**
 * Returns the number of days between two dates
 * @param {Date} dateTo
 * @param {Date} dateFrom
 * @returns {Number}
 */
const dayDiff = (dateTo = new Date(), dateFrom = new Date()) => (dateTo.getTime() - dateFrom.getTime()) / (1000 * 3600 * 24)

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
  if (days.toFixed() > '0') return `hace ${days.toFixed()} días`

  const hours = hoursDiff(endDate, startDate)
  return hours.toFixed() >= '1' ? `hace ${hours.toFixed()} horas` : `hace ${minutesDiff(endDate, startDate).toFixed()} min`
}
