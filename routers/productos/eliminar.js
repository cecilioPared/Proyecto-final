const { Router } = require('express')
const ProductosController = require('../../controlers/productos')

const router = Router()

router.delete('/:id', (req, res, next) => {
  try {
    ProductosController.eliminarPorId(req.params.id)
    res.status(204).end()
  } catch (error) {
    next(error)
  }
})

module.exports = router