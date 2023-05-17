import { Navigate, Route, Routes } from 'react-router-dom';
import { Checkout, OrderPage, OrdersPage } from '@/modules/session';

export const UserRoutes = () => {

	if (!localStorage.getItem('user')) return <Navigate to="/login" />;

	return (
		<Routes>
			<Route path="/" element={ <h1>MyAccount</h1> } />
			<Route path="/orders" element={ <OrdersPage /> } />
			<Route path="/orders/checkout" element={ <Checkout /> } />
			<Route path="/orders/:id" element={ <OrderPage /> } />
			<Route path="*" element={ <h1>Not Found</h1> } />
		</Routes>
	);
};
