import { InstitutionalRepository } from '@/repositories/institutional-repository'
import { UsersRepository } from '@/repositories/users-repository'
import { Institutional } from '@prisma/client'

interface GetInstitutionalUseCaseRequest {
  userId: string
}

interface GetInstitutionalUseCaseResponse {
  institutional: Institutional[]
}

export class GetInstitutionalUseCase {
  constructor(
    private institutionalRepository: InstitutionalRepository,
    private usersRepository: UsersRepository,
  ) {}

  async execute({
    userId,
  }: GetInstitutionalUseCaseRequest): Promise<GetInstitutionalUseCaseResponse> {
    const user = await this.usersRepository.findById(userId)
    const userType = user?.user_type

    if (!userType) {
      return { institutional: [] }
    }

    const institutional =
      await this.institutionalRepository.findByUserType(userType)

    if (institutional === null) {
      throw new Error(`Segment not found for type '${userType}'`)
    }

    return { institutional }
  }
}
