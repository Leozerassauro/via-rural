import { prisma } from '@/lib/prisma'
import { Prisma } from '@prisma/client'
import { NewsRepository } from '../news-repository'

export class PrismaNewsRepository implements NewsRepository {
  async create(data: Prisma.NewsUncheckedCreateInput) {
    const news = await prisma.news.create({
      data,
    })

    return news
  }

  async edit(data: Prisma.NewsUncheckedCreateInput) {
    const news = await prisma.news.update({
      where: { id: data.id },
      data,
    })

    return news
  }

  async delete(id: string) {
    const news = await prisma.news.delete({
      where: {
        id,
      },
    })

    return news
  }

  async findById(id: string) {
    const news = await prisma.news.findUnique({
      where: {
        id,
      },
    })

    return news
  }

  async findMany() {
    const news = await prisma.news.findMany()

    return news
  }
}
