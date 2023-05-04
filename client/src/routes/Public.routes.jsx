import { Route, Routes } from 'react-router-dom';
import { LoginPage } from '@/modules/session';
import { CategoriesPage, ProductsPage, HomePage } from '@/modules/shop';

export const PublicRoutes = () => {
	return (
		<Routes>
			<Route path="/" element={ <HomePage /> } />
			<Route path="/categories" element={ <CategoriesPage /> } />
			<Route path="/products" element={ <ProductsPage /> } />
			<Route path="/login" element={ <LoginPage /> } />
         <Route path="*" element={ <h1>Not Found</h1> } />
		</Routes>
	);
};
