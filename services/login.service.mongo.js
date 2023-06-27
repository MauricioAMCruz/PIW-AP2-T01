var AlunoModel = require("../models/aluno.model.mongo")

class AlunoService {

    static list(request,response){
        AlunoModel.find()
        .then(
            (alunos) => {
                response.json(alunos)
            }
        )
    }

    static register(request,response){
        AlunoModel.create(request.body)
        .then(
            (aluno) => {
                response.json(aluno)
            }
        )
    }

    static retrieve(request,response){
        AlunoModel.findById(request.params.id)
        .then(
            (aluno) => {
                response.json(aluno)
            }
        )
    }

    static update(request,response){
        AlunoModel.findByIdAndUpdate(
            request.params.id,
            request.body,
            {new:true}
        )
        .then(
            (aluno) => response.json(aluno)
        )
    }

    static delete(request,response){
        AlunoModel.findByIdAndDelete(request.params.id)
        .then((aluno)=>response.json(aluno))
    }
}

module.exports = AlunoService