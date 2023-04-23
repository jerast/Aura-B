import { shopApi } from '@/api';
import { onLoadStarts, onLoadEnds, onLoadProducts, onLoadCategories } from '@/store';

export const startLoadingCategories = () => 
	async (dispatch, getState) => {
		dispatch( onLoadStarts() );
		
		try {
			const data = await shopApi.get('/categories');
			console.log( data );
		} catch {
			console.error( "Something fails" );
		}

		dispatch( onLoadStarts() );
	};