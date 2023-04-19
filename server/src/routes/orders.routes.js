import { Router } from 'express';
import {
	getOrders,
	createOrder,
	getOrderProducts,
	createOrderProduct,
} from '../controllers/orders.controllers.js';

const router = Router();

router.get('/', getOrders);
router.post('/', createOrder);

router.get('/:id', getOrderProducts);
router.post('/:id', createOrderProduct);

export default router;
