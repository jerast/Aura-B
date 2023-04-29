import { shopApi } from '@/api';
import { onLoadOrders, onChecking, onLogin, onLogout, setActiveOrder, clearActiveOrder } from '@/store';
import { user, orders } from '@/data/testingData'; // Offline Data Testing

export const startVerifyingSession = () =>
	async (dispatch, getState) => {
		const userSession = localStorage.getItem('user');
		( userSession ) && dispatch( onLogin( JSON.parse(userSession) ) );
	};

export const startLogin = () => 
	async (dispatch, getState) => {
		try {
			dispatch( onChecking() );

			// TODO: User session request
			localStorage.setItem( 'user', JSON.stringify(user) );
			dispatch( onLogin( user ) );
		} catch (error) {
			dispatch( onLogout('failed sesion') );
		}
	};

export const startLogout = () => 
	async (dispatch, getState) => {
		localStorage.removeItem('user');
		dispatch( onLogout() );
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

			// Offline Mode
			// const filteredOrders = orders.filter( order => order.user === user.id );
			// dispatch( onLoadOrders( filteredOrders ) );

		} catch (error) {
			console.error( error );
		}
	};

export const startLoadingSelectedOrder = ( order_id ) =>
	async (dispatch, getState) => {
		const { orders } = getState().session;

		const findOrder = orders.some( order => order.id === order_id );
		if ( !findOrder ) return;

		try {
			const { data } = await shopApi.get(`/orders/${ order_id }`);
			dispatch( setActiveOrder(data.order) );

			// Offline Mode
			// const findedOrder = orders.find( order => order.id === order_id );
			// dispatch( setActiveOrder( findedOrder ) );
		} catch (error) {
			console.error( `Something's wrong on Request` );
		}
	};