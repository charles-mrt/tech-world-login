import { Request, Response } from 'express'
import { updateUser } from '../services/update/updateUserService'

export const updateUserController = async (req: Request, res: Response) => {
  try {
    const { id } = req.query
    const updateUserData = req.body

    const _updateUser = updateUser({ id, ...updateUserData })
    res.status(200).json(_updateUser)
  
  } catch (error) {
    if (error instanceof Error) res.status(500).json({ messageError: error.message })
  }
}