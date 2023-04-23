import { createSlice } from '@reduxjs/toolkit';

export const shopSlice = createSlice({
	name: 'shop',
	initialState: {
		isLoading: false,
      categories: [],
      products: [],
	},
	reducers: {
		onLoadCategories: (state, { payload = [] }) => {
			state.categories = payload;
		},
		onLoadProducts: (state, { payload = [] }) => {
			state.products = payload;
		},
		onLoadStarts: (state) => {
			state.isLoading = false;
		},
		onLoadEnds: (state) => {
			state.isLoading = true;
		},
	},
});

export const { 
	onLoadCategories,
	onLoadProducts,
	onLoadStarts,
	onLoadEnds,
} = shopSlice.actions;
