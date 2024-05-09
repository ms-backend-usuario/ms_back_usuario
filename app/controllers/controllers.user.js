//paso 16 creamos la carpeta de controllers y el este archivo controllers.user.js
//paso 17
import bcrypt from "bcrypt";
import { success, error } from "../message/browser.js" //6 paso, cambiamos este paso del routes.user.js
import pool from "../config/db.msql.js";
import { config } from "dotenv";
config();
 
export const crearUser = async(req, res)=>{
    const nombre = req.body.nombre;
    const usuario = req.body.usuario;
    const claveSinCifrar = req.body.clave;
    
    try {
        const hash = await bcrypt.hash(claveSinCifrar, 2);
        const clave = hash;
        const respuesta = await pool.query(`CALL sp_CrearUsuario('${nombre}', '${usuario}', '${clave}'); `);
        if (respuesta[0].affectedRows == 1){
            success(req, res, 201, "Usuario creado");
        }else{
            error(req, res, 400, "No se pudo agregar el nuevo usuario");
        }
    } catch (err) {
        error(req, res, 400, err);
    }
};

export const mostrarUser = async(req, res)=>{

    let id = req.params['id'];

    try {
        const respuesta = await pool.query(`CALL sp_MostrarUsuario(${id}); `);
        success(req, res, 200, respuesta[0]);
    } catch (err) {
        error(req, res, 500, err)
        
    }
};

export const listarUser = async(req, res)=>{
    try {
        const respuesta = await pool.query(`CALL sp_ListarUsuario(); `);
        success(req, res, 200, respuesta[0]);
    } catch (err) {
        error(req, res, 500, err)
        
    }

};

export const modificarUser = async(req, res)=>{
    const id = req.body.id;
    const nombre = req.body.nombre;
    const usuario = req.body.usuario;
    const claveSinCifrar = req.body.clave;
    const clave = claveSinCifrar;
    try {
        const respuesta = await pool.query(`CALL sp_ModificarUsuario(${id}, '${nombre}', '${usuario}', '${clave}'); `);
        if (respuesta[0].affectedRows == 1){
            success(req, res, 201, "Usuario Modificado: "+ usuario);
        }else{
            error(req, res, 400, "No se pudo modificar el usuario: " + usuario);
        }
    } catch (err) {
        error(req, res, 400, err);
    }
};

export const eliminarUser = async(req, res)=>{
    const id = req.body.id;
    try {
        const respuesta = await pool.query(`CALL sp_EliminarUsuario(${id}) `);
        if (respuesta[0].affectedRows == 1){
            success(req, res, 201, "Usuario Eliminado:");
        }else{
            error(req, res, 400, "No se pudo elimimar el usuario:");
        }
    } catch (err) {
        error(req, res, 400, err);
    }
};

export const logueoUser = async(req, res) =>{
    const {usuario, clave} = req.body;
    const hash = await bcrypt.hash(clave, 2);
    try{
        const respuesta = await pool.query(`CALL sp_BuscarUsuario('${usuario}'); `);
        if(respuesta[0][0].length==0){
            const error = new Error("Usuario no existe");
            res.status(404).json({ error: error.message })
            return;
        }
        res.json(respuesta[0]);
    }catch (error) {
        res.json(error);

    }
}