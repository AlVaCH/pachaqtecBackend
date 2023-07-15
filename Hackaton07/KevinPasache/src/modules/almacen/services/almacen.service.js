const { response } = require("express");
const almacen = require("../entity/almacen.entity");

class AlmacenService {
  constructor() {}

  getAll(req, res = response) {
    res.json(almacen.getLista);
  }

  agregarAlmacen(product) {
    almacen.agregarProductos(product);
  }
}

const almacenService = new AlmacenService();

module.exports = almacenService;