import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { onToogleShoppingCart } from "@/store";
import { currencyFormatter } from "@/helpers";
import { ShoppingCartItem } from "@/interface";
import { MdClose } from "react-icons/md";
import { TbDiscountCheckFilled } from "react-icons/tb";
import { Link } from "react-router-dom";

export const ShoppingCart = () => {

	const { shoppingCartIsOpen, shoppingCart, order } = useSelector( state => state.app );
	const [ isShow, toogleShow ] = useState( false );
	const dispatch = useDispatch();

	useEffect(() => {
		shoppingCartIsOpen 
			? toogleShow(true) 
			: setTimeout(() => toogleShow(false), 290);
	}, [shoppingCartIsOpen]);

	const handleCloseShoppingCart = () => {
		dispatch(onToogleShoppingCart());
	};

   return (
      isShow && (
			<div className="ShoppingCart">
				<div 
					className={`ShoppingCart__backdrop ${ shoppingCartIsOpen ? 'animate-in fade-in duration-300' : 'animate-out fade-out duration-300' }`}
					onClick={ handleCloseShoppingCart }
				/>
				<div className={`ShoppingCart__content ${ shoppingCartIsOpen ? 'animate-in slide-in-from-right duration-300' : 'animate-out slide-out-to-right duration-300' }`}>					
					<div className="ShoppingCart__header">
						<h1>Shopping Cart</h1>
						<button className="ShoppingCart__close-button fluid" onClick={ handleCloseShoppingCart }>
							<MdClose />
						</button>
					</div>
					{
						shoppingCart.map( item => 
							<ShoppingCartItem key={ item.product } item={ item }/> 
						) 
					}
					<div className={`ShoppingCart__confirm ${ order.total_products >= 6 ? 'discount' : '' }`}>
						<button className="ShoppingCart__confirm-button fluid">
							<span>Go to pay:</span> 
							<p>
								<span className="fluid">{ currencyFormatter( order.total_prices.retail ) }</span>
								<span className="fluid">{ currencyFormatter( order.total_prices.wholesale ) }</span>
							</p>
						</button>
						<div>
							{
								(order.total_products < 6)
									? <p><span>{ 6 - order.total_products }</span> product(s) more to <span>get DISCOUNT</span></p>
									: <p><TbDiscountCheckFilled />GOT THE DISCOUNT!</p>
							}
						</div>
					</div>
					<Link className="ShoppingCart__link fluid" to={'/products'} onClick={ handleCloseShoppingCart }>See more products</Link>
				</div>
			</div>
		)
   );
};