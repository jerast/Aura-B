import { Route, Routes } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { AdminRoutes, PublicRoutes, UserRoutes } from '@/routes'

export const AppRoutes = () => {
  const { user } = useSelector((state) => state.session)

  return (
    <Routes>
      {(user.role !== 'admin') && <Route path="/*" element={<PublicRoutes />} />}
      {(user.role === 'customer') && <Route path="/account/*" element={<UserRoutes />} />}
      {(user.role === 'admin') && <Route path="/*" element={<AdminRoutes />} />}
    </Routes>
  )
}
