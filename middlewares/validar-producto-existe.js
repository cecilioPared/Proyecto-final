const ProductosController = require('../controlers/productos')

module.exports = async function validarProductoExisteMiddleware(req, res, next) {
  const log = '[validarProductoExisteMiddleware]'
  const usuarioId = req.params.id
  try {
    console.log(`${log} intentando obtener producto ${usuarioId}...`)
    req.usuario = await ProductosController.obtenerPorId(usuarioId)
    console.log(`${log} validación exitosa de producto ${usuarioId}.`)
    next()
  } catch (error) {
    console.error(`${log} validación fallida de producto ${usuarioId}: ${error.message}`)
    next(error)
  }
}