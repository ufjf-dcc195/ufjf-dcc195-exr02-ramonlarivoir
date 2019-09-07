exports.oculto = function oculto(req, res) {
    res.writeHead(200, {"Content-Type": "text/html"});
    res.write("<h1>oculto</h1>");
    res.end();
}