import { NextApiResponse, NextApiRequest } from 'next'
import { ErrorResponseHandler, SuccessResponseHandler } from '@/backend/utils/responseHandler'
import validateTokenRequest from '@/backend/utils/validateTokenRequest'
import { isError } from '@/backend/utils/isInstance'
import HdBaseDatosProvider from '@/backend/provider/HdBaseDatosProvider'

export default async function getAll (req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'GET') {
    try {
      const auth = req.headers.authorization
      await validateTokenRequest(auth)
      const baseDatos = await HdBaseDatosProvider.getAll()
      new SuccessResponseHandler({ status: 200, message: 'Tipos de solicitud encontrados', data: baseDatos }).response(res)
    } catch (error) {
      if (isError(error)) return new ErrorResponseHandler({ status: 400, message: 'Error al buscar los tipos de solicitud', error: error.message }).response(res)
      new ErrorResponseHandler({ status: 400, message: 'Error no manejado', error: 'Error no manejado', unknownError: error }).response(res)
      console.log(error)
    }
  }
}
