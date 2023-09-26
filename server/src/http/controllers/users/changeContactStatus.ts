import { makeChangeContactStatusUseCase } from '@/use-cases/factories/make-change-contact-status-use-case'
import { FastifyReply, FastifyRequest } from 'fastify'
import { z } from 'zod'

export async function changeContactStatus(
  request: FastifyRequest,
  reply: FastifyReply,
) {
  const editUserContactStatusParamsSchema = z.object({
    id: z.string(),
  })

  const editUserContactStatusBodySchema = z.object({
    contacted: z.boolean(),
  })

  const { contacted } = editUserContactStatusBodySchema.parse(request.body)
  const { id } = editUserContactStatusParamsSchema.parse(request.params)

  const editUserContactStatusUseCase = makeChangeContactStatusUseCase()

  await editUserContactStatusUseCase.execute({
    userId: id,
    contacted,
  })

  return reply.status(201).send({ message: 'Usuário editado com sucesso!' })
}
