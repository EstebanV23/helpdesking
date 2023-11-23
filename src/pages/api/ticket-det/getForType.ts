import { NextApiRequest, NextApiResponse } from 'next'
import { ErrorResponseHandler, SuccessResponseHandler } from '@/backend/utils/responseHandler'
import validateTokenRequest from '@/backend/utils/validateTokenRequest'
import { isError } from '@/backend/utils/isInstance'
import TicketDet from '@/backend/models/TicketDet'
import HdTicketDetProvider from '@/backend/provider/HdTicketDetProvider'

export default async function getForType (req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    try {
      const auth = req.headers.authorization
      await validateTokenRequest(auth)
      const requestType: TicketDet = req.body
      const { idTicket, idTipoSol } = requestType

      if (!idTicket) throw new Error('El ticket es requerido')

      const ticketDetWithType = await HdTicketDetProvider.getHdTicketDetByIdTicketAndTypeSol(idTicket as number, idTipoSol as number)

      new SuccessResponseHandler({ status: 200, message: 'Detalle del ticket encontrado', data: ticketDetWithType }).response(res)
    } catch (error) {
      console.log(error)
      if (isError(error)) return new ErrorResponseHandler({ status: 400, message: 'Error al encontrar el detalle del ticket', error: error.message }).response(res)
      new ErrorResponseHandler({ status: 400, message: 'Error no manejado', error: 'Error no manejado', unknownError: error }).response(res)
    }
  }
}
