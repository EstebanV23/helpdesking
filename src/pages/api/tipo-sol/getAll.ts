import { NextApiResponse, NextApiRequest } from 'next'
import { ErrorResponseHandler, SuccessResponseHandler } from '@/backend/utils/responseHandler'
import validateTokenRequest from '@/backend/utils/validateTokenRequest'
import HdTipoSolProvider from '@/backend/provider/HdTipoSolProvider'
import { isError } from '@/backend/utils/isInstance'

export default async function getAll (req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'GET') {
    try {
      const auth = req.headers.authorization
      await validateTokenRequest(auth)
      const tiposSol = await HdTipoSolProvider.getAll()
      new SuccessResponseHandler({ status: 200, message: 'Tipos de solicitud encontrados', data: tiposSol }).response(res)
    } catch (error) {
      if (isError(error)) return new ErrorResponseHandler({ status: 400, message: 'Error al buscar los tipos de solicitud', error: error.message }).response(res)
      new ErrorResponseHandler({ status: 400, message: 'Error no manejado', error: 'Error no manejado', unknownError: error }).response(res)
      console.log(error)
    }
  }
}
