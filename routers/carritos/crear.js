const { Router } = require('express')
const CarritosController = require('../../controlers/carritos')
const validarCarrito  = require('../../middlewares/validar-carrito')
const validarProductoCarrito  = require('../../middlewares/validar-producto-carrito')
const validarUsuario  = require('../../middlewares/validar-usuario')

const router = Router()

router.post('/',validarUsuario, validarCarrito, async (req, res, next) => {
  try {
    const idCarrito = await CarritosController.crear(req.body)
    res.status(201).json(idCarrito)
  } catch (error) {
    next(error)
  }
})

router.post('/:id/productos', validarProductoCarrito, async (req, res, next) => {
  try {
    const idCarrito = await CarritosController.agregarProductoCarrito(req.params.id, req.body)
    res.status(201).json(idCarrito)
  } catch (error) {
    next(error)
  }
})


module.exports = router