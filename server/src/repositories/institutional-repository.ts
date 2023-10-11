import { Institutional } from '@prisma/client'

export interface InstitutionalRepository {
  findByUserType(userId: string): Promise<Institutional[] | null>
}
