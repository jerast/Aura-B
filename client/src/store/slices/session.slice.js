import { createSlice } from '@reduxjs/toolkit';

export const sessionSlice = createSlice({
	name: 'session',
	initialState: {
		status: 'not-auth', // 'auth', 'not-auth'
		user: {},
		orders: [],
		errorMessage: undefined,
	},
	reducers: {
		onChecking: (state) => {
			state.status = 'checking';
		},
		onLogin: (state, { payload }) => {
			state.status = 'auth';
			state.user = payload;
			state.errorMessage = undefined;
		},
		onLogout: (state, { payload }) => {
			state.status = 'not-auth';
			state.user = {};
			state.orders = [];
			state.errorMessage = payload;
		},
		onLoadOrders: (state, { payload = [] }) => {
			state.orders = payload;
		},
		setErrorMessage: (state, { payload }) => {
			state.errorMessage = payload;
		},
		clearErrorMessage: (state) => {
			state.errorMessage = undefined;
		},
	},
});

export const { 
   onChecking, 
   onLogin, 
   onLogout, 
	onLoadOrders, 
   setErrorMessage, 
   clearErrorMessage, 
} = sessionSlice.actions;