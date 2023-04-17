import { Router } from 'express';
import {
	createUser,
	deleteUser,
	getUser,
	getUsers,
	updateUser,
	toogleUser,
} from '../controllers/users.controllers.js';

const router = Router();

router.get('/', getUsers);
router.get('/:id', getUser);
router.post('/', createUser);
router.put('/:id', updateUser);
router.delete('/:id', toogleUser);
router.delete('/delete/:id', deleteUser);

export default router;
