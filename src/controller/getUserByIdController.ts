import { Request, Response } from 'express'
import { getUserById } from '../services/get/getUserByIdService'

export const getUserByIdController = async (req: Request, res: Response) => {
  
  try {
    const  id  = req.query.id as string
    const user = getUserById({ id: id })
    res.status(200).json(user)
  
  } catch (error) {
    if (error instanceof Error) res.status(510).json({ messageError: error.message })
  }
}