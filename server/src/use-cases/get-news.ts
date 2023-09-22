import { NewsRepository } from '@/repositories/news-repository'
import { News } from '@prisma/client'

interface GetNewsUseCaseResponse {
  news: News[]
}

export class GetNewsUseCase {
  constructor(private newsRepository: NewsRepository) {}

  async execute(): Promise<GetNewsUseCaseResponse> {
    const news = await this.newsRepository.findMany()

    return {
      news,
    }
  }
}
