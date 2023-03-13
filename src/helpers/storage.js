export const getSessionStorage = key => JSON.parse(window.sessionStorage.getItem(key))

export const setSessionStorage = (key, value) => window.sessionStorage.setItem(key, JSON.stringify(value))
