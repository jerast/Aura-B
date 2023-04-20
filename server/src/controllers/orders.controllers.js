import { getError } from '../middlewares/getError.js';
import Order from '../models/orders.models.js';
import OrderProduct from '../models/orderProducts.models.js';
import Product from '../models/products.models.js';

export const getOrders = async (request, response) => {
	try {
		const { field, value } = request.body;

		let orders;

		if (!field || !value) {
			orders = await Order.find();
		}

		if (field && value) {
			orders = await Order.find({ [field]: value });
		}

		return response.json({
			ok: true,
			orders,
		});
	} catch (error) {
		getError(response, error);
	}
};

export const createOrder = async (request, response) => {
	try {
		const order = new Order({ ...request.body });
		await order.save();

		return response.json({
			ok: true,
			order,
		});
	} catch (error) {
		getError(response, error);
	}
};

export const getOrderProducts = async (request, response) => {
	try {
		const { id } = request.params;

		const order = await Order.findById(id, { _id: 0, __v: 0 });

		if (!order) {
			return response.status(404).json({
				ok: false,
				message: `order not found`,
			});
		}

		const details = await OrderProduct.find({ order_id: id }, { _id: 0, order_id: 0 });

		return response.json({
			ok: true,
			order: {
				...order._doc,
				details,
			},
		});
	} catch (error) {
		getError(response, error);
	}
};

export const createOrderProduct = async (request, response) => {
	try {
		const { id } = request.params;
		const { product_id, count } = request.body;

		const order = await Order.findById(id);
		if (!order) {
			return response.status(404).json({
				ok: false,
				message: `order not found`,
			});
		}

		const { stock } = await Product.findById(product_id);
		await Product.findByIdAndUpdate(product_id, { stock: stock - count });

		const orderProduct = new OrderProduct({ order_id: id, ...request.body });
		await orderProduct.save();

		return response.json({
			ok: true,
			orderProduct,
		});
	} catch (error) {
		getError(response, error);
	}
};
