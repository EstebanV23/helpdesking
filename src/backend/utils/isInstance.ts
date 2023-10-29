import Cargo from '../models/Cargo'

export function isNumber (value: any): value is number {
  return typeof value === 'number'
}

export function isString (value: any): value is string {
  return typeof value === 'string'
}

export function isBoolean (value: any): value is boolean {
  return typeof value === 'boolean'
}

export function isObject (value: any): value is object {
  return typeof value === 'object'
}

export function isArray (value: any): value is Array<any> {
  return Array.isArray(value)
}

export function isFunction (value: any): value is Function {
  return typeof value === 'function'
}

export function isUndefined (value: any): value is undefined {
  return typeof value === 'undefined'
}

export function isNull (value: any): value is null {
  return value === null
}

export function isNullOrUndefined (value: any): value is null | undefined {
  return isUndefined(value) || isNull(value)
}

export function isDate (value: any): value is Date {
  return value instanceof Date
}

export function isCargo (value: any): value is Cargo {
  return value instanceof Cargo
}

export function isError (value: any): value is Error {
  return value instanceof Error
}
