import { prisma } from '@/lib/prisma'
import { UserType } from '@prisma/client'
import { FaqsRepository } from '../faqs-repository'

export class PrismaFaqsRepository implements FaqsRepository {
  async findByUserType(userType: UserType) {
    const faqs = await prisma.faqs.findMany({
      where: { user_type: userType },
    })

    return faqs
  }
}
