module.exports = function (app, controller) {
    app.get('/clientes', function(req, res, next) {
        controller.getTodosClientes(function(err, clientes) {
            if (err) { return next(err) };

            res.json(clientes);
        })
    });

    app.get('/clientes/:uf', function (req, res, next) {
        controller.getClientesPorUF(req.params.uf, 
            function(err, clientes){
                if (err) { return next(err) };

                res.json(clientes);
            }
        )
    });
};