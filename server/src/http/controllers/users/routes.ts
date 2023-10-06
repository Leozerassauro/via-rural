import { FastifyInstance } from 'fastify'
import { editProfile } from './edit'
import { register } from './register'
// Middlewares
import { verifyJWT } from '@/http/middlewares/verify-jwt'
import { verifyUserType } from '@/http/middlewares/verify-user-type'
import { authenticate } from './authenticate'
import { profile } from './profile'
import { changeContactStatus } from './changeContactStatus'
import { getUsers } from './getUsers'
import { registerAdm } from './adm/register'
import { authenticateAdm } from './adm/authenticate'

export async function usersRoutes(app: FastifyInstance) {
  app.post('/adm/register', registerAdm)
  app.post('/adm/authenticate', authenticateAdm)

  app.post('/register', register)
  app.post('/authenticate', authenticate)

  app.get(
    '/get-users',
    { onRequest: [verifyJWT, verifyUserType('ADMIN')] },
    getUsers,
  )

  app.get('/profile', { onRequest: [verifyJWT] }, profile)

  app.patch('/edit-profile', { onRequest: [verifyJWT] }, editProfile)

  app.patch(
    '/edit-user-contact-status/:id',
    { onRequest: [verifyJWT, verifyUserType('ADMIN')] },
    changeContactStatus,
  )
}
