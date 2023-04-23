import { onChecking, onLogin, onLogout } from '@/store';

export const startLogin = () => 
	async (dispatch, getState) => {
		
		dispatch( onChecking() );
		
		const user = {
			id: "643f045567f127ee7bad1fca",
			name: "User 1",
			email: "user1@gmail.com",
			phone: 3101112222,
			role: "customer",
			state: true,
		};

		dispatch( onLogin( user ) );

	};