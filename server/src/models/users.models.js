import { Schema, model } from 'mongoose';

const userSquema = Schema({
	name: {
		type: String,
		required: true,
	},
	email: {
		type: String,
		required: true,
		unique: true,
	},
	phone: {
		type: Number,
		required: true,
		unique: true,
	},
	role: {
		type: Number,
		default: 1,
	},
	state: {
		type: Boolean,
		default: true,
	},
});

userSquema.method('toJSON', function () {
	const { __v, _id, ...object } = this.toObject();
	return { id: _id, ...object };
});

export default model('User', userSquema);
