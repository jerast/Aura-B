import { useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { filters, queryParams } from '@/helpers';
import { ProductCard } from '@/modules/shop';

export const ProductsPage = () => {
	const { products, categories, isLoading } = useSelector( state => state.shop );
	const { search, pathname } = useLocation();

	const handleFilterProducts = () => {
		if ( categories.some( category => category.name.toLowerCase() === pathname.slice(1) ) )
			return filters( products, { ...queryParams(search), category: pathname.slice(1) } );

		if ( search ) 
			return filters( products, queryParams(search) );

		return [...products].sort( (a,b) => a.prices.wholesale > b.prices.wholesale );
	};

	if ( isLoading ) return (
		<>
			<h1>Products</h1>
			<h3>Loading...</h3>
		</>
	);

	return (
		<section className="Section">
			<article className="ProductList">
			{
				(!!products.length) && handleFilterProducts().map( product => (
					<ProductCard key={ product.id } product={ product } />
				))
			}
			</article>
		</section>
	);
};
