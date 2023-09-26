import { PrismaUsersRepository } from '@/repositories/prisma/prisma-users-repository'
import { ChangeContactStatusUseCase } from '../change-contact-status'

export function makeChangeContactStatusUseCase() {
  const usersRepository = new PrismaUsersRepository()
  const registerUseCase = new ChangeContactStatusUseCase(usersRepository)

  return registerUseCase
}
