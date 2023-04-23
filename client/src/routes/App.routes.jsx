// import { ShopPage } from '@/modules/shop';
import { useEffect } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { startLoadingCategories, startLogin } from '@/store';
import { AuthPage } from '@/modules/auth';
import { ShopPage } from '@/modules/shop';

export const AppRoutes = () => {

	const session = useSelector( state =>  state.session );
	const shop = useSelector( state =>  state.shop );
	const dispatch = useDispatch();
	
	useEffect(() => {

		dispatch( startLoadingCategories() );
		dispatch( startLogin() );

   }, []);

	if ( session.status === 'checking' ) 
		return <h1>Loading...</h1>;

	return (
		<Routes>
			{
				( session.status === 'auth' )
					? (
						<>
							<Route path="/" element={ <ShopPage /> } />
							<Route path="/*" element={ <Navigate to="/" /> } />
						</>
					)
					: (
						<>
							<Route path="/auth" element={ <AuthPage /> } />
							<Route path="/*" element={ <Navigate to="/auth" /> } />
						</>
					)
			}
		</Routes>
	);
};
