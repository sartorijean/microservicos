const mongoose = require('mongoose');
let connection = null;

function conectar(callback) {
    // se a conexão existir devolve ela
    if (connection) {
        return callback(null, connection);
    }

    // Vamos criar a conexão
    mongoose.connect(process.env.MONGO_CONNECTION, 
        {useNewUrlParser: true}, function(err, conn) {
            // Ocorreu erro 
            if (err) {
                return callback(err, null);
            } else {
                connection = conn;
                return callback(null, connection);
            }
        });
}

function desconectar() {
    if (!connection) {
        return true;
    }
    connection.close();
    connection = null;
    return true;
}

module.exports = {conectar, desconectar};