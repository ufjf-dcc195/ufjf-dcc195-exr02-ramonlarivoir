const server = require("./server");
const router = require("./router");
const controllers = require("./controllers");

const rotas = {};
rotas["/"] = controllers.index;
rotas["/index.html"] = controllers.index;
rotas["/oculto.html"] = controllers.oculto;
rotas["404"] = controllers.notfound;

server.start(router.route, rotas);