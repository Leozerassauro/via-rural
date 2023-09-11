import { makeRegisterUseCase } from '@/use-cases/factories/make-register-use-case'
import { UserType } from '@prisma/client'
import { FastifyReply, FastifyRequest } from 'fastify'
import { z } from 'zod'

export async function register(request: FastifyRequest, reply: FastifyReply) {
  const registerBodySchema = z.object({
    name: z.string(),
    phone: z.string(),
    user_type: z.nativeEnum(UserType),
  })

  const { name, phone, user_type } = registerBodySchema.parse(request.body)

  const registerUseCase = makeRegisterUseCase()

  await registerUseCase.execute({
    name,
    phone,
    user_type,
  })

  return reply.status(201).send({ message: 'Usuário cadastrado com sucesso' })
}
