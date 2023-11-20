import Ticket from '@/backend/models/Ticket'
import validateRequest from '@/backend/utils/validation'
import { hdTicketCreate } from '@/backend/validationModels/HdTicketValidation'
import { NextApiRequest, NextApiResponse } from 'next'
import HdTicketProvider from '@/backend/provider/HdTicketProvider'
import { ErrorResponseHandler, SuccessResponseHandler } from '@/backend/utils/responseHandler'
import validateTokenRequest from '@/backend/utils/validateTokenRequest'

export default async function create (req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    try {
      const auth = req.headers.authorization
      await validateTokenRequest(auth)
      validateRequest(hdTicketCreate, req)
      const requestType: Ticket = req.body
      const ticket = await HdTicketProvider.createHdTicket(requestType)
      new SuccessResponseHandler({ status: 200, message: 'Ticket creado', data: ticket }).response(res)
    } catch (error) {
      new ErrorResponseHandler({ status: 400, message: 'Error al crear el ticket', error: error.message }).response(res)
      console.log(error)
    }
  }
}
