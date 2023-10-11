import { PrismaFaqsRepository } from '@/repositories/prisma/prisma-faqs-repository'
import { PrismaUsersRepository } from '@/repositories/prisma/prisma-users-repository'
import { GetFaqsUseCase } from '../get-faqs'

export function makeGetFaqsUseCase() {
  const faqsRepository = new PrismaFaqsRepository()
  const userRepository = new PrismaUsersRepository()
  const useCase = new GetFaqsUseCase(faqsRepository, userRepository)

  return useCase
}
