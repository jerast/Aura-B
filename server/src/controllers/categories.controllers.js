import { responseError } from '../middlewares/responseError.js';
import Category from '../models/categories.models.js';

export const getCategories = async (request, response) => {
	try {
		const categories = await Category.find();

		return response.json({
			ok: true,
			categories,
		});
	} catch (error) {
		responseError(response, error);
	}
};

export const getCategory = async (request, response) => {
	try {
		const { id } = request.params;

		const category = await Category.findById(id);

		if (!category) {
			return response.status(404).json({
				ok: false,
				message: `Category not found`,
			});
		}

		return response.json({
			ok: true,
			category,
		});
	} catch (error) {
		responseError(response, error);
	}
};

export const createCategory = async (request, response) => {
	try {
		const category = new Category({ ...request.body });
		await category.save();

		return response.json({
			ok: true,
			category,
		});
	} catch (error) {
		responseError(response, error);
	}
};

export const updateCategory = async (request, response) => {
	try {
		const { id } = request.params;
		const { name, description } = request.body;

		const category = await Category.findById(id);

		if (!category) {
			return response.status(404).json({
				ok: false,
				message: `Category not found`,
			});
		}

		if (!name && !description) {
			return response.status(404).json({
				ok: false,
				message: `Request can't be null`,
			});
		}

		const updatedCategory = await Category.findByIdAndUpdate(
			id,
			{ ...request.body },
			{ new: true }
		);

		return response.json({
			ok: true,
			category: updatedCategory,
		});
	} catch (error) {
		responseError(response, error);
	}
};

export const toogleCategory = async (request, response) => {
	try {
		const { id } = request.params;

		const category = await Category.findById(id);

		if (!category) {
			return response.status(404).json({
				ok: false,
				message: `Category not found`,
			});
		}

		const updatedCategory = await Category.findByIdAndUpdate(
			id,
			{ state: !category._doc.state },
			{ new: true }
		);

		return response.json({
			ok: true,
			category: updatedCategory,
		});
	} catch (error) {
		responseError(response, error);
	}
};

export const deleteCategory = async (request, response) => {
	try {
		const { id } = request.params;

		const category = await Category.findById(id);

		if (!category) {
			return response.status(404).json({
				ok: false,
				message: `Category not found`,
			});
		}

		await Category.findByIdAndDelete(id);

		return response.json({
			ok: true,
			message: 'Category deleted',
		});
	} catch (error) {
		responseError(response, error);
	}
};
