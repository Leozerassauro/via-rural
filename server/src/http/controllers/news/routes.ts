import { FastifyInstance } from 'fastify'
import { createNews } from './create'
import { deleteNews } from './delete'
import { editNews } from './edit'
import { get } from './get'

export async function newsRoutes(app: FastifyInstance) {
  app.get('/get-news', get)

  app.post('/create-news', createNews)

  app.patch('/edit-news/:id', editNews)

  app.delete('/delete-news/:id', deleteNews)
}
