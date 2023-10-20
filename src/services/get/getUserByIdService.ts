import { database } from "../../data/database"

interface getUserByIdProps {
  id: string
}

export const getUserById = ({ id }: getUserByIdProps) => {
  const user = database.find(user => user.id === id)
  return user
}