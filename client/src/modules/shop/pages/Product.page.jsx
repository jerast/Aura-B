import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { clearActiveProduct, startLoadingSelectedProduct } from '@/store';
import { currencyFormatter } from '@/helpers';
import { useShoppingCart } from '@/hooks';

export const ProductPage = () => {
	const { id } = useParams();
	const { isLoading } = useSelector( state => state.shop );
	const { activeProduct, shoppingCart } = useSelector( state => state.app );
	const { onAddToShoppingCart, onReduceToShoppingCart } = useShoppingCart();
	const dispatch = useDispatch();
	
	useEffect(() => { (!isLoading) && dispatch( startLoadingSelectedProduct(id) ) }, 
	[id, isLoading]);
	
	useEffect(() => () => dispatch( clearActiveProduct() ), []);

	const handleFindInShoppingCart = shoppingCart.some( item => item.product === id );

	const handleAddToShoppingCart = () => onAddToShoppingCart({
		id: activeProduct.id,
		prices: activeProduct.prices,
	});

	const handleReduceToShoppingCart = () => onReduceToShoppingCart({
		id: activeProduct.id,
		prices: activeProduct.prices,
	});
		
	if ( !activeProduct ) return (
		<>
			<h1>Product</h1>
			<h4>Loading...</h4>
		</>
	);

	return (
		<>
			<div>
				<h1>{ activeProduct.name }</h1>
				<h4>{ activeProduct.reference }</h4>
				<h4>{ activeProduct.description }</h4>
				<ul>
					<li>{ currencyFormatter( activeProduct.prices.retail ) }</li>
					<li>{ currencyFormatter( activeProduct.prices.wholesale ) }</li>
				</ul>
			</div>
			<div className='flex flex-col w-fit'>
				<button onClick={ handleAddToShoppingCart }>Add +1</button>
				{
					handleFindInShoppingCart && 
						<button onClick={ handleReduceToShoppingCart }>Remove -1</button>
				}
			</div>
		</>
	);
};
