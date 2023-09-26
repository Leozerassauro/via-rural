export class CustomerAlreadyExistsError extends Error {
  constructor() {
    super('Esse cliente já existe no banco de dados.')
  }
}
