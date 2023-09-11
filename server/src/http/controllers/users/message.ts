import { FastifyReply, FastifyRequest } from 'fastify'
import { Twilio } from 'twilio'
import { z } from 'zod'

export async function message(request: FastifyRequest, reply: FastifyReply) {
  const twilioAccountSid = 'AC993d91986b0045cea340f49df015cbab'
  const twilioAuthToken = 'cf26fda07cccd0855e859a6bec3a6e1a'
  // const twilioWhatsAppNumber = 'whatsapp:+555499789415'
  const twilioWhatsAppNumber = 'whatsapp:+555499938296'
  const twilioClient = new Twilio(twilioAccountSid, twilioAuthToken)

  const messageBodySchema = z.object({
    message: z.string(),
    // recipient: z.string(),
  })

  const { message, recipient } = messageBodySchema.parse(request.body)

  const messageUseCase = await twilioClient.messages.create({
    body: message,
    from: 'whatsapp:+14155238886',
    to: twilioWhatsAppNumber,
  })

  reply.send({
    message: 'Mensagem enviada com sucesso',
    sid: messageUseCase.sid,
  })
}
