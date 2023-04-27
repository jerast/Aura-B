import { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { clearActiveOrder, startLoadingSelectedOrder } from '@/store';
import { currencyFormatter, dateFormatter } from '@/helpers';

export const OrderPage = () => {
	const { id } = useParams();
	const { orders, activeOrder } = useSelector( state => state.session );
	const { products } = useSelector( state => state.shop );
	const dispatch = useDispatch();
	
	useEffect(() => { 
		dispatch( startLoadingSelectedOrder(id) );
	}, [orders]);

	useEffect(() => () => dispatch( clearActiveOrder() ), []);

	if ( !activeOrder || !products.length ) return (
		<>
			<h1>Order</h1>
			<h4>Loading...</h4>
		</>
	);

	return (
		<>
			<h1>Order</h1>
			<div>
				<h4>{ (activeOrder) && id }</h4>
				<div>{ dateFormatter( activeOrder.date ) }</div>
				<div>{ currencyFormatter( activeOrder.total_price ) }</div>
				<div>{ activeOrder.state }</div>
				<ul>
					{
						activeOrder.details.map( (detail, index) => {
							const item = products.find( product => product.id === detail.product_id );

							return ( 
								<p key={ index }>
									<Link to={`/products/${ item.id }`}>{ item.name }</Link><br/>
									<span>{ item.reference }</span><br/>
									<span>{ currencyFormatter( (activeOrder.wholesale) ? detail.prices.wholesale : detail.prices.retail ) }</span><br/>
									<span>Count: { detail.count }</span><br/>
								</p>
							);
						})
					}
				</ul>
			</div>
		</>
	);
};
