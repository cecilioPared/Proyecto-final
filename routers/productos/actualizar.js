const { Router } = require('express')
const ProductosController = require('../../controlers/productos')
const validarProductos  = require('../../middlewares/validar-producto')
const validarUsuario  = require('../../middlewares/validar-usuario')
const router = Router()

router.put('/:id',validarUsuario, validarProductos, (req, res, next) => {
  try {
    ProductosController.actualizarPorId(req.params.id, req.body)
    res.status(204).end()
  } catch (error) {
    next(error)
  }
})

module.exports = router