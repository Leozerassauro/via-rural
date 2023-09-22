import { PrismaNewsRepository } from '@/repositories/prisma/prisma-news-repository'
import { CreateNewsUseCase } from '../create-news'

export function makeCreateNewsUseCase() {
  const newsRepository = new PrismaNewsRepository()
  const useCase = new CreateNewsUseCase(newsRepository)

  return useCase
}
