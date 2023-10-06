import { prisma } from '@/lib/prisma'
import { Prisma } from '@prisma/client'
import { UsersRepository } from '../users-repository'

export class PrismaUsersRepository implements UsersRepository {
  async create(data: Prisma.UserUncheckedCreateInput) {
    const user = await prisma.user.create({
      data,
    })

    return user
  }

  async edit(data: Prisma.UserUncheckedCreateInput) {
    const user = await prisma.user.update({
      where: { id: data.id },
      data,
    })

    return user
  }

  async findById(id: string) {
    const user = await prisma.user.findUnique({
      where: {
        id,
      },
    })

    return user
  }

  async findByPhone(phone: string) {
    const user = await prisma.user.findFirst({
      where: {
        phone,
      },
    })

    return user
  }

  async findByEmail(email: string) {
    const user = await prisma.user.findUnique({
      where: {
        email,
      },
    })

    return user
  }

  async findAll() {
    const users = await prisma.user.findMany({
      select: {
        id: true,
        name: true,
        phone: true,
        contacted: true,
      },
      orderBy: {
        created_at: 'desc',
      },
    })

    return users
  }
}
