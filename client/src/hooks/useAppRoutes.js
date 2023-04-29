import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setLastPath } from '@/helpers';
import { startLoadingCategories, startLoadingOrders, startLoadingProducts, startVerifyingSession } from '@/store';

export const useAppRoutes = () => {

   const { status, user } = useSelector( state => state.session );
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch( startLoadingProducts() );
		dispatch( startLoadingCategories() );
		dispatch( startVerifyingSession() );
	}, []);

	useEffect(() => {
		(status === 'auth') && dispatch( startLoadingOrders() );
	}, [status]);

   setLastPath();

	return { user };
};
