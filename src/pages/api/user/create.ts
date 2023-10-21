import { NextApiResponse, NextApiRequest } from 'next'
import HdUserProvider from '@/backend/provider/HdUserProvider'
import validateRequest from '@/backend/utils/validation'
import { hdUserCreate } from '@/backend/validationModels/HdUserValidation'
import { newUserType } from '@/backend/interfaceModels/UsuarioType'
import { ErrorResponseHandler, SuccessResponseHandler } from '@/backend/utils/responseHandler'

const userProvider = new HdUserProvider()

export default async function create (req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    try {
      const requestType: newUserType = req.body
      validateRequest(hdUserCreate, req)
      const user = await userProvider.create(requestType)
      new SuccessResponseHandler({ status: 200, message: 'Usuario creado', data: user }).response(res)
    } catch (error) {
      new ErrorResponseHandler({ status: 400, message: 'Error al crear usuario', error: error.message }).response(res)
      console.log(error)
    }
  }
}
