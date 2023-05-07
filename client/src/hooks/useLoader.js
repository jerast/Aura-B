import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setLastPath } from '@/helpers';
import { onLoadEnds, onLoadStarts, startLoadingCategories, startLoadingOrders, startLoadingProducts, startVerifyingSession } from '@/store';

export const useLoader = () => {
	const { status, user } = useSelector( state => state.session );
	const dispatch = useDispatch();

	const handleLoadingData = async () => {
		await dispatch( startVerifyingSession() );
		dispatch( onLoadStarts() );
		await dispatch( startLoadingProducts() );
		await dispatch( startLoadingCategories() );
		dispatch( onLoadEnds() );
	};

	useEffect(() => {
		handleLoadingData();
	}, []);
	
	useEffect(() => {
		(status === 'auth') && dispatch( startLoadingOrders() );
	}, [status]);
	
	setLastPath();
	
	return { user };
};
