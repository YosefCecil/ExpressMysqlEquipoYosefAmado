const express = require("express");
const route = express.Router();
const controlador_alumno = require("../controladores/controlador_alumno")


route.get ("/",                     controlador_alumno.mostrar);
route.post("/agregar",              controlador_alumno.agregar);
route.get ("/nuevo",                controlador_alumno.nuevo);
route.get ("/editar/:Matri",        controlador_alumno.editar);
route.post("/actualizar/:Matri",    controlador_alumno.actualizar);
route.get ("/eliminar/:Matri",      controlador_alumno.eliminar);

module.exports = route;