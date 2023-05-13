import { createSlice } from '@reduxjs/toolkit';

export const shopSlice = createSlice({
	name: 'shop',
	initialState: {
		isLoading: true,
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
			state.isLoading = true;
		},
		onLoadEnds: (state) => {
			state.isLoading = false;
		},
	},
});

export const { 
	onLoadCategories,
	onLoadProducts,
	onLoadStarts,
	onLoadEnds,
} = shopSlice.actions;
