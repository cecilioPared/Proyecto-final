const { Router } = require('express')
const crear = require('./crear')
const actuaizar = require('./actualizar')
const obtener = require('./obtener')
const eliminar = require('./eliminar')

const router = Router()

router.use('/productos',obtener, crear, actuaizar,eliminar)

module.exports = router