module.exports = function (app, controller) {

    app.get('/produtos/:produtos_id', function (req, res, next) {
        controller.getProdutoPorId(req.params.produtos_id, function (err, produtos) {
            if (err) return next(err);

            res.json(produtos);
        });
    })
    app.get('/produtosdisponiveis', function (req, res, next) {
       controller.getProdutosComQuantidadeEstoque(function (err, produtos) {
            if (err) return next(err);
            res.json(produtos);
        });
    })
};
