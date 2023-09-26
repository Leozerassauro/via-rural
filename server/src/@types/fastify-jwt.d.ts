import '@fastify/jwt'

declare module '@fastify/jwt' {
  export interface FastifyJWT {
    user: {
      sub: string
      user_type: 'ADMIN' | 'PRODUCER' | 'SERVICE_PROVIDER'
    }
  }
}
