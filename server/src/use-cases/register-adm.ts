import { UsersRepository } from '@/repositories/users-repository'
import { User } from '@prisma/client'
import { hash } from 'bcryptjs'
import { UserAlreadyExistsError } from './errors/user-already-exists-error'

interface RegisterAdmUseCaseRequest {
  name: string
  email: string
  phone: string
  password: string
}

interface RegisterAdmUseCaseResponse {
  user: User
}

export class RegisterAdmUseCase {
  constructor(private usersRepository: UsersRepository) {}

  async execute({
    name,
    email,
    password,
    phone,
  }: RegisterAdmUseCaseRequest): Promise<RegisterAdmUseCaseResponse> {
    const password_hash = await hash(password, 2)

    const userWithSameEmail = await this.usersRepository.findByEmail(email)

    if (userWithSameEmail) {
      throw new UserAlreadyExistsError()
    }

    const user = await this.usersRepository.create({
      name,
      email,
      password_hash,
      phone,
    })

    return {
      user,
    }
  }
}
