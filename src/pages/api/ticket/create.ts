import Ticket from '@/backend/models/Ticket'
import { NextApiRequest, NextApiResponse } from 'next'
import HdTicketProvider from '@/backend/provider/HdTicketProvider'
import { ErrorResponseHandler, SuccessResponseHandler } from '@/backend/utils/responseHandler'
import validateTokenRequest from '@/backend/utils/validateTokenRequest'
import Actividad from '@/backend/models/Actividad'
import { isError } from '@/backend/utils/isInstance'
import TicketDet from '@/backend/models/TicketDet'

export default async function create (req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    try {
      const auth = req.headers.authorization
      await validateTokenRequest(auth)
      const requestType: {ticket: Ticket, activity: Actividad, ticketDet: TicketDet} = req.body
      const { ticket, activity, ticketDet } = requestType
      const newTicket = await HdTicketProvider.createTicketWithActivityAndTicketDet(ticket, activity, ticketDet)
      new SuccessResponseHandler({ status: 200, message: 'Ticket creado', data: newTicket }).response(res)
    } catch (error) {
      if (isError(error)) return new ErrorResponseHandler({ status: 400, message: 'Error al crear el ticket', error: error.message }).response(res)
      new ErrorResponseHandler({ status: 400, message: 'Error no manejado', error: 'Error no manejado', unknownError: error }).response(res)
      console.log(error)
    }
  }
}
