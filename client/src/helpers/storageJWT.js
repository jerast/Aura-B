export const setSessionToken = (token) =>
  localStorage.setItem('sessionToken', token)

export const getSessionToken =
  localStorage.getItem('sessionToken')

export const removeSessionToken = () =>
  localStorage.removeItem('sessionToken')
