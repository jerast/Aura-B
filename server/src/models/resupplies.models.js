import { Schema, model } from 'mongoose';

const resupplySquema = Schema({
	
});

resupplySquema.method('toJSON', function() {
	const { __v, _id, ...object } = this.toObject();
	return { id: _id, ...object };
});

export default model('Resupply', resupplySquema);