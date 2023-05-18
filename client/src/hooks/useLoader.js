import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { setLastPath } from '@/helpers';
import { 
	onLoadEnds, 
	startGetShoppingCart, 
	startLoadingCategories, 
	startLoadingOrders, 
	startLoadingProducts, 
	startVerifyingSession 
} from '@/store';

export const useLoader = () => {
	const { user, orders } = useSelector( state => state.session );
	const { pathname } = useLocation();
	const dispatch = useDispatch();

	useEffect(() => {
		handleLoadingData();
	}, []);
	
	const handleLoadingData = async () => {
		const session = await dispatch( startVerifyingSession() );
		await dispatch( startLoadingProducts() );
		await dispatch( startLoadingCategories() );
		await dispatch( startGetShoppingCart() );
		( session ) && await dispatch( startLoadingOrders() );
		dispatch( onLoadEnds() );
	};

	setLastPath();
	
	return { user, pathname };
};
