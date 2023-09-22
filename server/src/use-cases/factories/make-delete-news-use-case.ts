import { PrismaNewsRepository } from '@/repositories/prisma/prisma-news-repository'
import { DeleteNewsUseCase } from '../delete-news'

export function makeDeleteNewsUseCase() {
  const newsRepository = new PrismaNewsRepository()
  const useCase = new DeleteNewsUseCase(newsRepository)

  return useCase
}
