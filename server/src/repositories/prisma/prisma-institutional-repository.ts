import { prisma } from '@/lib/prisma'
import { UserType } from '@prisma/client'
import { InstitutionalRepository } from '../institutional-repository'

export class PrismaInstitutionalRepository implements InstitutionalRepository {
  async findByUserType(userType: UserType) {
    const institutional = await prisma.institutional.findMany({
      where: { user_type: userType },
    })

    return institutional
  }
}
