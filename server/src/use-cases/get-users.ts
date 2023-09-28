import { GetUsers, UsersRepository } from '@/repositories/users-repository'

interface GetUsersUseCaseResponse {
  users: GetUsers[]
}

export class GetUsersUseCase {
  constructor(private usersRepository: UsersRepository) {}

  async execute(): Promise<GetUsersUseCaseResponse> {
    const users = await this.usersRepository.findAll()

    return {
      users,
    }
  }
}
