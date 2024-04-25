import express from "express";
import { config } from "dotenv";
import rutaMain from "./routes/routes.main.js";
import rutaUser from "./routes/routes.user.js";//9 paso de routes.user.js -> importamos la ruta del usuario
config();

const app = express();

//middleware // paso 12 despues de hacer lo de new request
app.use(express.json());
app.use(express.urlencoded({ extended : true}));

app.set("port", process.env.PORT || 3000)

//Rutas
app.use("/",rutaMain);
app.use("/api",rutaUser);//10 paso de routes.user.js _> usamos la ruta del usuario


export default app;