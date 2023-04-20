import { getError } from '../middlewares/getError.js';
import User from '../models/users.models.js';

export const getUsers = async (request, response) => {
	try {
		const users = await User.find();

		return response.json({
			ok: true,
			users,
		});
	} catch (error) {
		getError(response, error);
	}
};

export const getUser = async (request, response) => {
	try {
		const { id } = request.params;

		const user = await User.findById(id);

		if (!user) {
			return response.status(404).json({
				ok: false,
				message: `User not found`,
			});
		}

		return response.json({
			ok: true,
			user,
		});
	} catch (error) {
		getError(response, error);
	}
};

export const createUser = async (request, response) => {
	try {
		const user = new User({ ...request.body });
		await user.save();

		return response.json({
			ok: true,
			user,
		});
	} catch (error) {
		getError(response, error);
	}
};

export const updateUser = async (request, response) => {
	try {
		const { id } = request.params;

		const user = await User.findById(id);

		if (!user) {
			return response.status(404).json({
				ok: false,
				message: `User not found`,
			});
		}

		const updatedUser = await User.findByIdAndUpdate(id, { ...request.body }, { new: true });

		return response.json({
			ok: true,
			user: updatedUser,
		});
	} catch (error) {
		getError(response, error);
	}
};

export const toogleUser = async (request, response) => {
	try {
		const { id } = request.params;

		const user = await User.findById(id);

		if (!user) {
			return response.status(404).json({
				ok: false,
				message: `User not found`,
			});
		}

		const updatedUser = await User.findByIdAndUpdate(
			id,
			{ state: !user._doc.state },
			{ new: true }
		);

		return response.json({
			ok: true,
			user: updatedUser,
		});
	} catch (error) {
		getError(response, error);
	}
};

export const deleteUser = async (request, response) => {
	try {
		const { id } = request.params;

		const user = await User.findById(id);

		if (!user) {
			return response.status(404).json({
				ok: false,
				message: `User not found`,
			});
		}

		await User.findByIdAndDelete(id);

		return response.json({
			ok: true,
			message: 'User deleted',
		});
	} catch (error) {
		getError(response, error);
	}
};
