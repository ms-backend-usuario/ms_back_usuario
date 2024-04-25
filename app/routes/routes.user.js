import { Router } from "express"; //1 paso
import { success } from "../message/browser.js" //6 paso

const rutaUser = Router(); //2 paso

//3 paso, empezar con las rutas -> get sirve para mostrar datos
rutaUser.get("/user", (req, res)=>{
    //7paso
    success(req, res, 200, "Conectado con Usuario");
})

//11 paso -> post sirve para guardar o crear datos
rutaUser.post("/user",(req, res) =>{

    const dato = req.body;
    console.log(dato);

    success(req, res, 200, "Post: Ha ingresado un dato");
})

//4 paso en browser.js//

export default rutaUser; //8 paso
//9,10 paso en app.js