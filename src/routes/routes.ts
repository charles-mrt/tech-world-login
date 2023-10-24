import express from 'express'
import { registerUserController } from '../controller/registerUserController'
import { getUserByEmailController } from '../controller/getUserByEmailController'
import { getUserByIdController } from '../controller/getUserByIdController'
import { updateUserController } from '../controller/updateUserController'

export const router = express.Router()

router.post('/register', registerUserController)
router.get('/user_email', getUserByEmailController)
router.get('/user_id', getUserByIdController)
router.put('/user_update_by_id', updateUserController)
