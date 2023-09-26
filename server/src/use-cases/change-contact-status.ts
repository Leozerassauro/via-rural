import { User } from '@prisma/client'
import { UsersRepository } from '@/repositories/users-repository'

interface ChangeContactStatusUseCaseRequest {
  userId: string
  contacted: boolean
}

interface ChangeContactStatusUseCaseResponse {
  user: User
}

export class ChangeContactStatusUseCase {
  constructor(private usersRepository: UsersRepository) {}

  async execute({
    userId,
    contacted,
  }: ChangeContactStatusUseCaseRequest): Promise<ChangeContactStatusUseCaseResponse> {
    const userData = await this.usersRepository.findById(userId)

    if (!userData) {
      throw new Error('Usuário não encontrado')
    }

    userData.contacted = contacted

    const user = await this.usersRepository.edit(userData)

    return {
      user,
    }
  }
}
