import { User } from '@prisma/client'
import { UsersRepository } from '@/repositories/users-repository'

interface EditUserProfileUseCaseRequest {
  userId: string
  name: string
  phone: string
}

interface EditUserProfileUseCaseResponse {
  user: User
}

export class EditUserProfileUseCase {
  constructor(private usersRepository: UsersRepository) {}

  async execute({
    userId,
    name,
    phone,
  }: EditUserProfileUseCaseRequest): Promise<EditUserProfileUseCaseResponse> {
    const userData = await this.usersRepository.findById(userId)

    if (!userData) {
      throw new Error('Usuário não encontrado')
    }

    userData.name = name
    userData.phone = phone

    const user = await this.usersRepository.edit(userData)

    return {
      user,
    }
  }
}
