import { NewsRepository } from '@/repositories/news-repository'
import { News } from '@prisma/client'

interface EditNewsUseCaseRequest {
  newsId: string
  title: string
  body: string
  link: string | undefined
}

interface EditNewsUseCaseResponse {
  news: News
}

export class EditNewsUseCase {
  constructor(private newsRepository: NewsRepository) {}

  async execute({
    newsId,
    title,
    body,
    link,
  }: EditNewsUseCaseRequest): Promise<EditNewsUseCaseResponse> {
    const existingNews = await this.newsRepository.findById(newsId)

    if (!existingNews) {
      throw new Error('News não encontrada')
    }

    existingNews.title = title
    existingNews.body = body
    existingNews.link = link

    const news = await this.newsRepository.edit(existingNews)

    return {
      news,
    }
  }
}
