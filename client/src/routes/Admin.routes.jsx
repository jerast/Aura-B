import { Navigate, Route, Routes } from 'react-router-dom'
import { getSessionToken } from '@/helpers'

export const AdminRoutes = () => {
  if (!getSessionToken) return <Navigate to="/login" />

  return (
    <Routes>
      <Route path="/" element={<h1>Admin</h1>} />
      <Route path="*" element={<h1>Not Found</h1>} />
    </Routes>
  )
}
