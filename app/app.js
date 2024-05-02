import express from "express";
import { config } from "dotenv";
// import rutaMain from "./routes/routes.main.js";
// import rutaUser from "./routes/routes.user.js";//9 paso de routes.user.js -> importamos la ruta del usuario
import ruta from "./routes/index.js" //paso 15
config();

const app = express();

//middleware // paso 12 despues de hacer lo de new request
app.use(express.json());
app.use(express.urlencoded({ extended : true}));

app.set("port", process.env.PORT || 3000)

//Rutas
app.use("/", ruta);
// app.use("/api",rutaUser);//10 paso de routes.user.js _> usamos la ruta del usuario
//QUITAMOS TODAS LAS RUTAS DE APP.JS PARA PASARLAS EN EL INDEX.JS DE ROUTES


export default app;