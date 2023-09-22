import { PrismaNewsRepository } from '@/repositories/prisma/prisma-news-repository'
import { EditNewsUseCase } from '../edit-news'

export function makeEditNewsUseCase() {
  const newsRepository = new PrismaNewsRepository()
  const useCase = new EditNewsUseCase(newsRepository)

  return useCase
}
