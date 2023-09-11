import { FastifyInstance } from 'fastify'
import { message } from './message'
import { register } from './register'

export async function usersRoutes(app: FastifyInstance) {
  app.post('/register', register)
  app.post('/message', message)
}
