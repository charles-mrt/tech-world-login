
import { database } from '../../data/database'

interface getUserProps {
  email: string
}

export const getUserByEmail = ({ email }: getUserProps) => {
  const user = database.find(user => user.email === email)
  return user
}