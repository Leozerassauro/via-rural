import fastify from 'fastify'
import { ZodError } from 'zod'
import { env } from './env'
import { newsRoutes } from './http/controllers/news/routes'
import { usersRoutes } from './http/controllers/users/routes'

export const app = fastify()

app.register(usersRoutes)
app.register(newsRoutes)

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
