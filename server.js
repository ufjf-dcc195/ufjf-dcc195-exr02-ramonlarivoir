const http = require("http");
const url = require("url");

function start(route, routes){
    
    let server = http.createServer(function(req, res){
        route(url.parse(req.url).pathname, routes, req, res);
    });
    server.listen(8080);

    console.log("Servidor na porta http://localhost:8080");
}

exports.start = start;