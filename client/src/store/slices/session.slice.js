import { createSlice } from '@reduxjs/toolkit';

export const sessionSlice = createSlice({
	name: 'session',
	initialState: {
		status: 'not-auth', // 'auth', 'not-auth'
		user: {},
		errorMessage: undefined,
	},
	reducers: {
		onChecking: (state) => {
			state.status = 'checking';
			state.user = {};
			state.errorMessage = undefined;
		},
		onLogin: (state, { payload }) => {
			state.status = 'auth';
			state.user = payload;
			state.errorMessage = undefined;
		},
		onLogout: (state, { payload }) => {
			state.status = 'not-auth';
			state.user = {};
			state.errorMessage = payload;
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
   setErrorMessage, 
   clearErrorMessage 
} = sessionSlice.actions;
