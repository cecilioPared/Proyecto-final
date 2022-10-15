const { Router } = require('express')
const crear = require('./crear')
const obtener = require('./obtener')
const eliminar = require('./eliminar')

const router = Router()

router.use('/', crear,eliminar,obtener)

module.exports = router