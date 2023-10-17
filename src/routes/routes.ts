import express from 'express'
import { userRegister } from '../controller/register/register'
import { getUserByEmail } from '../controller/get/getUserByEmail'
import { update } from '../controller/update/update'

export const router = express.Router()

router.post('/register', userRegister)
router.get('/user', getUserByEmail)
router.put('/user/:id', update)
