import HdTicketProvider from '@/backend/provider/HdTicketProvider'
import { isError } from '@/backend/utils/isInstance'
import { ErrorResponseHandler, SuccessResponseHandler } from '@/backend/utils/responseHandler'
import validateTokenRequest from '@/backend/utils/validateTokenRequest'
import { NextApiRequest, NextApiResponse } from 'next'

export default async function getOne (req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'GET') {
    try {
      const auth = req.headers.authorization
      await validateTokenRequest(auth)
      const idTicket = req.query.idTicket as string
      if (isNaN(Number(idTicket))) throw new Error('El tipo de solicitud debe ser un número')
      const ticket = await HdTicketProvider.getHdTicketById(Number(idTicket))
      new SuccessResponseHandler({ status: 200, message: 'Ticket encontrado', data: ticket }).response(res)
    } catch (error) {
      if (isError(error)) return new ErrorResponseHandler({ status: 400, message: 'Error al buscar el ticket', error: error.message }).response(res)
      new ErrorResponseHandler({ status: 400, message: 'Error no manejado', error: 'Error no manejado', unknownError: error }).response(res)
      console.log(error)
    }
  }
}
