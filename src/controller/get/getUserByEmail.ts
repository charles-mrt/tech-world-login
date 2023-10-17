import { Request, Response } from 'express'
import { getUserEmail } from '../../services/get/getUserEmail'

export const getUserByEmail = async (req: Request, res: Response) => {
  
  try {
    const  email  = req.query.email as string

    const user = getUserEmail({ email: email })

    res.status(201).json(user)
  } catch (error) {
    if (error instanceof Error) res.status(500).json({ messageError: error.message })
  }
}