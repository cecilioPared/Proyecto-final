const { Router } = require('express')
const CarritosController = require('../../controlers/carritos')

const router = Router()

router.get('/', async (req, res, next) => {
  try {
    const productos = await CarritosController.obtener()
    res.json(productos)
  } catch (error) {
    next(error)
  }
})

router.get('/:id/productos', async (req, res, next) => {
  try {    
    const productos = await CarritosController.obtenerProductosCarrito(req.params.id)
    res.json(productos)
  } catch (error) {    
    res.status(404).json({ error: error.message });
  }
})

module.exports = router