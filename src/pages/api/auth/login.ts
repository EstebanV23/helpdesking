import { NextApiResponse, NextApiRequest } from 'next'
import HdUserProvider from '@/backend/provider/HdUserProvider'
import { loginRequestType } from '@/backend/models/Usuario'
import { ErrorResponseHandler, SuccessResponseHandler } from '@/backend/utils/responseHandler'
import validateRequest from '@/backend/utils/validation'
import { hdUserLogin } from '@/backend/validationModels/HdUserValidation'
import { isError } from '@/backend/utils/isInstance'
import { jwtCreateToken } from '@/backend/utils/jwtHandler'

export default async function login (req: NextApiRequest, res: NextApiResponse) {
  try {
    const requestInfo: loginRequestType = req.body
    validateRequest(hdUserLogin, req)
    const userFound = await HdUserProvider.loginByEmailNumDoc(requestInfo)
    if (userFound === null) throw new Error('Credenciales no válidas')
    const { idUsuario, numDocumento, nomUsuario, idRol, idCargo } = userFound
    const token = await jwtCreateToken({ payload: { idUsuario, numDocumento, nomUsuario, idRol, idCargo } })
    new SuccessResponseHandler({ status: 200, message: 'Usuario encontrado', data: { user: userFound, token } }).response(res)
  } catch (error) {
    if (isError(error)) return new ErrorResponseHandler({ status: 400, message: 'Credenciales no válidas', error: error.message }).response(res)
    new ErrorResponseHandler({ status: 400, message: 'Error no manejado', error: 'Error no manejado', unknownError: error }).response(res)
  }
}
