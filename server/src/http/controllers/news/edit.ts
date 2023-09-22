import { makeEditNewsUseCase } from '@/use-cases/factories/make-edit-news-use-case'
import { FastifyReply, FastifyRequest } from 'fastify'
import { z } from 'zod'

export async function editNews(request: FastifyRequest, reply: FastifyReply) {
  const editNewsParamsSchema = z.object({
    id: z.string(),
  })

  const editNewsBodySchema = z.object({
    title: z.string(),
    body: z.string(),
    link: z.union([z.undefined(), z.string()]),
  })

  const { title, body, link } = editNewsBodySchema.parse(request.body)
  const { id } = editNewsParamsSchema.parse(request.params)

  const editNewsUseCase = makeEditNewsUseCase()

  await editNewsUseCase.execute({
    newsId: id,
    title,
    body,
    link,
  })

  return reply.status(201).send({ message: 'Notícia editada com sucesso!' })
}
