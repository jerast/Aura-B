import { useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';

export const HomePage = () => {
	const { isLoading, categories, products } = useSelector( state => state.shop );
	const navigate = useNavigate();

	return (
		<>
			<figure className="Banner">
				<img className="Banner__image" src="/assets/banner-1.jpg"/>
				<figcaption className="Banner__caption">
					<h1>Level up your beauty with our products collection</h1>
					<button onClick={() => navigate('/products')}>Shop now</button>
				</figcaption>
			</figure>

			<section className="Section">
				<h1 className="Section__title">Shop Our Top Categories</h1>
				<article className="Section__content Section__content--categories">
					{
						categories.map( category => 
							<Link 
								key={ category.id }
								className="Category fluid" 
								to={`/products?category=${ category.name }`} 
							>
								<img 
									className="Category__image fluid"
									src={`/assets/${ (category.name).toLowerCase() }.jpg`} 
									alt={ category.name } 
								/>
								<span className="Category__caption">{ category.name }</span>
							</Link> 
						)
					}
				</article>
			</section>

			<section className="Section">
				<h1 className="Section__title">Some Of Our Produts</h1>
				<article className="Section__content Section__content--products">
					{
						(products.slice(1, 7)).map( product => 
							<Link 
								key={ product.id }
								className="Product fluid" 
								// to={`/products?category=${ product.name }`} 
							>
								<img 
									className="Product__image fluid"
									src={ product.image } 
									alt={ product.name } 
								/>
								{/* <span className="Product__caption">{ product.name }</span> */}
							</Link> 
						)
					}
				</article>
			</section>
		</>
	);
};
