const { Router } = require('express')
const CarritosController = require('../../controlers/carritos')
const validarCarritoExiste  = require('../../middlewares/validar-carrito-existe')
const validarProductoExiste  = require('../../middlewares/validar-producto-existe')

const router = Router()

router.delete('/:id',validarCarritoExiste, async (req, res, next) => {
  try {
    await CarritosController.eliminarPorId(req.params.id)
    res.status(204).end()
  } catch (error) {
    next(error)
  }
})

router.delete('/:id/productos/:id_prod',validarCarritoExiste,validarProductoExiste, async (req, res, next) => {
    try {
      await CarritosController.eliminarProductoCarrito(req.params.id,req.params.id_prod)
      res.status(204).end()
    } catch (error) {
      next(error)            
    }
  })

module.exports = router