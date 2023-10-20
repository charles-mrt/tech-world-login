import { database } from '../../data/database'
const { v4: uuidv4, v4 } = require('uuid')

const NAME_MAX_LENGTH = 15
const NAME_MIN_LENGTH = 3
const PASSWORD_MAX_LENGTH = 20
const PASSWORD_MIN_LENGTH = 8

interface userRegisterProps {
  name: string
  email: string
  password: string
}

const validateFormFields = ({ name, email, password }: userRegisterProps) => {

  if (!name || name.length > NAME_MAX_LENGTH || name.length < NAME_MIN_LENGTH) {
    throw new Error('O nome deve conter entre 3 e 15 caracteres')
  }

  if (!email || !isValidEmail(email)) {
    throw new Error('O email inserido não é válido')
  }

  if (!password || password.length > PASSWORD_MAX_LENGTH || password.length < PASSWORD_MIN_LENGTH || !isValidPassword(password)) {
    throw new Error('A senha deve conter entre 8 e 20 caracteres Alfanumerico')
  }
}

const isValidEmail = (email: string) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return emailRegex.test(email)
}
function isValidPassword(password: string) {
  const passwordRegex = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&#])[A-Za-z\d@$!%*?&#]{8,}$/
  return passwordRegex.test(password)
}

export const registerUser = ({ name, email, password }: userRegisterProps) => {

  const findEmail = database.find(user => user.email === email)
  if (!findEmail) {

    validateFormFields({ name, email, password })

    const id = uuidv4()

    const user = {
      id,
      name: name,
      email: email,
      password: password,
    }

    database.push(user)
    return user

  } else throw new Error('email already exist')
}