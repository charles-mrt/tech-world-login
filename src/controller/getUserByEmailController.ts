import { Request, Response } from 'express'
import { getUserByEmail } from '../services/get/getUserByEmailService'

export const getUserByEmailController = async (req: Request, res: Response) => {
  
  try {
    const  email  = req.query.email as string
    const user = getUserByEmail({ email: email })
    res.status(200).json(user)
  
  } catch (error) {
    if (error instanceof Error) res.status(510).json({ messageError: error.message })
  }
}