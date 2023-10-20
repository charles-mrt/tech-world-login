import { database, UserProps } from "../../data/database"


export const updateUser = ({ id, ...updatedUserData }: UserProps) => {

  const findEmail = database.find(user => user.email === updatedUserData.email)
  const user = database.find(user => user.id === id)

  if (!findEmail && user) { 
    Object.assign(user, updatedUserData)
  } else {
    if (!user) throw new Error('user not find')
  }
}