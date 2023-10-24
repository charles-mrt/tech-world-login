import api from "@/app/api/axios/api"

interface UseGetUserByEmailProps {
  email: string
}

export const useGetUserByEmail = async ({ email }: UseGetUserByEmailProps) => {
  
  try {
    const response = await api.get(`/user_email?=${email}`)    
    return response
  } catch (error) {
    console.error('Error while check email', error)
    throw error
  }

}