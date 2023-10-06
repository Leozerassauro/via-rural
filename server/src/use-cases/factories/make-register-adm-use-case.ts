import { PrismaUsersRepository } from '@/repositories/prisma/prisma-users-repository'
import { RegisterAdmUseCase } from '../register-adm'

export function makeRegisterAdmUseCase() {
  const usersRepository = new PrismaUsersRepository()
  const registerUseCase = new RegisterAdmUseCase(usersRepository)

  return registerUseCase
}
