import { makeGetUsersUseCase } from '@/use-cases/factories/make-get-users-use-case'
import { FastifyRequest, FastifyReply } from 'fastify'

export async function getUsers(request: FastifyRequest, reply: FastifyReply) {
  const getUsers = makeGetUsersUseCase()

  const { users } = await getUsers.execute()

  return reply.status(200).send({
    users,
  })
}
