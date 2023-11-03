import Joi from 'joi'

export type HdUserCreate = {
  nomUsuario: Joi.StringSchema<string>,
  password: Joi.StringSchema<string>,
  emailUsuario: Joi.StringSchema<string>,
  numDocumento: Joi.StringSchema<string>,
  numTelefono: Joi.StringSchema<string>,
  idTipoDocumento: Joi.StringSchema<number>,
  idCargo: Joi.StringSchema<number>,
  idRol: Joi.StringSchema<number>
}

const hdUserCreate: Joi.ObjectSchema<HdUserCreate> = Joi.object({
  nomUsuario: Joi.string().min(3).max(30).required(),
  password: Joi.string().min(6).max(30).required(),
  emailUsuario: Joi.string().email().required(),
  numDocumento: Joi.string().min(6).max(30).required(),
  numTelefono: Joi.string().min(6).max(30).required(),
  idTipoDocumento: Joi.number().integer().required(),
  idCargo: Joi.number().integer().required(),
  idRol: Joi.number().integer().required()
})

const hdUserLogin: Joi.ObjectSchema<HdUserCreate> = Joi.object({
  emailUsuario: Joi.string().email(),
  password: Joi.string().min(6).max(30).required(),
  numDocumento: Joi.string().min(6).max(13)
})

export { hdUserCreate, hdUserLogin }
