import { Route, Routes } from 'react-router-dom';
import { AdminRoutes, PublicRoutes, UserRoutes } from '@/routes';
import { useAppRoutes } from '@/hooks';

export const AppRoutes = () => {
	
	const { user } = useAppRoutes();

	// TODO: Reorder public and private pages
	return (
		<Routes>
			{
				(!user?.role || user.role === 'customer') 
					&& <Route path="/*" element={ <PublicRoutes /> } />
			}
			{
				user.role !== 'customer'
					&& <Route path="/*" element={ <AdminRoutes /> } /> 
			}
			{
				user.role !== 'admin'
					&& <Route path="/account/*" element={<UserRoutes />} />
			}
		</Routes>
	);
};


   // const handlePublicRoutes = () => (
	// 	<>
	// 		<NavLink to="/">Home</NavLink>
	// 		<NavLink to="/categories">Categories</NavLink>
	// 		<NavLink to="/products">Products</NavLink>
	// 	</>
	// );

	// const handleCustomerRoutes = () => (
	// 	<>
	// 		<NavLink to="/account/">MyAccount</NavLink>
	// 		<NavLink to="/account/orders">MyOrders</NavLink>
	// 		<button>ShoppingCart</button>
	// 	</>
	// );
	
	// const handleAdminRoutes = () => (
	// 	<NavLink to="/admin/">Admin</NavLink>
	// );
