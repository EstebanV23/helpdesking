import { NextApiResponse, NextApiRequest } from 'next'
import HdUserProvider from '@/provider/HdUserProvider'
import validateRequest from '@/utils/validation'
import { hdUserCreate } from '@/validationModels/HdUserValidation'
import { newUserType } from '@/interfaceModels/UsuarioType'
import { ErrorResponseHandler, SuccessResponseHandler } from '@/utils/responseHandler'

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
