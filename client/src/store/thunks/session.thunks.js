import { shopApi } from '@/api'
import {
  getSessionToken,
  removeLastOrder,
  removeLastShoppingCart,
  removeSessionToken,
  setSessionToken
} from '@/helpers'
import {
  onLoadOrders,
  onChecking,
  onLogin,
  onLogout,
  onSaveStarts,
  onSaveEnds,
  onAddToOrders,
  clearOrder,
  clearShoppingCart,
  onReduceProductStock
  // clearErrorMessage
} from '@/store'

export const startVerifyingSession = () =>
  async (dispatch) => {
    dispatch(onChecking())

    if (!getSessionToken) {
      return dispatch(startLogout())
    }

    try {
      const { data } = await shopApi.get('/users/jwt')
      setSessionToken(data.token)
      dispatch(onLogin(data.user))
      dispatch(startLoadingOrders())
    } catch ({ response }) {
      dispatch(startLogout(response.data.message))
    }
  }

export const startSignin = (newUser) =>
  async (dispatch) => {
    try {
      const { data } = await shopApi.post('/users/new', newUser)
      dispatch(startLogin(data.user))
      return data.ok
    } catch ({ response }) {
      dispatch(startLogout(response.data.message))
      return response.data.ok
    }
  }

export const startLogin = (user) =>
  async (dispatch) => {
    dispatch(onChecking())

    try {
      const { data } = await shopApi.post('/users/', user)
      setSessionToken(data.token)
      dispatch(onLogin(data.user))
      dispatch(startLoadingOrders())
      return data.ok
    } catch ({ response }) {
      dispatch(startLogout(response.data.message))
      return response.data.ok
    }
  }

export const startLogout = (message) =>
  (dispatch) => {
    removeSessionToken()
    dispatch(onLogout(message))

    // if (message) {
    //   setTimeout(() => dispatch(clearErrorMessage()), 10)
    // }
  }

export const startLoadingOrders = () =>
  async (dispatch, getState) => {
    const { user, status } = getState().session

    if (status !== 'auth') return

    try {
      const filter = { field: 'user', value: user.id }
      const { data } = await shopApi.get('/orders', { headers: filter })
      dispatch(onLoadOrders(data.orders))
    } catch (error) {
      console.error('Something fails at load Orders')
    }
  }

export const startSavingOrder = () =>
  async (dispatch, getState) => {
    const { user } = getState().session
    const { products } = getState().shop
    const { order, shoppingCart } = getState().app

    dispatch(onSaveStarts())

    const finalOrder = {
      user: user.id,
      total_price: (order.total_products >= 6) ? order.total_prices.wholesale : order.total_prices.retail,
      discount: (order.total_products >= 6),
      list: shoppingCart,
      date: new Date()
    }

    try {
      const { data } = await shopApi.post('/orders', finalOrder)

      if (data.message) throw new Error(data.message)

      data.order.list.forEach((orderListProduct) => {
        const productIndex = products.findIndex((product) => product.id === orderListProduct.product)
        dispatch(onReduceProductStock({ index: productIndex, count: orderListProduct.count }))
      })

      dispatch(onAddToOrders(data.order))
      dispatch(clearOrder())
      dispatch(clearShoppingCart())

      removeLastOrder()
      removeLastShoppingCart()
    } catch (error) {
      console.error('Something fails at Saving Order')
    }

    dispatch(onSaveEnds())
  }
