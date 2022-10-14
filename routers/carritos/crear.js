const { Router } = require('express')
const CarritosController = require('../../controlers/carritos')
const validarCarrito  = require('../../middlewares/validar-carrito')

const router = Router()

router.post('/', validarCarrito, async (req, res, next) => {
  try {
    const producto = await CarritosController.crear(req.body)
    res.status(201).json(producto)
  } catch (error) {
    next(error)
  }
})

module.exports = router