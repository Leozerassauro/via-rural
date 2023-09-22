import { NewsRepository } from '@/repositories/news-repository'
import { News } from '@prisma/client'

interface DeleteNewsUseCaseRequest {
  newsId: string
}

interface DeleteNewsUseCaseResponse {
  news: News
}

export class DeleteNewsUseCase {
  constructor(private newsRepository: NewsRepository) {}

  async execute({
    newsId,
  }: DeleteNewsUseCaseRequest): Promise<DeleteNewsUseCaseResponse> {
    const news = await this.newsRepository.delete(newsId)

    return {
      news,
    }
  }
}
