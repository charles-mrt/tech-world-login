
import { useUpdateUser } from "@/app/services/updateUser/useUpdateUser"

interface UserProps { 
  name: string
  email: string
  password: string
}
export const updateUser = async ({name, email, password }: UserProps) => {

  //TESTE PARA UPDATE SEM SEGURANÇA
 const id = localStorage.getItem('user_id') ?? ""
  console.log("ID " + id)
  try {
    const response = await useUpdateUser({id, name, email, password })
    if (response.status === 201) return response.data
  } catch (error) {
    console.error('error register user', error)
    throw error
  }

}