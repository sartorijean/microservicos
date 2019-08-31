// carregado modulo do dotenv-safe pois precisamos das variáveis de ambiente
require('dotenv-safe').config();

// carregamos os demais arquivos
const routes= require('./routes/routes');
const server= require('./server');
const controller = require ('./controllers/cliente');

server.start(routes, controller, function (err, app) {
    console.log('Servidor startado');
})

