import { shopApi } from '@/api';
import { user } from '@/data/testingData'; // Offline Data Testing
import { removeLastOrder, removeLastShoppingCart } from '@/helpers';
import { 
	onLoadOrders, 
	onChecking, 
	onLogin, 
	onLogout, 
	clearActiveOrder, 
	onSaveStarts, 
	onSaveEnds, 
	onAddToOrders, 
	clearOrder,
	clearShoppingCart,
	onReduceProductStock,
	startLoadingProducts,  
} from '@/store';

export const startVerifyingSession = () =>
	(dispatch) => {
		const userSession = localStorage.getItem('user');
		( userSession ) 
			? dispatch( onLogin(JSON.parse(userSession)) )
			: dispatch( onLogout() );

		return !!userSession;
	};

export const startLogin = () => 
	async (dispatch) => {
		try {
			dispatch( onChecking() );

			// TODO: User session request
			localStorage.setItem( 'user', JSON.stringify(user) );
			dispatch( onLogin( user ) );

			const filter = {
				field: 'user',
				value: user.id,
			};
			const { data } = await shopApi.get('/orders', { headers: filter });
			dispatch( onLoadOrders(data.orders) );
			
		} catch (error) {
			dispatch( onLogout('failed sesion') );
		}
	};

export const startLogout = () => 
	(dispatch) => {
		localStorage.removeItem('user');
		dispatch( onLogout() );
		dispatch( clearActiveOrder() );
	};

export const startLoadingOrders = () =>
	async (dispatch, getState) => {
		const { user, status } = getState().session;

		if ( status !== 'auth' ) return;

		try {
			const filter = {
				field: 'user',
				value: user.id,
			};
			const { data } = await shopApi.get('/orders', { headers: filter });
			dispatch( onLoadOrders(data.orders) );

		} catch (error) {
			console.error( 'Something fails at load Orders' );
		}
	};

export const startSavingOrder = () => 
	async (dispatch, getState) => {
		const { user } = getState().session;
		const { products } = getState().shop;
		const { order, shoppingCart } = getState().app;
	
		dispatch( onSaveStarts() );

		await dispatch( startLoadingProducts() );

		const finalOrder = {
			user: user.id,
			total_price: order.total_products >= 6 ? order.total_prices.wholesale : order.total_prices.retail,
			discount: order.total_products >= 6 ? true : false,
			list: shoppingCart,
		}; 

		try {
			const { data } = await shopApi.post(`/orders`, finalOrder);

			if ( data.message ) 
				throw new Error( data.message );

			data.order.list.forEach( element => {
				const productIndex = products.findIndex( item => item.id === element.product );
				
				dispatch( onReduceProductStock({ index: productIndex, count: element.count }) );
			});

			dispatch( onAddToOrders( data.order ) );
			dispatch( clearOrder() );
			dispatch( clearShoppingCart() );

			removeLastOrder();
			removeLastShoppingCart();
			
		} catch (error) {
			console.error('Something fails at Saving Order');
		}

		dispatch( onSaveEnds() );
	};