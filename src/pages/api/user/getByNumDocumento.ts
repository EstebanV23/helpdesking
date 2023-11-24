import { NextApiResponse, NextApiRequest } from 'next'
import HdUserProvider from '@/backend/provider/HdUserProvider'
import { ErrorResponseHandler, SuccessResponseHandler } from '@/backend/utils/responseHandler'
import validateTokenRequest from '@/backend/utils/validateTokenRequest'
import { isError } from '@/backend/utils/isInstance'

export default async function getAll (req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    try {
      const auth = req.headers.authorization
      await validateTokenRequest(auth)
      const numDocumento = req.body.numDocumento as string

      const users = await HdUserProvider.getUserByNumDocumento(isNaN(Number(numDocumento)) ? { nomUsuario: numDocumento } : { numDocumento })
      new SuccessResponseHandler({ status: 200, message: 'Usuarios encontrados', data: users }).response(res)
    } catch (error: any) {
      if (isError(error)) return new ErrorResponseHandler({ status: 400, message: 'Error al buscar los usuarios', error: error.message }).response(res)
      new ErrorResponseHandler({ status: 400, message: 'Error no manejado', error: 'Error no manejado', unknownError: error }).response(res)
      console.log(error)
    }
  }
}
