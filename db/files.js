const fs = require('fs');

exports.escribirArchivo = async function(ruta, contenido) {
    try {
      await fs.promises.writeFile(
        ruta,
        JSON.stringify(contenido, null, 2),
        "utf-8"
      );
    } catch (error) {
      console.log("Ocurrio un error durante la escritura:", error);
      throw new Error(error.message);
    }
  }

  exports.leerArchivo = async function(ruta) {
    try {        
      const existe = fs.existsSync(ruta);            
      if (!existe) return [];
      const contenido = await fs.promises.readFile(ruta, "utf-8");
      return JSON.parse(contenido);
    } catch (error) {
      console.log("Ocurrio un error durante la lectura:", error);
      throw new Error(error.message);
    }
  }