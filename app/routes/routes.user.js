import { Router } from "express"; //1 paso
import { crearUser, mostrarUser, modificarUser, eliminarUser, listarUser, logueoUser } from "../controllers/controllers.user.js"

const rutaUser = Router(); //2 paso

//3 paso, empezar con las rutas -> get sirve para mostrar datos
rutaUser.get("/user/:id", mostrarUser);

//
rutaUser.get("/user", listarUser);

//11 paso -> post sirve para guardar o crear datos
rutaUser.post("/user", crearUser);

// 13 paso -> modificar
rutaUser.put("/user", modificarUser);

//14 paso -> para borrar
rutaUser.delete("/user", eliminarUser);

//para loguearse
rutaUser.post("/login", logueoUser);

export default rutaUser; //8 paso
//9,10 paso en app.js