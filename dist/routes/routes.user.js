"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _express = require("express");
var _controllersUser = require("../controllers/controllers.user.js");
var _oauth = require("../middlewares/oauth.js");
//1 paso

var rutaUser = (0, _express.Router)(); //2 paso

//3 paso, empezar con las rutas -> get sirve para mostrar datos
rutaUser.get("/user/:id", _controllersUser.mostrarUser);

//
rutaUser.get("/user", _controllersUser.listarUser);

//11 paso -> post sirve para guardar o crear datos
rutaUser.post("/user", _oauth.verifyToken, _controllersUser.crearUser);

// 13 paso -> modificar
rutaUser.put("/user", _oauth.verifyToken, _controllersUser.modificarUser);

//14 paso -> para borrar
rutaUser["delete"]("/user", _oauth.verifyToken, _controllersUser.eliminarUser);

//para loguearse
rutaUser.post("/login", _controllersUser.logueoUser);
var _default = exports["default"] = rutaUser; //8 paso
//9,10 paso en app.js