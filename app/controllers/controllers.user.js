//paso 16 creamos la carpeta de controllers y el este archivo controllers.user.js
//paso 17
import { success, error } from "../message/browser.js" //6 paso, cambiamos este paso del routes.user.js
import pool from "../config/db.msql.js";
 
export const crearUser = (req, res)=>{
    const dato = req.body;
    console.log(dato);
    success(req, res, 201, "Post: Ha ingresado un dato")
};

export const mostrarUser = async(req, res)=>{
    try {
        const respuesta = await pool.query(" CALL sp_MostrarUsuario(1); ")
        console.log(respuesta);
        success(req, res, 200, respuesta[0]);
    } catch (err) {
        error(req, res, 500, err)
        
    }
};

export const modificarUser = (req, res)=>{
    const dato = req.body;
    success(req, res, 200, "Put: Ha Modificado un dato")
};

export const eliminarUser = (req, res)=>{
    const dato = req.body;
    success(req, res, 200, "Delete: Ha Eliminado un dato")
};