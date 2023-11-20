import HdTicketProvider from '@/backend/provider/HdTicketProvider'
import { ErrorResponseHandler, SuccessResponseHandler } from '@/backend/utils/responseHandler'
import validateTokenRequest from '@/backend/utils/validateTokenRequest'
import validateRequest from '@/backend/utils/validation'
import { hdTicketGetById } from '@/backend/validationModels/HdTicketValidation'
import { NextApiRequest, NextApiResponse } from 'next'

type TicketRequest = {
  idTicket: number
}

export default async function getOne (req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    try {
      const auth = req.headers.authorization
      await validateTokenRequest(auth)
      const requestType: TicketRequest = req.body
      validateRequest(hdTicketGetById, req)
      const ticket = await HdTicketProvider.getHdTicketById(requestType.idTicket)
      new SuccessResponseHandler({ status: 200, message: 'Ticket encontrado', data: ticket }).response(res)
    } catch (error) {
      new ErrorResponseHandler({ status: 400, message: 'Error al buscar el ticket', error: error.message }).response(res)
      console.log(error)
    }
  }
}
