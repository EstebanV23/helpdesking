import Ticket from '@/backend/models/Ticket'
import { NextApiRequest, NextApiResponse } from 'next'
import HdTicketProvider from '@/backend/provider/HdTicketProvider'
import { ErrorResponseHandler, SuccessResponseHandler } from '@/backend/utils/responseHandler'
import validateTokenRequest from '@/backend/utils/validateTokenRequest'
import { isError } from '@/backend/utils/isInstance'

export default async function getForFilters (req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    try {
      const auth = req.headers.authorization
      await validateTokenRequest(auth)
      const requestType: Ticket = req.body
      console.log({ requestType })
      const tickets = await HdTicketProvider.getTicketByFilters(requestType)
      new SuccessResponseHandler({ status: 200, message: 'Tickets encontrados', data: tickets }).response(res)
    } catch (error) {
      console.log(error)
      if (isError(error)) return new ErrorResponseHandler({ status: 400, message: 'Error al encontrar los tickets', error: error.message }).response(res)
      new ErrorResponseHandler({ status: 400, message: 'Error no manejado', error: 'Error no manejado', unknownError: error }).response(res)
    }
  }
}
