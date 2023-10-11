import { makeGetInstitutionalUseCase } from '@/use-cases/factories/make-get-institutional-use-case'
import { FastifyReply, FastifyRequest } from 'fastify'
import { z } from 'zod'

export async function get(request: FastifyRequest, reply: FastifyReply) {
  const getInstitutionalQuerySchema = z.object({})

  getInstitutionalQuerySchema.parse(request.query)

  const getInstitutionalUseCase = makeGetInstitutionalUseCase()

  const data = await getInstitutionalUseCase.execute({
    userId: request.user.sub,
  })

  return reply.status(201).send(data)
}
