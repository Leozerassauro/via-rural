import { verifyJWT } from '@/http/middlewares/verify-jwt'
import { verifyUserType } from '@/http/middlewares/verify-user-type'
import { FastifyInstance } from 'fastify'
import { createNews } from './create'
import { deleteNews } from './delete'
import { editNews } from './edit'
import { get } from './get'

export async function newsRoutes(app: FastifyInstance) {
  app.addHook('onRequest', verifyJWT)

  app.get('/get-news', get)

  app.post('/create-news', { onRequest: [verifyUserType('ADMIN')] }, createNews)

  app.patch(
    '/edit-news/:id',
    { onRequest: [verifyUserType('ADMIN')] },
    editNews,
  )

  app.delete(
    '/delete-news/:id',
    { onRequest: [verifyUserType('ADMIN')] },
    deleteNews,
  )
}
