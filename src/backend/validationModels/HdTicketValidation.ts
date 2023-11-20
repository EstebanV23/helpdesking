import Joi from 'joi'

export type HdTicketCreate = {
  solicitud: Joi.StringSchema<string>,
  fechaCierre: Joi.DateSchema<Date>,
  indCierre: Joi.BooleanSchema<boolean>,
  idUsuarioRegistra: Joi.NumberSchema<number>,
  numAgilo: Joi.StringSchema<string>,
  idTipoSol: Joi.NumberSchema<number>,
  idSubTipoSol: Joi.NumberSchema<number>,
  idUsuarioResponsable: Joi.NumberSchema<number>
}

const hdTicketCreate: Joi.ObjectSchema<HdTicketCreate> = Joi.object({
  solicitud: Joi.string().min(3).max(250).required(),
  fechaCierre: Joi.date(),
  indCierre: Joi.boolean(),
  idUsuarioRegistra: Joi.number().integer().required(),
  numAgilo: Joi.string().max(30),
  idTipoSol: Joi.number().integer().required(),
  idSubTipoSol: Joi.number().integer(),
  idUsuarioResponsable: Joi.number().integer().required()
})

export type HdTicketUpdate = {
  idTicket: Joi.NumberSchema<number>,
  solicitud: Joi.StringSchema<string>,
  fechaCierre: Joi.DateSchema<Date>,
  indCierre: Joi.BooleanSchema<boolean>,
  numAgilo: Joi.StringSchema<string>,
  idTipoSol: Joi.NumberSchema<number>,
  idSubTipoSol: Joi.NumberSchema<number>,
  idUsuarioResponsable: Joi.NumberSchema<number>
}

const hdTicketUpdate: Joi.ObjectSchema<HdTicketUpdate> = Joi.object({
  idTicket: Joi.number().integer().required(),
  solicitud: Joi.string().min(3).max(250).required(),
  fechaCierre: Joi.date(),
  indCierre: Joi.boolean(),
  numAgilo: Joi.string().max(30),
  idTipoSol: Joi.number().integer().required(),
  idSubTipoSol: Joi.number().integer(),
  idUsuarioResponsable: Joi.number().integer().required()
})

export type HdTicketGetById = {
  idTicket: Joi.NumberSchema<number>
}

const hdTicketGetById: Joi.ObjectSchema<HdTicketGetById> = Joi.object({
  idTicket: Joi.number().integer().required()
})

export type HdTicketGetByUser = {
  idUsuario: Joi.NumberSchema<number>
}

const hdTicketGetByUser: Joi.ObjectSchema<HdTicketGetByUser> = Joi.object({
  idUsuario: Joi.number().integer().required()
})

export { hdTicketCreate, hdTicketUpdate, hdTicketGetById, hdTicketGetByUser }
