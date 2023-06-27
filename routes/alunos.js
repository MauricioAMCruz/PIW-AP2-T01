var express = require('express');
var router = express.Router();
var alunoServiceMongo = require("../services/aluno.service.mongo");

router.get(
    '/listar',
     function(req, res, next) {
       alunoServiceMongo.list(req,res)
    }
);

router.post(
    '/cadastrar',
     function(req, res, next) {
        alunoServiceMongo.register(req,res)
    }
);

router.get(
    '/recuperar/:id',
     function(req, res, next) {
        alunoServiceMongo.retrieve(req,res)
    }
);

router.put(
    '/atualizar/:id',
     function(req, res, next) {
        alunoServiceMongo.update(req,res)
    }
);


router.delete(
    '/remover/:id',
     function(req, res, next) {
        alunoServiceMongo.delete(req,res)
    }
);

module.exports = router;
