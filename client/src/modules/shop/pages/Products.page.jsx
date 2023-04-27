import { Link, useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { currencyFormatter } from '@/helpers';
import { useEffect } from 'react';
import { queryParams } from '@/helpers';

export const ProductsPage = () => {
	
	const { products, isLoading } = useSelector( state => state.shop );
	const { search } = useLocation();

	useEffect(
		() => {
			if ( search ) console.log( queryParams( search ) );
		}, 
	[])

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
				products.map( product => (
					<p key={ product.id }>
						<Link to={`/products/${ product.id }`}>{ product.name }</Link>
						<li>{ product.reference }</li>
						<li>{ currencyFormatter(product.prices.retail) }</li>
						<li>{ currencyFormatter(product.prices.wholesale) }</li>
					</p>
				))
			}
		</>
	);
};
