import { useGetUserByEmail } from "@/app/services/getUser/useGetUserByEmail"

interface GetUserByemailProps {
  email: string
}
export const getUserByEmail = async ({ email }: GetUserByemailProps) => {
  try {
    const response = await useGetUserByEmail({ email })

    if (response.status === 200) {
      return response.data.email
    }
  } catch (error) {
    console.error('email already exists', error)
    throw error
  }
}