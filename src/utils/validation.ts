import { ObjectSchema } from 'joi'
import { NextApiRequest } from 'next'

function validateRequest (schemaValidator: ObjectSchema, data: NextApiRequest, shapeData: 'body' | 'query' = 'body'): void {
  const { error } = schemaValidator.validate(data[shapeData])
  if (error) {
    throw new Error(error.message)
  }
}

export default validateRequest
