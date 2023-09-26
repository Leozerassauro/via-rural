import { FastifyInstance } from 'fastify'
import { editProfile } from './edit'
import { register } from './register'
// Middlewares
import { verifyJWT } from '@/http/middlewares/verify-jwt'
import { verifyUserType } from '@/http/middlewares/verify-user-type'
import { authenticate } from './authenticate'
import { profile } from './profile'
import { changeContactStatus } from './changeContactStatus'

export async function usersRoutes(app: FastifyInstance) {
  app.post('/register', register)
  app.post('/authenticate', authenticate)

  app.get('/profile', { onRequest: [verifyJWT] }, profile)

  app.patch('/edit-profile', { onRequest: [verifyJWT] }, editProfile)

  app.patch(
    '/edit-user-contact-status/:id',
    { onRequest: [verifyJWT, verifyUserType('ADMIN')] },
    changeContactStatus,
  )
}
