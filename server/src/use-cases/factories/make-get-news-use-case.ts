import { PrismaNewsRepository } from '@/repositories/prisma/prisma-news-repository'
import { GetNewsUseCase } from '../get-news'

export function makeGetNewsUseCase() {
  const newsRepository = new PrismaNewsRepository()
  const useCase = new GetNewsUseCase(newsRepository)

  return useCase
}
