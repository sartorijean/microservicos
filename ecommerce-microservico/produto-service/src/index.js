require('dotenv-safe').config();

// carregamos os arquivos que construimos
const routes = require('./routes/routes');
const server = require('./server');
const controller = require('./controllers/produto');

// o start do nosso micro-serviço
server.start(routes, controller, function (err, app) {
    console.log("Servidor startado");
});
