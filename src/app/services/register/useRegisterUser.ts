import api from '@/app/api/axios/api'

interface UserRegister {
  name: string
  email: string
  password: string
}

export const useRegisterUser = async ({ name, email, password }: UserRegister) => {

  try {
    const response = await api.post('/register', {
      name: name,
      email: email,
      password: password
    })
    
    // TESTES PARA UPDATE SEM SEGURANÇA
    if( response.data.id) localStorage.setItem('user_id', response.data.id)
    if( response.data.name) localStorage.setItem('user_name', response.data.name)
    if( response.data.email) localStorage.setItem('user_email', response.data.email)

    return response.data
    
  } catch (error) {
    console.error('error user register', error)
  }

}