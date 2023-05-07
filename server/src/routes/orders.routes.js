import { Router } from 'express';
import {
	getOrders,
	createOrder,
} from '../controllers/orders.controllers.js';

const router = Router();

router.get('/', getOrders);
router.post('/', createOrder);

export default router;
