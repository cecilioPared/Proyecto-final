const { Router } = require('express')
const CarritosController = require('../../controlers/carritos')

const router = Router()

router.delete('/:id', (req, res, next) => {
  try {
    CarritosController.eliminarPorId(req.params.id)
    res.status(204).end()
  } catch (error) {
    next(error)
  }
})

router.delete('/:id/productos/:id_prod', (req, res, next) => {
    try {
      CarritosController.eliminarProductoCarrito(req.params.id,req.params.id_prod)
      res.status(204).end()
    } catch (error) {
      res.status(404).json({ error: error.message });
    }
  })

module.exports = router