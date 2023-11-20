import Joi from 'joi'

export type HdActivityCreate = {
  idTicket: Joi.NumberSchema<number>
  idUsuario: Joi.NumberSchema<number>
  desActividad: Joi.StringSchema<string>
}

const hdActivityCreate: Joi.ObjectSchema<HdActivityCreate> = Joi.object({
  idTicket: Joi.number().integer().required(),
  idUsuario: Joi.number().integer().required(),
  desActividad: Joi.string().min(3).max(250).required()
})

export type HdActivityFromTicket = {
  idTicket: Joi.NumberSchema<number>
}

const hdActivityFromTicket: Joi.ObjectSchema<HdActivityFromTicket> = Joi.object({
  idTicket: Joi.number().integer().required()
})

export {
  hdActivityCreate,
  hdActivityFromTicket
}
