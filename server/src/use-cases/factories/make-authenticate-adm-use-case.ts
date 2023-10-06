import { PrismaUsersRepository } from '@/repositories/prisma/prisma-users-repository'
import { AuthenticateAdmUseCase } from '../authenticate-adm'

export function makeAuthenticateAdmUseCase() {
  const usersRepository = new PrismaUsersRepository()
  const authenticateUseCase = new AuthenticateAdmUseCase(usersRepository)

  return authenticateUseCase
}
