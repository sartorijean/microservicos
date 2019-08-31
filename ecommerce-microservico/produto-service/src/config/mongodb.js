const mongoose = require("mongoose");
var connection = null;

function connect(callback) {
    // Se eu já tenho a conexão retorno, passando null no primeiro parametro e a conexão no segundo. Como acontece quando eu vou gravar ou recuperar algo no banco de dados, se der erro vai vir no primeiro parametro, senão o objeto em questão estará no segundo parametro. Esta é a forma padrão do node o primeiro parametro é reservado para o erro, se ocorrer, e o segundo é o resultado da operação que obteve sucesso.
    if (connection) return callback(null, connection);

    // Aqui vamos utilizar uma variável de ambiente que já popularemos.
    mongoose.connect(process.env.MONGO_CONNECTION, { useNewUrlParser: true }, function (err, conn) {

        // Ocorreu erro? Popula o primeiro parametro 
        if (err)
            return callback(err, null);
       // Senão retorna a conexão no segundo parametro
        else {
            connection = conn;
            return callback(null, connection);
        }
    });
}

// E a função disconnect que zera a nossa conexão.
function disconnect() {
    if (!connection) return true;

    connection.close();
    connection = null;
    return true;
}

// E aqui estamos exportando nossas duas funções. Novo né? Ainda não tinhamos feito isso, exportar dois métodos. Tinhamos exportado um objeto ou uma função. Então, é possivel exportar mais de um objeto ou função com o module.exports.
module.exports = { connect, disconnect };