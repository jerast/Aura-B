import { Schema, model } from 'mongoose';

const orderProductSquema = Schema({
	order_id: {
		type: Schema.Types.ObjectId,
		ref: 'Order',
		required: true,
	},
	product_id: {
		type: Schema.Types.ObjectId,
		ref: 'Product',
		required: true,
	},
   prices: {
      retail: {
         type: Number,
         required: true,
      },
      wholesale: {
         type: Number,
         required: true,
      }
   },
   count: {
      type: Number,
      required: true,
   },
});

orderProductSquema.method('toJSON', function() {
	const {__v, _id, ...object} = this.toObject();
	return { id: _id, ...object };
});

export default model('OrderProduct', orderProductSquema);