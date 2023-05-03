import { createSlice } from '@reduxjs/toolkit';

export const appSlice = createSlice({
	name: 'app',
	initialState: {
		sidebarIsOpen: false,
      shoppingCartIsOpen: false,
	},
	reducers: {
		onOpenSidebar: (state) => {
			state.sidebarIsOpen = true;
		},
		onOpenShoppingCart: (state) => {
			state.sidebarIsOpen = true;
		},
		onCloseSidebar: (state) => {
			state.sidebarIsOpen = false;
		},
		onCloseShoppingCart: (state) => {
			state.shoppingCartIsOpen = false;
		},
		onToogleSidebar: (state) => {
			state.sidebarIsOpen = !state.sidebarIsOpen;
		},
		onToogleShoppingCart: (state) => {
			state.shoppingCartIsOpen = !state.shoppingCartIsOpen;
		},
	},
});

export const { 
	onOpenSidebar,
	onOpenShoppingCart,
	onCloseSidebar,
	onCloseShoppingCart,
	onToogleSidebar,
	onToogleShoppingCart,
} = appSlice.actions;
