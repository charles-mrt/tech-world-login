import { Request, Response } from 'express'
import { registerUser } from '../services/register/registerUserService'
import { UserProps } from '../data/database'

export const registerUserController = async (req: Request, res: Response) => {
  try {
    const { name, email, password } = req.body

    const userRegisterData: UserProps = {
      name: name,
      email: email,
      password: password,
    }

    const userRegisterResult = registerUser(userRegisterData)
    res.status(201).json(userRegisterResult)
  
  } catch (error) {
    if (error instanceof Error) res.status(500).json({ messageError: error.message })
  }
}