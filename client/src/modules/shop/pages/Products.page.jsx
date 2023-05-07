import { Link, useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { currencyFormatter } from '@/helpers';
import { queryParams } from '@/helpers';

export const ProductsPage = () => {
	
	const { products, isLoading } = useSelector( state => state.shop );
	const { search } = useLocation();

	const handleFilterProducts = () => {
		if ( !search ) return products;

		const filterParams = Object.entries( queryParams(search) );
		let filterProducts = [ ...products ];
		
		filterParams.forEach( filter => 
			filterProducts = filterProducts.filter( product => 
				product[filter[0]].toLowerCase().includes( filter[1].toLowerCase() ) 
					&& product 
			)
		);

		return filterProducts;
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
				handleFilterProducts().map( product => (
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
