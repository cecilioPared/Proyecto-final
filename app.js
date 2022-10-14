const express = require('express')
const path = require('path')
const cors = require('cors')
const producto = require('./routers/productos')
const carrito = require('./routers/carritos')
const { errorHandler } = require('./utils/errorHandler')

const app = express()

const PORT = process.env.NODE_PORT || 3000
const ENV = process.env.NODE_ENV

app.use(cors())

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use('/api', carrito,producto)
app.use(errorHandler)


const server = app.listen(PORT, () => {
    console.log(
      `Servidor http esta escuchando en el puerto ${server.address().port}`
    );
    console.log(`http://localhost:${server.address().port}`);
    console.log(`Environment:${ENV}`);
  });
  
  server.on("error", (error) => console.log(`Error en servidor ${error}`));