
import { useRegisterUser } from "@/app/services/register/useRegisterUser"

interface UserProps {
  name: string
  email: string
  password: string
}
export const registerUser = async ({ name, email, password }: UserProps) => {

  try {
    const response = await useRegisterUser({ name, email, password })
    if (response.status === 201) return response.data
    
  } catch (error) {
    console.error('error register user', error)
    throw error
  }

}