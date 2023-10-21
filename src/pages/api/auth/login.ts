import { NextApiResponse, NextApiRequest } from 'next'
import HdUserProvider from '@/backend/provider/HdUserProvider'
import { loginRequestType } from '@/backend/interfaceModels/UsuarioType'
import { ErrorResponseHandler, SuccessResponseHandler } from '@/backend/utils/responseHandler'
import validateRequest from '@/backend/utils/validation'
import { hdUserLogin } from '@/backend/validationModels/HdUserValidation'

const userProvider = new HdUserProvider()

export default async function login (req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    try {
      const { emailUsuario, password }: loginRequestType = req.body
      validateRequest(hdUserLogin, req)
      const userFound = await userProvider.getByEmail(emailUsuario, password)
      if (userFound === null) throw new Error('Credenciales no válidas')
      new SuccessResponseHandler({ status: 200, message: 'Usuario encontrado', data: userFound }).response(res)
    } catch (error) {
      console.log(error)
      new ErrorResponseHandler({ status: 400, message: 'Error al buscar usuario', error: error.message }).response(res)
    }
  }
}
