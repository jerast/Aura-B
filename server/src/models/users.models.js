import { Schema, model } from 'mongoose';

const userSquema = Schema({
	dni: {
		type: Number,
		required: true,
		unique: true,
	},
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
	gender: {
		type: String,
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
