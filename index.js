const server = require("./server");
const router = require("./router");
const controllers = require("./controllers");

const rotas = {};
rotas["/"] = controllers.oculto;

server.start(router.route, rotas);