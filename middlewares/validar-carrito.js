const Joi = require('joi')
const { BadRequestError } = require('../utils/errorHandler')

const carritoEsquema = Joi.object({
  productos: Joi.array()    
    .required(),
  })

module.exports = async function validarCarritoMiddleware(req,res, next) {
  const log  = '[validarCarritoMiddleware]'
  try {
    console.log(`${log} intentando validar carrito...`)
    req.body = await carritoEsquema.validateAsync(req.body)
    console.log(`${log} validación de carrito exitosa.`)
    next()
  } catch (error) {
    console.error(`${log} validación fallida del carrito a registrar: ${error.message}`)    
    next(new BadRequestError(`Ocurrio un error validando carrito: ${error.message}`, error))
  }
}