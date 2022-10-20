const { Router } = require('express')
const ProductosController = require('../../controlers/productos')
const validarUsuario  = require('../../middlewares/validar-usuario')
const validarProductoExiste  = require('../../middlewares/validar-producto-existe')
const router = Router()

router.delete('/:id',validarUsuario,validarProductoExiste, async (req, res, next) => {
  try {
    await ProductosController.eliminarPorId(req.params.id)
    res.status(204).end()
  } catch (error) {
    next(error)
  }
})

module.exports = router