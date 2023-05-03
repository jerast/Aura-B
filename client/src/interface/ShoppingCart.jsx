import { onToogleShoppingCart } from "@/store";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

export const ShoppingCart = () => {

	const { shoppingCartIsOpen } = useSelector( state => state.app );
	const [ isShow, toogleShow ] = useState( false );
	const dispatch = useDispatch();

	useEffect(() => {
		shoppingCartIsOpen 
			? toogleShow(true) 
			: setTimeout(() => toogleShow(false), 250);
	}, [shoppingCartIsOpen]);

	const handleToogleBackdrop = () => 
		shoppingCartIsOpen 
			? 'ShoppingCart__backdrop animate-in fade-in duration-300' 
			: 'ShoppingCart__backdrop animate-out fade-out duration-300';

	const handleCloseShoppingCart = () => 
		dispatch( onToogleShoppingCart() );

   return (
      isShow && (
			<div className="ShoppingCart">
				<div 
					className={ handleToogleBackdrop() }
					onClick={ handleCloseShoppingCart }
				/>
				<div className={`ShoppingCart__content ${ shoppingCartIsOpen ? 'animate-in slide-in-from-right duration-300' : 'animate-out slide-out-to-right duration-300' }`}>					

				</div>
			</div>
		)
   );
};