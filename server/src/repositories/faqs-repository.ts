import { Faqs } from '@prisma/client'

export interface FaqsRepository {
  findByUserType(userId: string): Promise<Faqs[] | null>
}
