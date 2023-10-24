import { z, ZodType } from 'zod'

export interface FormSchema {
  name: ZodType<string>
  email: ZodType<string>
  password: ZodType<string>
}
const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]+$/
const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/

const NAME_MIN_LENGTH = 4
const NAME_MAX_LENGTH = 15
const PASSWORD_MIN_LENGTH = 8
const PASSWORD_MAX_LENGTH = 15

export const zodSchema = z.object({
  name: z
    .string()
    .min(NAME_MIN_LENGTH, `Mínimo ${NAME_MIN_LENGTH} caracteres`)
    .max(NAME_MAX_LENGTH, `Máximo ${NAME_MAX_LENGTH} caracteres`),

  email: z.string().regex(emailRegex, "O email deve ser válido"),

  password: z
  .string()
  .regex(passwordRegex, "A senha deve ser alfanumérica ex: Az1@#? min 8")
    .min(PASSWORD_MIN_LENGTH, `Mínimo ${PASSWORD_MIN_LENGTH} caracteres`)
    .max(PASSWORD_MAX_LENGTH, `Máximo ${PASSWORD_MAX_LENGTH} caracteres`),
})