import { NextApiResponse, NextApiRequest } from 'next'
import { ErrorResponseHandler, SuccessResponseHandler } from '@/backend/utils/responseHandler'
import validateTokenRequest from '@/backend/utils/validateTokenRequest'
import HdListaProvider from '@/backend/provider/HdListaProvider'
import { isError } from '@/backend/utils/isInstance'

export default async function getAll (req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'GET') {
    try {
      const auth = req.headers.authorization
      await validateTokenRequest(auth)
      const typeList = req.query.type as string
      if (isNaN(Number(typeList))) throw new Error('El tipo de solicitud debe ser un número')
      const subTypes = await HdListaProvider.getListaFromType(Number(typeList))
      new SuccessResponseHandler({ status: 200, message: 'Lista por el tipo encontrados', data: subTypes }).response(res)
    } catch (error) {
      if (isError(error)) return new ErrorResponseHandler({ status: 400, message: 'Error al buscar la lista', error: error.message }).response(res)
      new ErrorResponseHandler({ status: 400, message: 'Error no manejado', error: 'Error no manejado', unknownError: error }).response(res)
      console.log(error)
    }
  }
}
