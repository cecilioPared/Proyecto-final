const files = require("./files")
const pick = require('lodash/pick')
const { v4: uuidv4 } = require("uuid")

class Producto {
  constructor(path) {
    this.path = path;
  }

  async crear(nuevoProducto) {
    try {
      const id = uuidv4();
      const timestamp = new Date();
      const data = await files.leerArchivo(this.path);
      data.push({ id,timestamp, ...nuevoProducto });
      await files.escribirArchivo(this.path, data);
    } catch (error) {
      console.log("Ocurrio un error durante la operación:", error);
      throw new Error(error.message);
    }
  }

  async obtener() {
    try {
      const data = await files.leerArchivo(this.path);
      return data;
    } catch (error) {
      console.log("Ocurrio un error durante la operación:", error);
      throw new Error(error.message);
    }
  }

  async obtenerPorId(idProducto) {
    try {

      const data = await files.leerArchivo(this.path);     
      const producto = data.find(
        (element) => String(element.id) === String(idProducto)
      );
      
      if (!producto) {
        throw new Error(`producto con id ${idProducto} no encontrado.`);
      }
      return producto;
    } catch (error) {      
      throw new Error(error.message);
    }
  }

  async actualizarPorId(idProducto, dataReq) {    
    try {
   
    const productos = await files.leerArchivo(this.path);     
    const producto = productos.find(
      (element) => String(element.id) === String(idProducto)
    );
    const prop = [
      'nombre',
      'nombre',
      'codigo',
      'foto',
      'precio',
      'stock',      
    ]
    const data = {
      ...pick(dataReq, prop),
      fechaAuditoria: new Date()
    }
     Object.assign(producto, data)    
     await files.escribirArchivo(this.path, productos);
    } catch (error) {      
      throw new Error(error.message);
    }
  }

  async eliminarPorId(idProducto) {    
   
      const productos = await files.leerArchivo(this.path);     
      const index = productos.findIndex((element) => {
        return String(element.id) === String(idProducto);
      });
      console.log('indice a eliminar',index)
      if (index === -1) {
        throw new Error(`producto con id ${idProducto} no encontrado.`);
      }
      productos.splice(index, 1);
      await files.escribirArchivo(this.path, productos);   
  }
  
}

module.exports = Producto;
