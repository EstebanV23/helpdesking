import HdActividadProvider from '@/backend/provider/HdActividadProvider'
import { isError } from '@/backend/utils/isInstance'
import { ErrorResponseHandler, SuccessResponseHandler } from '@/backend/utils/responseHandler'
import validateTokenRequest from '@/backend/utils/validateTokenRequest'
import validateRequest from '@/backend/utils/validation'
import { hdActivityFromTicket } from '@/backend/validationModels/HdActivityValidation'
import { NextApiRequest, NextApiResponse } from 'next'

type ActivityRequest = {
  idTicket: number
}

export default async function getActTicket (req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    try {
      const auth = req.headers.authorization
      await validateTokenRequest(auth)
      const requestType: ActivityRequest = req.body
      validateRequest(hdActivityFromTicket, req)
      const activity = await HdActividadProvider.getAllActivitiesFromTicket(requestType.idTicket)
      new SuccessResponseHandler({ status: 200, message: 'Actividades del ticket encontradas', data: activity }).response(res)
    } catch (error) {
      if (isError(error)) return new ErrorResponseHandler({ status: 400, message: 'Error al buscar las actividades', error: error.message }).response(res)
      new ErrorResponseHandler({ status: 400, message: 'Error no manejado', error: 'Error no manejado', unknownError: error }).response(res)
      console.log(error)
    }
  }
}
