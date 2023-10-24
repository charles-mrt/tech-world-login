import api from '@/app/api/axios/api'

interface UserRegister {
  id: string
  name: string
  email: string
  password: string
}

export const useUpdateUser = async ({ id, name, email, password }: UserRegister) => {

  try {
    const response = await api.put(`/user_update_by_id?id=${id}`, {
      id: id,
      name: name,
      email: email,
      password: password
    })
    return response.data
    
  } catch (error) {
    console.error('error user register', error)
  }

}