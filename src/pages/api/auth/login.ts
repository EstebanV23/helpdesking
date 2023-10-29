import { NextApiResponse, NextApiRequest } from 'next'
import HdUserProvider from '@/backend/provider/HdUserProvider'
import { loginRequestType } from '@/backend/models/Usuario'
import { ErrorResponseHandler, SuccessResponseHandler } from '@/backend/utils/responseHandler'
import validateRequest from '@/backend/utils/validation'
import { hdUserLogin } from '@/backend/validationModels/HdUserValidation'
import { isError } from '@/backend/utils/isInstance'

export default async function login (req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    try {
      const { emailUsuario, password }: loginRequestType = req.body
      validateRequest(hdUserLogin, req)
      const userFound = await HdUserProvider.loginByEmail(emailUsuario, password)
      if (userFound === null) throw new Error('Credenciales no válidas')
      new SuccessResponseHandler({ status: 200, message: 'Usuario encontrado', data: userFound }).response(res)
      res.status(200).json({ message: 'hola' })
    } catch (error) {
      if (isError(error)) new ErrorResponseHandler({ status: 400, message: 'Credenciales no válidas', error: error.message }).response(res)
      new ErrorResponseHandler({ status: 400, message: 'Error no manejado', error: 'Error no manejado', unknownError: error }).response(res)
    }
  }
}
