import { ShopPage } from '@/modules/shop';
import { startLogin } from '@/store';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Route, Routes } from 'react-router-dom';

export const AppRoutes = () => {

	const dispatch = useDispatch();

   const onLogin = () => {
      dispatch( startLogin() );
   }

	useEffect(() => {
      onLogin();
   }, []);

	return (
		<Routes>
			<Route path="/" element={ <ShopPage /> } />
			{/* <Route path="/session" element={<h1>First</h1>} /> */}
			{/* <Route path="/*" element={<h1>Not Found</h1>} /> */}
		</Routes>
	);
};
