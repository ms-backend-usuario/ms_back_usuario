//paso 16 creamos la carpeta de controllers y el este archivo controllers.user.js
//paso 17
import { success } from "../message/browser.js" //6 paso, cambiamos este paso del routes.user.js
 
export const crearUser = (req, res)=>{
    const dato = req.body;
    console.log(dato);
    success(req, res, 201, "Post: Ha ingresado un dato")
};

export const mostrarUser = (req, res)=>{
    success(req, res, 200, "Get:Conectado con Usuario");
};

export const modificarUser = (req, res)=>{
    const dato = req.body;
    success(req, res, 200, "Put: Ha Modificado un dato")
};

export const eliminarUser = (req, res)=>{
    const dato = req.body;
    success(req, res, 200, "Delete: Ha Eliminado un dato")
};