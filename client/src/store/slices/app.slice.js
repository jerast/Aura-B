import { createSlice } from '@reduxjs/toolkit';

export const appSlice = createSlice({
	name: 'app',
	initialState: {
		sidebarIsOpen: false,
      shoppingCartIsOpen: false,
		activeOrder: undefined,
		activeProduct: undefined,
		order: {
			
		},
		shoppingCart: [],
	},
	reducers: {
		onToogleSidebar: (state) => {
			state.sidebarIsOpen = !state.sidebarIsOpen;
		},
		onToogleShoppingCart: (state) => {
			state.shoppingCartIsOpen = !state.shoppingCartIsOpen;
		},
		setActiveOrder: (state, { payload }) => {
			state.activeOrder = payload;
		},
		clearActiveOrder: (state) => {
			state.activeOrder = undefined;
		},
		setActiveProduct: (state, { payload }) => {
			state.activeProduct = payload;
		},
		clearActiveProduct: (state) => {
			state.activeProduct = undefined;
		},
		updateShoppingCart: (state, { payload }) => {
			state.shoppingCart = payload;
		}
	},
});

export const {
	onToogleSidebar,
	onToogleShoppingCart,
	setActiveOrder, 
	clearActiveOrder, 
	setActiveProduct, 
	clearActiveProduct, 
	updateShoppingCart, 
} = appSlice.actions;
