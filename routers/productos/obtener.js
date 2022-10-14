const { Router } = require('express')
const ProductosController = require('../../controlers/productos')

const router = Router()

router.get('/', async (req, res, next) => {
  try {
    const productos = await ProductosController.obtener()
    res.json(productos)
  } catch (error) {
    next(error)
  }
})

router.get('/:id', async (req, res, next) => {
  try {    
    const producto = await ProductosController.obtenerPorId(req.params.id)
    res.json(producto)
  } catch (error) {
    //next(error)
    res.status(404).json({ error: error.message });
  }
})

module.exports = router