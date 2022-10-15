const { Router } = require('express')
const routerProductos = require('./productos/index')
const routerCarritos = require('./carritos/index')

const router = Router()

router.use('/productos',routerProductos)
router.use('/carrito',routerCarritos)

module.exports = router