const { Router } = require('express')
const crear = require('./crear')
// const actuaizar = require('./actualizar')
// const obtener = require('./obtener')
// const eliminar = require('./eliminar')

const router = Router()

//router.use('/carritos',obtener, crear, actuaizar,eliminar)
router.use('/carrito', crear)

module.exports = router