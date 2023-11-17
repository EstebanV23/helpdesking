import { NextApiResponse, NextApiRequest } from 'next'
import HdUserProvider from '@/backend/provider/HdUserProvider'
import validateRequest from '@/backend/utils/validation'
import { hdUserCreate } from '@/backend/validationModels/HdUserValidation'
import Usuario from '@/backend/models/Usuario'
import { ErrorResponseHandler, SuccessResponseHandler } from '@/backend/utils/responseHandler'

export default async function create (req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    try {
      const requestType: Usuario = req.body
      validateRequest(hdUserCreate, req)
      const user = await HdUserProvider.createUser(requestType)
      new SuccessResponseHandler({ status: 200, message: 'Usuario creado', data: user }).response(res)
    } catch (error) {
      new ErrorResponseHandler({ status: 400, message: 'Error al crear usuario', error: error.message }).response(res)
      console.log(error)
    }
  }
}
