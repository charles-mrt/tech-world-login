import { Request, Response } from 'express'
import { register } from '../../services/register/registerUser'
import { UserProps } from '../../data/database'

export const userRegister = async (req: Request, res: Response) => {
  
  try {
    const { name, email, password } = req.body

    const userRegisterData: UserProps = {
      name: name,
      email: email,
      password: password,
    }

    const userRegisterResult = register(userRegisterData)
    res.status(201).json(userRegisterResult)
  } catch (error) {
    if (error instanceof Error) res.status(500).json({ messageError: error.message })
  }
}