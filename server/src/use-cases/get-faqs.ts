import { FaqsRepository } from '@/repositories/faqs-repository'
import { UsersRepository } from '@/repositories/users-repository'
import { Faqs } from '@prisma/client'

interface GetFaqsUseCaseRequest {
  userId: string
}

interface GetFaqsUseCaseResponse {
  faqs: Faqs[]
}

export class GetFaqsUseCase {
  constructor(
    private faqsRepository: FaqsRepository,
    private usersRepository: UsersRepository,
  ) {}

  async execute({
    userId,
  }: GetFaqsUseCaseRequest): Promise<GetFaqsUseCaseResponse> {
    const user = await this.usersRepository.findById(userId)
    const userType = user?.user_type

    if (!userType) {
      return { faqs: [] }
    }

    const faqs = await this.faqsRepository.findByUserType(userType)

    if (faqs === null) {
      throw new Error(`Segment not found for type '${userType}'`)
    }

    return { faqs }
  }
}
