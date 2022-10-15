const Joi = require('joi')
const { join } = require('lodash')
const { BadRequestError } = require('../utils/errorHandler')

const productoEsquema = Joi.object({
  id: Joi.string()
  .required(),
  timestamp: Joi.date()
  .required(),
  nombre: Joi.string()
    .min(3)
    .max(50)
    .trim(true)
    .required(),
  descripcion: Joi.string()
    .min(3)
    .max(50)
    .trim(true)
    .required(),
  codigo: Joi.string()
    .min(3)
    .max(10)
    .trim(true)
    .required(),
  foto: Joi.string()
    .uri()
    .min(3)
    .max(250)
    .trim(true)
    .required(),
  precio: Joi.number()
    .integer()
    .required(),
  stock: Joi.number()
    .integer()
    .required(),
})

module.exports = async function validarProductoCarritoMiddleware(req,res, next) {
  const log  = '[validarProductoCarritoMiddleware]'
  try {
    console.log(`${log} intentando validar producto...`)
    req.body = await productoEsquema.validateAsync(req.body)

    console.log(`${log} validación de producto exitosa. ${req.body}`)
    next()
  } catch (error) {
    console.error(`${log} validación fallida del producto a registrar en carrito: ${error.message}`)
    next(new BadRequestError('Ocurrio un error validando', error))
  }
}