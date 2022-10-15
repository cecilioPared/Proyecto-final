const files = require("./files");
const pick = require("lodash/pick");
const { v4: uuidv4 } = require("uuid");

class Carrito {
  constructor(path) {
    this.path = path;
  }

  async crear(nuevoCarrito) {
    try {
      const id = uuidv4();
      const timestamp = new Date();
      const data = await files.leerArchivo(this.path);
      data.push({ id, timestamp, ...nuevoCarrito });
      await files.escribirArchivo(this.path, data);
      return id;
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

  async obtenerPorId(idCarrito) {
    try {
      const data = await files.leerArchivo(this.path);
      const Carrito = data.find(
        (element) => String(element.id) === String(idCarrito)
      );

      if (!Carrito) {
        throw new Error(`Carrito con id ${idCarrito} no encontrado.`);
      }
      return Carrito;
    } catch (error) {
      throw new Error(error.message);
    }
  }

  async obtenerProductosCarrito(idCarrito) {
    try {
      const data = await files.leerArchivo(this.path);
      const Carrito = data.find(
        (element) => String(element.id) === String(idCarrito)
      );

      if (!Carrito) {
        throw new Error(`Carrito con id ${idCarrito} no encontrado.`);
      }
      return Carrito.productos;
    } catch (error) {
      throw new Error(error.message);
    }
  }

  async actualizarPorId(idCarrito, dataReq) {
    try {
      const Carritos = await files.leerArchivo(this.path);
      const Carrito = Carritos.find(
        (element) => String(element.id) === String(idCarrito)
      );
      const prop = ["nombre", "nombre", "codigo", "foto", "precio", "stock"];
      const data = {
        ...pick(dataReq, prop),
        fechaAuditoria: new Date(),
      };
      Object.assign(Carrito, data);
      await files.escribirArchivo(this.path, Carritos);
    } catch (error) {
      throw new Error(error.message);
    }
  }

  async eliminarPorId(idCarrito) {
    const Carritos = await files.leerArchivo(this.path);
    const index = Carritos.findIndex((element) => {
      return String(element.id) === String(idCarrito);
    });
    console.log("indice a eliminar", index);
    if (index === -1) {
      throw new Error(`Carrito con id ${idCarrito} no encontrado.`);
    }
    Carritos.splice(index, 1);
    await files.escribirArchivo(this.path, Carritos);
  }

  async agregarProductoCarrito(idCarrito, Producto) {
    try {
      const data = await files.leerArchivo(this.path);
      const carrito = data.find(
        (element) => String(element.id) === String(idCarrito)
      );

      if (!carrito) {
        throw new Error(`Carrito con id ${idCarrito} no encontrado.`);
      }

      carrito.productos.push(Producto);
      await files.escribirArchivo(this.path, data);
    } catch (error) {
      console.log("Ocurrio un error durante la operación:", error);
      throw new Error(error.message);
    }
  }

  async eliminarProductoCarrito(idCarrito, idProducto) {
    try {
      const Carritos = await files.leerArchivo(this.path);

      const carrito = Carritos.find(
        (element) => String(element.id) === String(idCarrito)
      );

      if (!carrito) {
        throw new Error(`Carrito con id ${idCarrito} no encontrado.`);
      }

      const indexProducto = carrito.productos.findIndex((element) => {
        return String(element.id) === String(idProducto);
      });

      if (indexProducto === -1) {
        throw new Error(`Carrito con id ${idCarrito} no encontrado.`);
      }

      carrito.productos.splice(indexProducto, 1);
      await files.escribirArchivo(this.path, Carritos);
    } catch (error) {
      console.log("Ocurrio un error durante la operación:", error);
      throw new Error(error.message);
    }
  }
}

module.exports = Carrito;
