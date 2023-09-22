import { NewsRepository } from '@/repositories/news-repository'
import { News } from '@prisma/client'

interface CreateNewsUseCaseRequest {
  title: string
  body: string
  link: string | undefined
}

interface CreateNewsUseCaseResponse {
  news: News
}

export class CreateNewsUseCase {
  constructor(private newsRepository: NewsRepository) {}

  async execute({
    title,
    body,
    link,
  }: CreateNewsUseCaseRequest): Promise<CreateNewsUseCaseResponse> {
    const news = await this.newsRepository.create({
      title,
      body,
      link,
    })

    return {
      news,
    }
  }
}
