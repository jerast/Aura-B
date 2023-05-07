import { shopApi } from '@/api';
import { setActiveProduct, updateShoppingCart } from '../slices/app.slice';

export const startLoadingSelectedOrder = ( order_id ) =>
	async (dispatch, getState) => {
		const { orders } = getState().session;

		const findOrder = orders.some( order => order.id === order_id );
		if ( !findOrder ) return;

		try {
			// const { data } = await shopApi.get(`/orders/${ order_id }`);
			dispatch( setActiveOrder(findOrder) );

		} catch (error) {
			console.error( `Something's wrong on Request` );
		}
	};

export const startLoadingSelectedProduct = ( product_id ) =>
	async (dispatch, getState) => {
		const { products } = getState().shop;

		const findProduct = products.find( product => product.id === product_id );
		dispatch( setActiveProduct(findProduct) );

		if ( !findProduct ) return;

		try {
			// const { data } = await shopApi.get(`/orders/${ product_id }`);
			// dispatch( setActiveProduct(findProduct) );

		} catch (error) {
			console.error( `Something's wrong on Request` );
		}
	};

export const startAddingToShoppingCart = ( productToAdd ) => 
	async (dispatch, getState) => {
		const { shoppingCart } = getState().app;

		const productIndex = shoppingCart.findIndex( product => product.product === productToAdd.product );
		
		if ( productIndex === -1 ) {
			return dispatch( updateShoppingCart([ productToAdd ]) );
		}

		let updatedShoppingCart = [ ...shoppingCart ];
		let product = {
			product: productToAdd.product,
			prices: productToAdd.prices,
			count: updateShoppingCart[productIndex].count + productToAdd.count,
		}

		updatedShoppingCart[productIndex] = product;
	

		dispatch( updateShoppingCart(updatedShoppingCart) )

		
	

	};