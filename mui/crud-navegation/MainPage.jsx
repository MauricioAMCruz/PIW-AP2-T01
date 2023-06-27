import { BrowserRouter, Routes, Route } from "react-router-dom"
import { Container } from "@mui/material"
import MyMenu from "./MyMenu"
import CriarAluno from "./alunos/Criar"
import ListarAluno from "./alunos/Listar"
import EditarAluno from "./alunos/Editar"

const MainPage = () => {
    return (

        <BrowserRouter>
            <MyMenu />
            <Container 
                sx={{marginTop:5}}
            >
                <Routes>
                    <Route path="criarAluno/" element={<CriarAluno />} />
                    {/* <Route path="listarProfessor/:id/:nome" element={<ListarProfessor />} /> */}
                    <Route path="listarAluno/" element={<ListarAluno />} /> 
                    <Route path="editarAluno/:id" element={<EditarAluno />} />
                </Routes>
            </Container>
        </BrowserRouter>

    )

}

export default MainPage