import { FastifyRequest, FastifyReply } from 'fastify'
import { z } from 'zod'
import { makeAuthenticateUseCase } from '@/use-cases/factories/make-authenticate-use-case'

export async function authenticate(
  request: FastifyRequest,
  reply: FastifyReply,
) {
  const registerBodySchema = z.object({
    phone: z.string(),
  })

  const { phone } = registerBodySchema.parse(request.body)

  try {
    const authenticateUseCase = makeAuthenticateUseCase()

    const { user } = await authenticateUseCase.execute({
      phone,
    })

    const token = await reply.jwtSign(
      {
        user_type: user?.user_type,
      },
      {
        sign: {
          sub: user?.id,
        },
      },
    )

    return reply.status(200).send({ user, token })
  } catch (err) {
    if (err) {
      return reply.status(400).send({ message: err })
    }

    throw err
  }
}
