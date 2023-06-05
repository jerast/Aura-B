import { Navigate, Route, Routes } from 'react-router-dom'
import { Checkout, OrderPage, OrdersPage } from '@/modules/session'
import { getSessionToken } from '@/helpers'

export const UserRoutes = () => {
  if (getSessionToken) {
    return <Navigate to="/login" replace />
  }

  return (
    <Routes>
      <Route path="/" element={<h1>MyAccount</h1>} />
      <Route path="/orders" element={<OrdersPage />} />
      <Route path="/orders/checkout" element={<Checkout />} />
      <Route path="/orders/:id" element={<OrderPage />} />
      <Route path="*" element={<h1>Not Found</h1>} />
    </Routes>
  )
}
