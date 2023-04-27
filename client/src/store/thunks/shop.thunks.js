import { shopApi } from '@/api';
import { onLoadStarts, onLoadEnds, onLoadProducts, onLoadCategories } from '@/store';
// import { categories, products } from '@/data/testingData'; // OffLine Data Testing


export const startLoadingCategories = () => 
	async (dispatch, getState) => {
		dispatch( onLoadStarts() );
		
		try {
			const { data } = await shopApi.get('/categories');
			dispatch( onLoadCategories(data.categories) );

			// Offline Mode
			// dispatch( onLoadCategories(categories) );
		} catch {
			console.error( 'Something fails' );
		}

		await dispatch( onLoadEnds() );
	};

export const startLoadingProducts = () => 
	async (dispatch, getState) => {
		dispatch( onLoadStarts() );
		
		try {
			const { data } = await shopApi.get('/products');
			dispatch( onLoadProducts(data.products) );

			// Offline Mode
			// dispatch( onLoadProducts(products) );
		} catch {
			console.error( 'Something fails' );
		}

		await dispatch( onLoadEnds() );
	};