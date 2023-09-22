import { makeDeleteNewsUseCase } from '@/use-cases/factories/make-delete-news-use-case'
import { FastifyReply, FastifyRequest } from 'fastify'
import { z } from 'zod'

export async function deleteNews(request: FastifyRequest, reply: FastifyReply) {
  const deleteNewsQuerySchema = z.object({
    id: z.string(),
  })

  const { id } = deleteNewsQuerySchema.parse(request.params)

  const deleteNewsUseCase = makeDeleteNewsUseCase()

  await deleteNewsUseCase.execute({
    newsId: id,
  })

  return reply.status(201).send({ message: 'Notícia deletada com sucesso!' })
}
