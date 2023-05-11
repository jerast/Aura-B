import { useMemo, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { useShoppingCart } from '@/hooks';
import { currencyFormatter } from '@/helpers';
import { onToogleShoppingCart } from '@/store';
import { MdOutlineAdd, MdOutlineDelete, MdOutlineRemove } from 'react-icons/md';
import { TbDiscountCheckFilled } from 'react-icons/tb';

export const ShoppingCartItem = ({ item }) => {
   const { order } = useSelector( state => state.app );
   const { products } = useSelector( state => state.shop );
   const [ countProduct, setCountProduct ] = useState( item.count );
   const { onAddToShoppingCart, onReduceToShoppingCart, onRemoveToShoppingCart } = useShoppingCart();
   const dispatch = useDispatch();
   
   const product = useMemo(
      () => products.find( product => product.id === item.product), 
   []);

	const handleAddToShoppingCart = () => {
		onAddToShoppingCart({ 
         id: item.product,
         prices: item.prices,
      });
      setCountProduct( countProduct + 1 );
	};
	
	const handleReduceToShoppingCart = () => {
		onReduceToShoppingCart({ 
         id: item.product,
         prices: item.prices,
      })
      setCountProduct( countProduct - 1 );
	};

   const handleRemoveToShoppingCart = () => {
      onRemoveToShoppingCart( item.product );
   };

   const handleBackToProduct = () => {
      dispatch( onToogleShoppingCart() );
   };

   return (
      <div className="ShoppingCartItem fluid">
         <img className="ShoppingCartItem__image" src={ product.image } alt="image" />
         <Link className="ShoppingCartItem__name fluid" onClick={ handleBackToProduct } to={`/products/${ product.id }`} >
            { product.name }
         </Link>
         <button className="ShoppingCartItem__remove" onClick={ handleRemoveToShoppingCart }>
            <MdOutlineDelete />
         </button>
         <div className="ShoppingCartItem__controls">
            <button onClick={ handleReduceToShoppingCart } disabled={ countProduct === 1 } >
               <MdOutlineRemove />
            </button>
            <span>{ countProduct }</span>
            <button onClick={ handleAddToShoppingCart }>
               <MdOutlineAdd />
            </button>
         </div>
         <ul className={`ShoppingCartItem__prices ${ order.total_products >= 6 ? 'discount' : '' }`}>
            <li className="fluid">{ currencyFormatter(product.prices.retail * item.count) }</li>
            <li className="fluid"><TbDiscountCheckFilled />{ currencyFormatter(product.prices.wholesale * item.count) }</li>
         </ul>
      </div>
   );
};
