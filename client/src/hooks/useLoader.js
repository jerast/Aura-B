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
	const { status, user } = useSelector( state => state.session );
	const dispatch = useDispatch();
	const { pathname } = useLocation();

	useEffect(() => {
		handleLoadingData();
	}, []);
	
	useEffect(() => {
		(status === 'auth') && dispatch( startLoadingOrders() );
	}, [status]);
	
	const handleLoadingData = async () => {
		await dispatch( startVerifyingSession() );
		await dispatch( startGetShoppingCart() );
		await dispatch( startLoadingProducts() );
		await dispatch( startLoadingCategories() );
		dispatch( onLoadEnds() );
	};

	setLastPath();
	
	return { user, pathname };
};
