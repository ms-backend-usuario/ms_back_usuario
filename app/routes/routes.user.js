import { Router } from "express"; //1 paso
import { crearUser, mostrarUser, modificarUser, eliminarUser } from "../controllers/controllers.user.js"

const rutaUser = Router(); //2 paso

//3 paso, empezar con las rutas -> get sirve para mostrar datos
rutaUser.get("/user", mostrarUser);

//11 paso -> post sirve para guardar o crear datos
rutaUser.post("/user", crearUser);

// 13 paso -> modificar
rutaUser.put("/user", modificarUser);

//14 paso -> para borrar
rutaUser.delete("/user", eliminarUser);

//4 paso en browser.js//

export default rutaUser; //8 paso
//9,10 paso en app.js