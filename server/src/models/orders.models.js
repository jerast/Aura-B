import { Schema, model } from 'mongoose';

const orderSquema = Schema({
	user: {
		type: Schema.Types.ObjectId,
		ref: 'User',
      required: true,
	},
   date: {
      type: Date,
		default: new Date(),
   },
   total_price: {
      type: Number,
      required: true,
   },
   wholesale: {
      type: Boolean,
      required: true,
   },
   state: {
      type: String,
      required: true,
   }
});

orderSquema.method('toJSON', function() {
	const {__v, _id, ...object} = this.toObject();
	return { id: _id, ...object };
});

export default model('Order', orderSquema);