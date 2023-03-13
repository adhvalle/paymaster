/**
 * Converts a number to a locale currency
 * @param {Number} number
 * @returns {String}
 */
export const formatCurrency = number => new Intl.NumberFormat('es-ES', { style: 'currency', currency: 'EUR' }).format(number)
