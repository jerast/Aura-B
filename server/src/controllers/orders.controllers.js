import { getError } from '../middlewares/getError.js';
import Order from '../models/orders.models.js';
import OrderProduct from '../models/orderProducts.models.js';

export const getOrders = async (request, response) => {
	try {
		const { field, value } = request.body;

		let orders;

		if ( !field || !value ) {
			orders = await Order.find();
		}

		if ( field && value ) {
			orders = await Order.find({ [field]: value });
		}

		return response.json({
			ok: true,
			orders
		});
	} 
	catch (error) {
		getError( response, error );
	}
};

export const createOrder = async (request, response) => {
	try {
		const order = new Order({ ...request.body });
		await order.save();

		return response.json({
			ok: true,
			order
		});
	} 
	catch (error) {
		getError( response, error );
	}
	
};

export const getOrderProducts = async (request, response) => {
	try {
		const { id } = request.params;

		const order = await Order.findById( 
			id, 
			{ _id: 0, __v: 0 }
		);

		if ( !order ) {
			return response.status(404).json({
				ok: false,
				message: `order not found`,
			});
		}

		const details = await OrderProduct.find(
			{ order_id: id }, 
			{ _id: 0, order_id: 0 }
		);

		return response.json({
			ok: true,
			order: {
				...order._doc,
				details
			}
		});
	} 
	catch (error) {
		getError( response, error );
	}
};

export const createOrderProduct = async (request, response) => {
	try {
		const { id } = request.params;

		const order = await Order.findById( id );

		if ( !order ) {
			return response.status(404).json({
				ok: false,
				message: `order not found`,
			});
		}

		const orderProduct = new OrderProduct({ order_id: id, ...request.body });
		await orderProduct.save();

		return response.json({
			ok: true,
			orderProduct
		});
	} 
	catch (error) {
		getError( response, error );
	}
};

/* export const updateOrder = async (request, response) => {
	try {
		const { id } = request.params;

		const order = await Order.findById( id );
		
		if ( !order ) {
			return response.status(404).json({
				ok: false,
				message: `Category not found`,
			});
		}

		const updatedOrder = await Order.findByIdAndUpdate( id, { ...request.body }, { new: true } );

		return response.json({
			ok: true,
			order: updatedOrder
		});
	} 
	catch (error) {
		getError( response, error );
	}
}; */

/* export const deleteOrder = async (request, response) => {
	try {
		const { id } = request.params;

		const order = await Order.findById( id );
		
		if ( !order ) {
			return response.status(404).json({
				ok: false,
				message: `Order not found`,
			});
		}

		await Order.findByIdAndDelete( id );

		return response.json({
			ok: true,
			message: 'Order deleted',
		});	
	} 
	catch (error) {
		getError( response, error );
	}
	
}; */
