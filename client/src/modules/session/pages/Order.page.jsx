import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { clearActiveOrder, onLoadEnds, onLoadStarts, startLoadingSelectedOrder } from '@/store';

export const OrderPage = () => {
	const { id } = useParams();
	const { orders } = useSelector( state => state.session );
	const { isLoading, activeOrder } = useSelector( state => state.app );
	const dispatch = useDispatch();

	useEffect(() => { 
		if (!isLoading) {
			dispatch( onLoadStarts() )
			dispatch( startLoadingSelectedOrder(id) )
			dispatch( onLoadEnds() )
		}
	}, [orders, isLoading]);

	useEffect(() => () => dispatch( clearActiveOrder() ), []);

	if ( isLoading ) return (
		<>
			<h1>order</h1>
			<h4>Loading...</h4>
		</>
	);

	if ( !activeOrder ) return (
		<>
			<h1>order</h1>
			<h4>Order Not Found</h4>
		</>
	);

	return (
		<>
			<h1>order</h1>
			{ activeOrder.id }
		</>
	);

	// return (
	// 	<>
	// 		<section className="ProductSection">
	// 			<img className="ProductSection__image" src={ resize( activeProduct.image, 500 ) } alt="" />
	// 			<div className="ProductSection__content">
	// 				<div className="ProductSection__data">
	// 					<h1 className="ProductSection__name">{ activeProduct.name }</h1>
	// 					<span className="ProductSection__reference">{ activeProduct.reference }</span>
	// 				</div>
	// 				<div className="ProductSection__prices">
	// 					<span>{ currencyFormatter( activeProduct.prices.retail ) }</span>
	// 					<span><TbDiscountCheckFilled />{ currencyFormatter( activeProduct.prices.wholesale ) }</span>
	// 				</div>
	// 				<span className="ProductSection__description">Description: { activeProduct.description }
	// 				<br />Left: { activeProduct.stock }</span>
	// 				<div className="ProductSection__controls">
	// 					<div>
	// 						<button onClick={ onReduceToShoppingCart } disabled={ productCounter === 0 } >
	// 							<MdOutlineRemove />
	// 						</button>
	// 						<span>{ productCounter }</span>
	// 						<button onClick={ onAddToShoppingCart }>
	// 							<MdOutlineAdd />
	// 						</button>
	// 					</div>
	// 					<div>
	// 						<button className="fluid" onClick={ onAddToShoppingCart }>Add to cart</button>
	// 						{ (productCounter > 0) && <button onClick={ onRemoveToShoppingCart }><MdOutlineDelete /></button> }
	// 					</div>
	// 				</div>
	// 			</div>
	// 		</section>
	// 		<section className="Section">
	// 			<h1 className="Section__title">Related Products</h1>
	// 			<article className="Section__content Section__content--products">
					
	// 			</article>
	// 		</section>
	// 	</>
	// );
};
