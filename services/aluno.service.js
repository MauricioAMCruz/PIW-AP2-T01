const ProfessorModel = require("../models/professor.models")

const professores = [
    { id: 0, nome: "Vito Corleone", curso: "SI", ira: "9.6"},
    { id: 1, nome: "Michael Corleone", curso: "DD", ira: "3.6"},
    { id: 2, nome: "Luca Brasi", curso: "SI", ira: "6.1"},
    { id: 3, nome: "Kay Adams", curso: "SI", ira: "8.0"},
    { id: 4, nome: "Peter Clemenza", curso: "CC", ira: "3.4"}
]

let id = 5

class AlunoService {
    static list(){
        return aluno
    }

    static register(data) {
        let aluno = new AlunoModel(
            id++,
            data.nome,
            data.curso,
            data.ira
        )
        alunos.push(aluno)
        return aluno
    }

    static retrieve(id){
        for(let i=0;i<alunos.length;i++)
            if(alunos[i].id == id) return alunos[i]
        return null
    }

    static update(id,data){
        for(let i=0;i<alunos.length;i++)
            if(alunos[i].id == id){
                alunos[i].nome = data.nome
                alunos[i].curso = data.curso
                alunos[i].ira = data.ira
                return alunos[i]
            }
        return null
    }

    static delete(id) {
        for(let i=0;i<alunos.length;i++)
            if(alunos[i].id == id){
                alunos.splice(i,1) 
                return true
            }
        return false
    }
}

module.exports = AlunoService