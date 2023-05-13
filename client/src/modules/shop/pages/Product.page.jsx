import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { clearActiveProduct, startLoadingSelectedProduct } from '@/store';
import { currencyFormatter } from '@/helpers';
import { useShoppingCart } from '@/hooks';

export const ProductPage = () => {
	const { id } = useParams();
	const { isLoading } = useSelector( state => state.shop );
	const { activeProduct } = useSelector( state => state.app );
	const dispatch = useDispatch();
	const { 
		productCounter, 
		onAddToShoppingCart, 
		onReduceToShoppingCart 
	} = useShoppingCart( id );
	
	useEffect(() => { (!isLoading) && dispatch( startLoadingSelectedProduct(id) ) }, 
	[id, isLoading]);
	
	useEffect(() => () => dispatch( clearActiveProduct() ), []);
		
	if ( !activeProduct ) return (
		<>
			<h1>Product</h1>
			<h4>Loading...</h4>
		</>
	);

	return (
		<section className="ProductBanner">
			<img className="ProductBanner__image" src={ activeProduct.image } alt="" />
			<div className="ProductBanner__data">
				<h1>{ activeProduct.name }</h1>
				<h4>{ activeProduct.reference }</h4>
				<h4>{ activeProduct.description }</h4>
				<ul>
					<li>{ currencyFormatter( activeProduct.prices.retail ) }</li>
					<li>{ currencyFormatter( activeProduct.prices.wholesale ) }</li>
				</ul>
				<div className="ProductBanner__controls">
					<button onClick={ onAddToShoppingCart }>Add</button>
					<span>{ productCounter }</span>
					<button onClick={ onReduceToShoppingCart }>Reduce</button>
				</div>
			</div>
		</section>
	);
};
