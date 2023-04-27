import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { currencyFormatter, dateFormatter } from '@/helpers';

export const OrdersPage = () => {
	const { orders } = useSelector( state => state.session );
	
	if ( !orders.length ) return (
		<>
			<h1>Orders</h1>
			<h4>Loading...</h4>
		</>
	);

	return (
		<>
			<h1>Orders</h1>
			{
				orders.map( order => (
					<div key={ order.id }>
						<Link to={`/account/orders/${ order.id }`}>
							{ dateFormatter( order.date ) } - { currencyFormatter( order.total_price ) }
						</Link>
					</div>
				))
			}
		</>
	);
};
