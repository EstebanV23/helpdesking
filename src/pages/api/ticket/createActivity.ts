import validateRequest from '@/backend/utils/validation'
import { NextApiRequest, NextApiResponse } from 'next'
import { ErrorResponseHandler, SuccessResponseHandler } from '@/backend/utils/responseHandler'
import validateTokenRequest from '@/backend/utils/validateTokenRequest'
import { hdActivityCreate } from '@/backend/validationModels/HdActivityValidation'
import Actividad from '@/backend/models/Actividad'
import HdActividadProvider from '@/backend/provider/HdActividadProvider'

export default async function create (req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    try {
      const auth = req.headers.authorization
      const userInfo = await validateTokenRequest(auth)
      validateRequest(hdActivityCreate, req)
      const requestType: Actividad = req.body
      if (userInfo.idUsuario !== requestType.idUsuario) throw new Error('No tiene permisos para realizar esta acción')
      const activity = await HdActividadProvider.createHdActividad(requestType)
      new SuccessResponseHandler({ status: 200, message: `Actividad creada para el ticket ${activity.idTicket}`, data: activity }).response(res)
    } catch (error) {
      new ErrorResponseHandler({ status: 400, message: 'Error al crear la actividad', error: error.message }).response(res)
      console.log(error)
    }
  }
}
