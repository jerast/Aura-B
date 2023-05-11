import { useDispatch } from 'react-redux';
import { 
	startAddToShoppingCart, 
	startReduceToShoppingCart, 
	startRemoveToShoppingCart, 
	startSetShoppingCart, 
	startSettingOrder 
} from '@/store';

export const useShoppingCart = () => {

	const dispatch = useDispatch();

	const onSettingOrder = ( action, prices ) => { 
		dispatch( startSettingOrder({
			action,
			prices,
		}) );
	};

	const onAddToShoppingCart = ( product ) => {
		onSettingOrder('add', product.prices );
		dispatch( startAddToShoppingCart({
			product: product.id,
			prices: product.prices,
		}) );
		dispatch( startSetShoppingCart() );
	};

	const onReduceToShoppingCart = ( product ) => {
		onSettingOrder('reduce', product.prices );
		dispatch( startReduceToShoppingCart({
			product: product.id,
			prices: product.prices,
		}) );
		dispatch( startSetShoppingCart() );
	};

	const onRemoveToShoppingCart = ( id ) => {
		dispatch( startRemoveToShoppingCart( id ) );
		dispatch( startSetShoppingCart() );
	};

	return {
		onAddToShoppingCart,
		onReduceToShoppingCart,
		onRemoveToShoppingCart,
	};
};