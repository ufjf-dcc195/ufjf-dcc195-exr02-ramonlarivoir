var qs = require("querystring");

exports.oculto = function oculto(req, res) {
    var queryData = '';
    req.on('data', function (data) {
        queryData += data;
    });

    req.on('end', function () {
        res.writeHead(200, { "Content-Type": "text/html" });
        var datas = qs.parse(queryData);
        if (datas.password == '54321') {
            res.write("<h1>Autorizado!</h1>");
        }
        else {
            res.write(`
            <html>
            <head>
                <meta charset="utf-8" />
                <title>Index</title>
            </head>
            <body>
                <h1>Não autorizado!</h1>
                <a href='index.html'>Voltar</a>
            </body>
            `);
            res.end();
        }
    });
}

exports.index = function index(req, res) {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.write(`
    <html>
    <head>
        <meta charset="utf-8" />
        <title>Index</title>
    </head>
    <body>
    <form method='post' action='oculto.html'>
    <label>Senha:</label>
    <input type='text' placehold='senha' name='password'>
    <button type='submit'>Enviar</button>
    </form>
    `);
    res.end();
}

exports.notfound = function (req, res) {
    res.writeHead(404, { "Content-Type": "text/html" });
    res.write(`<h1>Página não encontrada: ${req.url}</h1>`);
    res.end();
}