const express = require('express')
var createError = require('http-errors');
const path = require('path')
const cors = require('cors')
const routers = require('./routers')
const { errorHandler } = require('./utils/errorHandler')
const validarRecurso  = require('./middlewares/validar-ruta')
const app = express()

const PORT = process.env.NODE_PORT || 3000
const ENV = process.env.NODE_ENV

app.use(cors())

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use('/api', routers)

app.use(errorHandler)
app.use(validarRecurso)

const server = app.listen(PORT, () => {
    console.log(
      `Servidor http esta escuchando en el puerto ${server.address().port}`
    );
    console.log(`http://localhost:${server.address().port}`);
    console.log(`Environment:${ENV}`);
  });
  
  server.on("error", (error) => console.log(`Error en servidor ${error}`));