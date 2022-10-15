const { Router } = require('express')
const ProductosController = require('../../controlers/productos')
const validarProductos  = require('../../middlewares/validar-producto')
const validarUsuario  = require('../../middlewares/validar-usuario')
const router = Router()

router.post('/',validarUsuario, validarProductos, async (req, res, next) => {
  try {
    const producto = await ProductosController.crear(req.body)
    res.status(201).json(producto)
  } catch (error) {
    next(error)
  }
})

module.exports = router