import { shopApi } from '@/api';
import { onLoadOrders, onChecking, onLogin, onLogout, clearActiveOrder } from '@/store';
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
			console.error( error );
		}
	};