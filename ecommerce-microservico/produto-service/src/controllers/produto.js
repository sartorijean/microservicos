
const mongodb = require("../config/mongodb");
const ObjectId = require('mongoose').Types.ObjectId;

function getProdutoPorId(produtos_id, callback) {
    mongodb.connect(function (err, db) {
        db.collection("produto").find({_id: ObjectId(produtos_id)}).toArray(
            function (err, produtos) {
                if (err) return callback(err, null);
                callback(err, produtos);
            });
    });
}
function getProdutosComQuantidadeEstoque(callback) {
    mongodb.connect( function (err, db) {
        db.collection("produto").find({ quantidadeEstoque: { $gt: 0 } }).toArray( function (err, produtos) {
            if (err) return callback(err, null);
            callback(err, produtos);
        });
    });
}

module.exports = {getProdutoPorId, getProdutosComQuantidadeEstoque};
