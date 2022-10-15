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

  static async eliminarPorId(idCarrito) {
    const method = 'borrarPorId'
    try {
      console.log(`${log}${method} intentando borrar carrito: ${idCarrito}.`)
      await carrito.eliminarPorId(idCarrito)
      console.log(`${log} carrito ${idCarrito} borrado con éxito.`)
    } catch (error) {
      console.error(`${log} Ah ocurrido un error: ${error.message}`)
      throw error
    }
  }

  static async eliminarProductoCarrito(idCarrito,idProducto) {
    const method = 'eliminarProductoCarrito'
    try {
      console.log(`${log}${method} intentando borrar producto del carrito: ${idCarrito}.`)
      await carrito.eliminarProductoCarrito(idCarrito,idProducto)
      console.log(`${log} carrito ${idCarrito} borrado de producto del carrito con éxito.`)
    } catch (error) {
      console.error(`${log} Ah ocurrido un error: ${error.message}`)
      throw error
    }
  }
  

  static async obtenerProductosCarrito(idCarrito) {
    const method = 'obtenerProductosPorId'
    try {
        console.log(`${log}${method} intentando obtener productos del carrito ${idCarrito}.`)
      const data = await carrito.obtenerProductosCarrito(idCarrito)
      console.log(`${log}${method} producto ${idCarrito} encontrado con éxito.`)
      return data
    } catch (error) {
        console.log(`${log}${method} ocurrio un error: ${error.message}`)
      throw error
    }
  }

  static async agregarProductoCarrito(idCarrito,data) {
    const method = '[agregarProductoCarrito]'
    try {
    
      console.log(`${log}${method} intentando agregar producto al carrito.`)
      const result = await carrito.agregarProductoCarrito(idCarrito, data)     
      console.log(`${log}${method} producto agregado al carrito con éxito.`)
      return result
    } catch (error) {
        console.log(`${log}${method} ocurrio un error: ${error.message}`)
      throw error
    }
  }

}


module.exports = CarritosController