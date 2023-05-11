import { createSlice } from '@reduxjs/toolkit';

export const appSlice = createSlice({
	name: 'app',
	initialState: {
		sidebarIsOpen: false,
      shoppingCartIsOpen: false,
		activeOrder: undefined,
		activeProduct: undefined,
		order: {
			total_products: 0,
			total_prices: {
				retail: 0,
				wholesale: 0,
			},
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
		onSetOrder: (state, { payload }) => {
			state.order = payload;
		},
		onSetShoppingCart: (state, { payload }) => {
			state.shoppingCart = payload;
		},
		onAddProductShoppingCart: (state, { payload }) => {
			state.shoppingCart.push( payload );
		},
		onRemoveProductShoppingCart: (state, { payload }) => {
			state.shoppingCart = state.shoppingCart.filter( (item, index) => index !== payload );
		},
		onPlusProductShoppingCart: (state, { payload }) => {
			state.shoppingCart[ payload.index ].count += payload.count;
		},
		onMinusProductShoppingCart: (state, { payload }) => {
			state.shoppingCart[ payload.index ].count -= payload.count;
		},
	},
});

export const {
	onToogleSidebar,
	onToogleShoppingCart,
	setActiveOrder, 
	clearActiveOrder, 
	setActiveProduct, 
	clearActiveProduct, 
	onSetOrder,
	onSetShoppingCart,
	onAddProductShoppingCart, 
	onRemoveProductShoppingCart, 
	onPlusProductShoppingCart, 
	onMinusProductShoppingCart,
} = appSlice.actions;
