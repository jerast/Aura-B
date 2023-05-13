import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { useShoppingCart } from '@/hooks';
import { currencyFormatter } from '@/helpers';
import { onToogleShoppingCart } from '@/store';
import { MdOutlineAdd, MdOutlineDelete, MdOutlineRemove } from 'react-icons/md';
import { TbDiscountCheckFilled } from 'react-icons/tb';

export const ShoppingCartItem = ({ id }) => {
	const { order } = useSelector( state => state.app );
	const dispatch = useDispatch();
	const { 
		product,
		productCounter, 
		onAddToShoppingCart, 
		onReduceToShoppingCart, 
		onRemoveToShoppingCart 
	} = useShoppingCart( id );

	const handleBackToProduct = () => {
		dispatch( onToogleShoppingCart() );
	};

	return (
		<div className="ShoppingCartItem fluid">
			<Link className="ShoppingCartItem__image" onClick={ handleBackToProduct } to={`/products/${ product.id }`} >
				<img  src={ product.image } alt="image" />
			</Link>
			<Link className="ShoppingCartItem__name fluid" onClick={ handleBackToProduct } to={`/products/${ product.id }`} >
				{ product.name }
			</Link>
			<button className="ShoppingCartItem__remove" onClick={ onRemoveToShoppingCart }>
				<MdOutlineDelete />
			</button>
			<div className="ShoppingCartItem__controls">
				<button onClick={ onReduceToShoppingCart } disabled={ productCounter === 1 } >
					<MdOutlineRemove />
				</button>
				<span>{ productCounter }</span>
				<button onClick={ onAddToShoppingCart }>
					<MdOutlineAdd />
				</button>
			</div>
			<ul className={`ShoppingCartItem__prices ${ order.total_products >= 6 ? 'discount' : '' }`}>
				<li className="fluid">{ currencyFormatter(product.prices.retail * productCounter) }</li>
				<li className="fluid"><TbDiscountCheckFilled />{ currencyFormatter(product.prices.wholesale * productCounter) }</li>
			</ul>
		</div>
	);
};
