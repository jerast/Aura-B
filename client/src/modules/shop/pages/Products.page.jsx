import { Link, useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { currencyFormatter, filters, queryParams } from '@/helpers';

export const ProductsPage = () => {
	
	const { products, categories, isLoading } = useSelector( state => state.shop );
	const { search, pathname } = useLocation();

	const handleFilterProducts = () => {
		if ( categories.some( category => category.name.toLowerCase() === pathname.slice(1) ) )
			return filters( products, { ...queryParams(search), category: pathname.slice(1) } );

		if ( search ) 
			return filters( products, queryParams(search) );

		return products;
	};

	if ( isLoading ) return (
		<>
			<h1>Products</h1>
			<h3>Loading...</h3>
		</>
	);

	return (
		<>
			<h1>Products</h1>
			{
				(!!products.length) && handleFilterProducts().map( product => (
					<p key={ product.id }>
						<Link to={`/products/${ product.id }`}>{ product.name }</Link>
						<li>{ product.category }</li>
						<li>{ currencyFormatter(product.prices.retail) }</li>
						<li>{ currencyFormatter(product.prices.wholesale) }</li>
					</p>
				))
			}
		</>
	);
};
