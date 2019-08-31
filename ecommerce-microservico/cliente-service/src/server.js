const express = require('express');

let server = null;

function start (routes, controller, callback){
    const app = express();

    routes(app, controller);

    server = app.listen(
        parseInt(process.env.PORT),
        callback (null, server));
}

function stop() {
    if (server) { server.close(); }
    return true;
}

module.exports = {start, stop};