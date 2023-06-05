import {
  getLastOrder,
  getLastShoppingCart,
  setLastOrder,
  setLastShoppingCart
} from '@/helpers'
import {
  setActiveProduct,
  onAddProductShoppingCart,
  onPlusProductShoppingCart,
  onSetOrder,
  onMinusProductShoppingCart,
  onRemoveProductShoppingCart,
  onSetShoppingCart,
  setActiveOrder
} from '../slices/app.slice'

export const startLoadingSelectedOrder = (orderId) =>
  (dispatch, getState) => {
    const { orders } = getState().session

    const findOrder = orders.find((order) => order.id === orderId)
    if (!findOrder) return

    dispatch(setActiveOrder(findOrder))
  }

export const startLoadingSelectedProduct = (productId) =>
  (dispatch, getState) => {
    const { products } = getState().shop

    const findProduct = products.find((product) => product.id === productId)
    if (!findProduct) return

    dispatch(setActiveProduct(findProduct))
  }

export const startSettingOrder = ({ action, prices }) =>
  (dispatch, getState) => {
    const { order } = getState().app

    let orderTotalItems, orderPrices

    switch (action) {
      case 'add':
        orderTotalItems = order.total_products + 1
        orderPrices = {
          retail: order.total_prices.retail + prices.retail,
          wholesale: order.total_prices.wholesale + prices.wholesale
        }
        break

      case 'reduce':
        orderTotalItems = order.total_products - 1
        orderPrices = {
          retail: order.total_prices.retail - prices.retail,
          wholesale: order.total_prices.wholesale - prices.wholesale
        }
        break

      default:
        orderTotalItems = order.total_products
        orderPrices = {
          retail: order.total_prices.retail,
          wholesale: order.total_prices.wholesale
        }
        break
    }

    const initOrder = {
      total_products: orderTotalItems,
      total_prices: orderPrices
    }

    dispatch(onSetOrder(initOrder))
  }

export const startAddToShoppingCart = (productToUpdate, count = 1) =>
  (dispatch, getState) => {
    const { shoppingCart } = getState().app
    const productIndex = shoppingCart.findIndex((shoppingProduct) => shoppingProduct.product === productToUpdate.product)

    if (productIndex === -1) {
      return dispatch(onAddProductShoppingCart({ ...productToUpdate, count }))
    }

    dispatch(onPlusProductShoppingCart({ index: productIndex, count }))
  }

export const startReduceToShoppingCart = (productToUpdate, count = 1) =>
  (dispatch, getState) => {
    const { shoppingCart } = getState().app
    const productIndex = shoppingCart.findIndex((prod) => prod.product === productToUpdate.product)

    if (shoppingCart[productIndex].count <= count) {
      return dispatch(onRemoveProductShoppingCart(productIndex))
    }

    dispatch(onMinusProductShoppingCart({ index: productIndex, count }))
  }

export const startRemoveToShoppingCart = (productId) =>
  (dispatch, getState) => {
    const { order, shoppingCart } = getState().app
    const productIndex = shoppingCart.findIndex((shoppingProduct) => shoppingProduct.product === productId)
    const { prices, count } = shoppingCart[productIndex]

    const initOrder = {
      total_products: order.total_products - count,
      total_prices: {
        retail: order.total_prices.retail - prices.retail * count,
        wholesale: order.total_prices.wholesale - prices.wholesale * count
      }
    }

    dispatch(onSetOrder(initOrder))
    dispatch(onRemoveProductShoppingCart(productIndex))
  }

export const startSetShoppingCart = () =>
  (dispatch, getState) => {
    const { order, shoppingCart } = getState().app

    setLastOrder(order)
    setLastShoppingCart(shoppingCart)
  }

export const startGetShoppingCart = () =>
  (dispatch) => {
    getLastOrder && dispatch(onSetOrder(getLastOrder))
    getLastShoppingCart && dispatch(onSetShoppingCart(getLastShoppingCart))
  }
