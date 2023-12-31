import fastify from 'fastify'
import fastifyJwt from '@fastify/jwt'
import { ZodError } from 'zod'
import { env } from './env'
import { newsRoutes } from './http/controllers/news/routes'
import { usersRoutes } from './http/controllers/users/routes'
import { faqsRoutes } from './http/controllers/faqs/routes'
import { institutionalRoutes } from './http/controllers/institutional/routes'

export const app = fastify()

app.register(fastifyJwt, {
  secret: env.JWT_SECRET,
})

app.register(usersRoutes)
app.register(newsRoutes)
app.register(faqsRoutes)
app.register(institutionalRoutes)

app.setErrorHandler((error, request, reply) => {
  if (error instanceof ZodError) {
    return reply
      .status(400)
      .send({ message: 'Erro de validação.', issues: error.format() })
  }

  if (env.NODE_ENV !== 'production') {
    console.error(error)
  } else {
    // TODO: Should log to an external tool
  }

  return reply.status(500).send({ message: 'Internal server error.' })
})
