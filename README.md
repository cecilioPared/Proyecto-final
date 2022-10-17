# Proyecto-final
Primera entrega proyecto final programación backEnd

## Configuración inicial

Previo a la ejecución del proyecto se debe crear en el directorio raiz del mismo un archivo `.env` con 2 variables 
```
NODE_PORT=8080
NODE_ENV=local
```
Una vez configuradas las variables de entorno se debe ejecutar el siguiente comando para inicializar la aplicación

```
npm run dev
```

## Permiso de usuario

Se utiliza un parametro en la cabecera de la llamada al endpoint `key:role` - `value:admin` el cual se controla en un middleware de validación llamado validarUsuarioAdminMiddleware.

## Postman

En el directorio raiz del proyecto se encuentra un archivo de colección  `Proyecto-final.postman_collection.json` con las configuraciones para poder probar los endpoint de la API. El mismo se debe importar desde postman.  

## Url Glitch
Para probar la Api publicada en produccion reemplazar en el archivo de  colección  `Proyecto-final.postman_collection.json` la url `localhost:8080` por 
`https://cecilio-proyecto-final.glitch.me/`
