import { useMemo, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { useShoppingCart } from '@/hooks';
import { currencyFormatter } from '@/helpers';
import { onToogleShoppingCart } from '@/store';
import { MdOutlineDelete } from 'react-icons/md';

export const ShoppingCartItem = ({ item }) => {
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
      <div className="ShoppingCartItem fluid" key={ product.id } >
         <img className="ShoppingCartItem__image" src={ product.image } alt="image" />
         <Link className="ShoppingCartItem__name" onClick={ handleBackToProduct } to={`/products/${ product.id }`} >
            { product.name }
         </Link>
         <button className="ShoppingCartItem__remove" onClick={ handleRemoveToShoppingCart }>
            <MdOutlineDelete />
         </button>
         <div className="flex">
            <button onClick={ handleReduceToShoppingCart }>-</button>
            <p>{ countProduct }</p>
            <button onClick={ handleAddToShoppingCart }>+</button>
         </div>
         <ul>
            <li>{ currencyFormatter(product.prices.retail * item.count) }</li>
            <li>{ currencyFormatter(product.prices.wholesale * item.count) }</li>
         </ul>
      </div>
   );
};
