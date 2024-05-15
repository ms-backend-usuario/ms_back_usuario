"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _express = _interopRequireDefault(require("express"));
var _dotenv = require("dotenv");
var _index = _interopRequireDefault(require("./routes/index.js"));
// import rutaMain from "./routes/routes.main.js";
// import rutaUser from "./routes/routes.user.js";//9 paso de routes.user.js -> importamos la ruta del usuario
//paso 15
(0, _dotenv.config)();
var app = (0, _express["default"])();

//middleware // paso 12 despues de hacer lo de new request
app.use(_express["default"].json());
app.use(_express["default"].urlencoded({
  extended: true
}));
app.set("port", process.env.PORT || 3000);

//Rutas
app.use("/", _index["default"]);
// app.use("/api",rutaUser);//10 paso de routes.user.js _> usamos la ruta del usuario
//QUITAMOS TODAS LAS RUTAS DE APP.JS PARA PASARLAS EN EL INDEX.JS DE ROUTES
var _default = exports["default"] = app;