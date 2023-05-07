import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { clearActiveProduct, startAddingToShoppingCart, startLoadingSelectedProduct } from '@/store';
import { currencyFormatter } from '@/helpers';

export const ProductPage = () => {
	const { id } = useParams();
	const { activeProduct } = useSelector( state => state.app );
	const { products } = useSelector( state => state.shop );
	const { user } = useSelector( state => state.session );
	const [ count, onChangeCount ] = useState(1);
	const dispatch = useDispatch();
	
	useEffect(() => { 
		dispatch( startLoadingSelectedProduct(id) );
	}, [products]);
	
	useEffect(() => { 
		return () => dispatch( clearActiveProduct() ); 
	}, []);

	const handleAddToShoppingCart = () => {

		const { id, prices } = activeProduct;
		const product = {
			product: id,
			prices,
			count
		};

		dispatch( startAddingToShoppingCart(product) );
	};

  // TODO: Fix bug 'Product not found'

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
					<li>{ currencyFormatter(activeProduct.prices.retail) }</li>
					<li>{ currencyFormatter(activeProduct.prices.wholesale) }</li>
				</ul>
			</div>
			<div>
				<input 
					type="number" 
					// max={ activeProduct.stock } 
					// readOnly 
					value={ count }
					onChange={ onChangeCount }
				/>
				<button onClick={ handleAddToShoppingCart }>Add</button>
			</div>
		</>
	);
};
