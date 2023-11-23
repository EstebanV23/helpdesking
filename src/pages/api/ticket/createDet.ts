import { NextApiRequest, NextApiResponse } from 'next'
import { ErrorResponseHandler, SuccessResponseHandler } from '@/backend/utils/responseHandler'
import validateTokenRequest from '@/backend/utils/validateTokenRequest'
import { isError } from '@/backend/utils/isInstance'
import TicketDet from '@/backend/models/TicketDet'
import HdTicketDetProvider from '@/backend/provider/HdTicketDetProvider'

export default async function create (req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    try {
      const auth = req.headers.authorization
      await validateTokenRequest(auth)
      const requestType: TicketDet = req.body
      const { idTicket, idTipoSol } = requestType

      if (!idTicket) throw new Error('El ticket es requerido')

      const detActive = await HdTicketDetProvider.getHdTicketDetByIdTicket(idTicket as number) as TicketDet

      if (!detActive) throw new Error('Número de ticket inválido')

      const typeOfTicketActive = detActive.idTipoSol
      console.log({ typeOfTicketActive, idTipoSol })
      if (typeOfTicketActive === idTipoSol) {
        requestType.idTicketDet = detActive.idTicketDet
        console.log({ requestType })
        const newTicket = await HdTicketDetProvider.updateTicketDet(requestType)
        new SuccessResponseHandler({ status: 200, message: `Se ha actualizado el detalle para el ticket ${idTicket}`, data: newTicket }).response(res)
        return
      }

      await HdTicketDetProvider.onlyTicketDetDesactive(detActive?.idTicketDet as number)
      const ticketDetWithType = await HdTicketDetProvider.getHdTicketDetByIdTicketAndTypeSol(idTicket as number, idTipoSol as number)
      console.log({ ticketDetWithType })
      if (ticketDetWithType) {
        requestType.idTicketDet = ticketDetWithType.idTicketDet
        await HdTicketDetProvider.activeTicketDet(ticketDetWithType.idTicketDet as number)
        const newTicket = await HdTicketDetProvider.updateTicketDet(requestType)
        new SuccessResponseHandler({ status: 200, message: `Se ha actualizado el detalle para el ticket y se ha activado ${idTicket}`, data: newTicket }).response(res)
      }

      console.log({ requestType })
      const newTicket = await HdTicketDetProvider.createTicketDet(requestType)
      new SuccessResponseHandler({ status: 200, message: `Se ha creado un nuevo detalle del ticket con diferente tipo de solicitud al ticket ${idTicket}`, data: newTicket }).response(res)
    } catch (error) {
      console.log(error)
      if (isError(error)) return new ErrorResponseHandler({ status: 400, message: 'Error al crear el detalle del ticket', error: error.message }).response(res)
      new ErrorResponseHandler({ status: 400, message: 'Error no manejado', error: 'Error no manejado', unknownError: error }).response(res)
    }
  }
}
