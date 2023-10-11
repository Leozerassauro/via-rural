import { PrismaInstitutionalRepository } from '@/repositories/prisma/prisma-institutional-repository'
import { PrismaUsersRepository } from '@/repositories/prisma/prisma-users-repository'
import { GetInstitutionalUseCase } from '../get-institutional'

export function makeGetInstitutionalUseCase() {
  const institutionalRepository = new PrismaInstitutionalRepository()
  const userRepository = new PrismaUsersRepository()
  const useCase = new GetInstitutionalUseCase(
    institutionalRepository,
    userRepository,
  )

  return useCase
}
