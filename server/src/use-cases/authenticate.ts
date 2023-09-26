import { UsersRepository } from '@/repositories/users-repository'
import { User } from '@prisma/client'

interface AuthenticateUseCaseRequest {
  phone: string
}

interface AuthenticateUseCaseResponse {
  user: User | null
}

export class AuthenticateUseCase {
  constructor(private usersRepository: UsersRepository) {}

  async execute({
    phone,
  }: AuthenticateUseCaseRequest): Promise<AuthenticateUseCaseResponse> {
    const user = await this.usersRepository.findByPhone(phone)

    return {
      user,
    }
  }
}
