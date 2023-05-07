import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { onToogleShoppingCart } from "@/store";
import { MdKeyboardBackspace } from "react-icons/md";

export const ShoppingCart = () => {

	const { shoppingCartIsOpen } = useSelector( state => state.app );
	const [ isShow, toogleShow ] = useState( false );
	const dispatch = useDispatch();

	useEffect(() => {
		shoppingCartIsOpen 
			? toogleShow(true) 
			: setTimeout(() => toogleShow(false), 250);
	}, [shoppingCartIsOpen]);

	const handleCloseShoppingCart = () => 
		dispatch(onToogleShoppingCart());

   return (
      isShow && (
			<div className="ShoppingCart">
				<div 
					className={`ShoppingCart__backdrop ${ shoppingCartIsOpen ? 'animate-in fade-in duration-300' : 'animate-out fade-out duration-300' }`}
					onClick={ handleCloseShoppingCart }
				/>
				<div className={`ShoppingCart__content ${ shoppingCartIsOpen ? 'animate-in slide-in-from-right duration-300' : 'animate-out slide-out-to-right duration-300' }`}>					
					<div className="ShoppingCart__header">
						<button className="ShoppingCart__close-button fluid" onClick={ handleCloseShoppingCart }>
							<MdKeyboardBackspace />
						</button>
					</div>
				</div>
			</div>
		)
   );
};