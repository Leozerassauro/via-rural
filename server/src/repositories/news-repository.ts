import { News, Prisma } from '@prisma/client'

export interface NewsRepository {
  create(data: Prisma.NewsUncheckedCreateInput): Promise<News>
  edit(data: Prisma.NewsUncheckedCreateInput): Promise<News>
  delete(id: string): Promise<News>

  findById(id: string): Promise<News | null>
  findMany(): Promise<News[]>
}
