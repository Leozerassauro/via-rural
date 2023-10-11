// Native
import { FastifyInstance } from 'fastify'
import { verifyJWT } from '@/http/middlewares/verify-jwt'
// Controllers
import { get } from './get'

export async function faqsRoutes(app: FastifyInstance) {
  app.addHook('onRequest', verifyJWT)

  app.get('/faqs', get)
}
