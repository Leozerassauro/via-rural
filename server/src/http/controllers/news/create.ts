import { makeCreateNewsUseCase } from '@/use-cases/factories/make-create-news-use-case'
import { FastifyReply, FastifyRequest } from 'fastify'
import { z } from 'zod'

export async function createNews(request: FastifyRequest, reply: FastifyReply) {
  const createNewsBodySchema = z.object({
    title: z.string(),
    body: z.string(),
    link: z.union([z.undefined(), z.string()]),
  })

  const { title, body, link } = createNewsBodySchema.parse(request.body)

  const createNewsUseCase = makeCreateNewsUseCase()

  await createNewsUseCase.execute({
    title,
    body,
    link,
  })

  return reply.status(201).send({ message: 'Notícia criada com sucesso!' })
}
