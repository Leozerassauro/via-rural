import { makeGetNewsUseCase } from '@/use-cases/factories/make-get-news-use-case'
import { FastifyReply, FastifyRequest } from 'fastify'
import { z } from 'zod'

export async function get(request: FastifyRequest, reply: FastifyReply) {
  const getNewsQuerySchema = z.object({})

  getNewsQuerySchema.parse(request.query)

  const getNewsUseCase = makeGetNewsUseCase()

  const data = await getNewsUseCase.execute()

  return reply.status(201).send(data)
}
