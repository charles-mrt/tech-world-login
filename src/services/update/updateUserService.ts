import { database, UserProps } from "../../data/database"


export const updateUser = ({ id, ...updatedUserData }: UserProps) => {

  const findEmail = database.find(user => user.email === updatedUserData.email && user.id !== id)

  const user = database.find(user => user.id === id)

  if (!findEmail && user) Object.assign(user, updatedUserData)
}