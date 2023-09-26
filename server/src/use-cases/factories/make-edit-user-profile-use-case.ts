import { PrismaUsersRepository } from '@/repositories/prisma/prisma-users-repository'
import { EditUserProfileUseCase } from '../edit-user-profile'

export function makeEditUserProfileUseCase() {
  const usersRepository = new PrismaUsersRepository()
  const registerUseCase = new EditUserProfileUseCase(usersRepository)

  return registerUseCase
}
