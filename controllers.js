exports.oculto = function oculto(req, res) {
    res.writeHead(200, {"Content-Type": "text/html"});
    res.write("<h1>oculto</h1>");
    res.end();
}

exports.index = function index(req, res) {
    res.writeHead(200, {"Content-Type": "text/html"});
    res.write(`
    <html>
    <head>
        <meta charset="utf-8" />
        <title>Index</title>
    </head>
    <body>
    <form method='post' action='oculto.html'>
    <label>Senha:</label>
    <input type='text' placehold='senha'>
    <button type='submit'>Enviar</button>
    </form>
    `);
    res.end();
}

exports.notfound = function (req, res) {
    res.writeHead(404, {"Content-Type": "text/html"});
    res.write(`<h1>Página não encontrada: ${req.url}</h1>`);
    res.end();
}