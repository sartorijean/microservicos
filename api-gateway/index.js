const http = require('http');
const express= require('express');
const httpProxy = require ('express-http-proxy');
const app = express();

const clienteServiceProxy = httpProxy('http://localhost:3001');
const produtoServiceProxy = httpProxy('http://localhost:3002');

//Proxy request
/*app.get('/clientes', function(req, res, next) {
    clienteServiceProxy(req, res, next);
});
app.get('/produtos', function (req,res, next) {
    produtoServiceProxy(req, res, next);
});*/

// Middleware. Toda requisição passará aqui
app.use(function(req, res, next) {
    console.log('Acontecendo algo no middleware', req.url);
    if (req.url.startsWith('/clientes')) {
        clienteServiceProxy(req, res, next);
    } else if (req.url.startsWith('/produtos')) {
        produtoServiceProxy(req, res, next);
    } else {
        // Garantir que o próximo comando seja executado
        next();
    }
});

//app.use(express.json());
//app.use(express.urlencoded({extended:false}));

let server = http.createServer(app);
server.listen(3000);