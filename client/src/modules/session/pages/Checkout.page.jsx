import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { currencyFormatter } from '@/helpers';
import { startSavingOrder } from '@/store';
import { CheckoutProductCard } from '@/modules/session';
import { useEffect } from 'react';

export const Checkout = () => {
   
   const { isLoading, isSaving, order, shoppingCart } = useSelector( state => state.app );
	const dispatch = useDispatch();
	const navigate = useNavigate();
	
	useEffect(() => {
		( !isLoading && !shoppingCart.length ) && navigate('/', { replace: true })
	}, [ isLoading ]);

	if ( isLoading ) return;
	
	const handleSavingOrder = () => {
		dispatch( startSavingOrder() );
		navigate( '/account/orders' );
	};

   return (
		<section className="Section ">
			<h1 className="Section__title">Checkout</h1>
			<article className="OrderConfirm">
				<div className="OrderConfirm__list">
					{
						(!isLoading && !!shoppingCart.length) && 
							shoppingCart.map( item => <CheckoutProductCard key={ item.product } id={ item.product }/> ) 
					}
				</div>
				<div className="OrderConfirm__resume">
					<table>
						<thead>
							<tr>
								<th colSpan={ 2 }>Resume</th>
							</tr>
						</thead>
						<tbody>
							<tr>
								<td>Total Products</td>
								<td>{ order.total_products } products</td>
							</tr>
							<tr className="OrderConfirm__discount">
								<td>Discount</td>
								<td>
									{
										currencyFormatter( order.total_products >= 6 
											? (order.total_prices.retail - order.total_prices.wholesale) * (-1)
											: 0 ) 
									}
								</td>
							</tr>
							<tr className="OrderConfirm__total">
								<td>Total</td>
								<td>
									{ 
										currencyFormatter( order.total_products >= 6 
											? order.total_prices.wholesale 
											: order.total_prices.retail ) 
									}
								</td>
							</tr>
						</tbody>
					</table>
					<button 
						className="OrderConfirm__button fluid" 
						onClick={ handleSavingOrder } 
						disabled={ isSaving }
					>
						{ isSaving ? '...' : 'Make order' }
					</button>
				</div>
			</article>
		</section>
   );
};