import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { currencyFormatter } from '@/helpers';
import { CheckoutProductCard } from '@/modules/session';

export const Checkout = () => {
   const { isLoading } = useSelector( state => state.shop );
   const { order, shoppingCart } = useSelector( state => state.app );
	const navigate = useNavigate();

   if ( isLoading ) return;

   if ( shoppingCart.length === 0 ) return navigate('/', { replace: true });

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
					<button className="OrderConfirm__button fluid">Make order</button>
				</div>
			</article>
		</section>
   );
};