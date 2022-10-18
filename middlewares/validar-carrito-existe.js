const CarritosController = require('../controlers/carritos')
const { BadRequestError } = require('../utils/errorHandler')

module.exports = async function validadorCarritoExisteMiddleware(req, res, next) {
  const log = '[validadorUsuarioExisteMiddleware]'
  const carritoId = req.params.id
  try {
    console.log(`${log} intentando obtener carrito ${carritoId}...`)
    req.carrito = await CarritosController.obtenerPorId(carritoId)
    console.log(`${log} validación exitosa de carrito ${carritoId}.`)
    next()
  } catch (error) {
    console.error(`${log} validación fallida de carrito ${carritoId}: ${error.message}`)
   next(new BadRequestError(`Ocurrio un error validando carrito: ${error.message}`, error))
  }
}