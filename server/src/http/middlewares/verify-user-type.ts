import { FastifyReply, FastifyRequest } from 'fastify'

export function verifyUserType(
  userTypeToVerify: 'ADMIN' | 'PRODUCER' | 'SERVICE_PROVIDER',
) {
  return async (request: FastifyRequest, reply: FastifyReply) => {
    const { user_type } = request.user

    if (user_type !== userTypeToVerify) {
      return reply.status(401).send({ message: 'Não autorizado.' })
    }
  }
}
