const express = require('express');
const routes = require('./routes');

class App {

  //executado automaticamente toda vez que a class APP é chamada
  constructor() {
    this.server = express();

    this.middlewares();
    this.routes();
  }

  middlewares() {
    this.server.use(express.json());
  }

  routes() {
    this.server.use(routes);
  }

}

module.exports = new App().server;