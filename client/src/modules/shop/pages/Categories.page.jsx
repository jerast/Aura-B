import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

export const CategoriesPage = () => {

	const { categories, isLoading } = useSelector( state => state.shop );

	if ( isLoading ) return (
		<>
			<h1>Categories</h1>
			<h3>Loading...</h3>
		</>
	);

	return (
		<>
			<h1>Categories</h1>
			{
				categories.map( category => (
					<div key={ category.id }>
						<Link to={`/products?category=${ category.name }`}>{ category.name }</Link>
					</div>
				))
			}
		</>
	);
};
