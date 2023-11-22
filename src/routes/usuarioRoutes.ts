import { Router } from 'express';
import { createUser } from '../controllers/userController';

const router = Router();

// Auth, register & user confirmation
router.post('/', createUser);

export default router;
