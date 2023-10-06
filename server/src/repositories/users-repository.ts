import { Prisma, User } from '@prisma/client'

export interface GetUsers {
  name: string
  phone: string
  contacted: boolean
}

export interface UsersRepository {
  create(data: Prisma.UserUncheckedCreateInput): Promise<User>
  edit(data: Prisma.UserUncheckedCreateInput): Promise<User>

  findById(id: string): Promise<User | null>
  findByPhone(phone: string): Promise<User | null>
  findByEmail(email: string): Promise<User | null>
  findAll(): Promise<GetUsers[]>
}
