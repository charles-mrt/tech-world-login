import { database, UserProps } from "../../data/database"


export const updateUser = ({ id, ...updatedUserData }: UserProps) => {

  const user = database.find(user => user.id === id)
  console.log(user?.email)
  if (!user) throw new Error('user not find')
  Object.assign(user, updatedUserData)
}