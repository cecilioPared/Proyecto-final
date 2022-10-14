const Carrito = require('../db/carritos')
const data = [];

const carrito = new Carrito('./carritos.txt');
const log = '[CarritosController]'

class CarritosController {

  static async crear(data) {
    const method = '[crear]'
    try {
    
      console.log(`${log}${method} intentando crear carrito.`)
      const result = await carrito.crear(data)     
      console.log(`${log}${method} carrito creado con éxito.`)
      return result
    } catch (error) {
        console.log(`${log}${method} ocurrio un error: ${error.message}`)
      throw error
    }
  }
}


module.exports = CarritosController