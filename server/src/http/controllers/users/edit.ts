import { makeEditUserProfileUseCase } from '@/use-cases/factories/make-edit-user-profile-use-case'
import { FastifyReply, FastifyRequest } from 'fastify'
import { z } from 'zod'

export async function editProfile(
  request: FastifyRequest,
  reply: FastifyReply,
) {
  const editProfileBodySchema = z.object({
    name: z.string(),
    phone: z.string(),
  })

  const { name, phone } = editProfileBodySchema.parse(request.body)

  const editProfileUseCase = makeEditUserProfileUseCase()

  await editProfileUseCase.execute({
    userId: request.user.sub,
    name,
    phone,
  })

  return reply.status(201).send({ message: 'Usuário editado com sucesso!' })
}
