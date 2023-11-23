import HdTicketProvider from '@/backend/provider/HdTicketProvider'
import { isError } from '@/backend/utils/isInstance'
import { ErrorResponseHandler, SuccessResponseHandler } from '@/backend/utils/responseHandler'
import validateTokenRequest from '@/backend/utils/validateTokenRequest'
import validateRequest from '@/backend/utils/validation'
import { hdTicketGetByUser } from '@/backend/validationModels/HdTicketValidation'
import { NextApiRequest, NextApiResponse } from 'next'

type TicketRequest = {
  idUsuario: number
}

export default async function getUserTickets (req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    try {
      const auth = req.headers.authorization
      const userInfo = await validateTokenRequest(auth)
      validateRequest(hdTicketGetByUser, req)
      const requestType: TicketRequest = req.body
      const { limit, offset } = req.query
      if (userInfo.idUsuario !== requestType.idUsuario) throw new Error('No tiene permisos para realizar esta acción')
      const ticket = await HdTicketProvider.getHdTicketByUser(requestType.idUsuario, Number(limit), Number(offset))
      new SuccessResponseHandler({ status: 200, message: `Ticket encontrado del usuario ${userInfo.nomUsuario}`, data: ticket }).response(res)
    } catch (error) {
      if (isError(error)) return new ErrorResponseHandler({ status: 400, message: 'Error al buscar los tickets', error: error.message }).response(res)
      new ErrorResponseHandler({ status: 400, message: 'Error no manejado', error: 'Error no manejado', unknownError: error }).response(res)
      console.log(error)
    }
  }
}
