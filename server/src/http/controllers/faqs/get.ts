import { makeGetFaqsUseCase } from '@/use-cases/factories/make-get-faqs-use-case'
import { FastifyReply, FastifyRequest } from 'fastify'
import { z } from 'zod'

export async function get(request: FastifyRequest, reply: FastifyReply) {
  const getFaqsQuerySchema = z.object({})

  getFaqsQuerySchema.parse(request.query)

  const getFaqsUseCase = makeGetFaqsUseCase()

  const data = await getFaqsUseCase.execute({
    userId: request.user.sub,
  })

  return reply.status(201).send(data)
}
