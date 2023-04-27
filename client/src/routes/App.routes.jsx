import { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { AdminRoutes, PublicRoutes, UserRoutes } from '.';
import { startLoadingCategories, startLoadingOrders, startLoadingProducts, startVerifyingSession } from '@/store';
import { setLastPath } from '@/helpers';

export const AppRoutes = () => {
	const { status, user } = useSelector( state => state.session );
	const dispatch = useDispatch();

	useEffect(() => {
		(async () => {
			dispatch( startLoadingProducts() );
			dispatch( startLoadingCategories() );
			dispatch( startVerifyingSession() );
		})();
	}, []);

	useEffect(() => {
		if (status === 'auth') dispatch( startLoadingOrders() );
	}, [ status ]);

	setLastPath();

	return (
		<main>
			<Routes>
				{
					( !user?.role || user.role === 'customer' ) 
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
		</main>
	);
};
