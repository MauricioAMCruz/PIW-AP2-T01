import { Typography, Box, TextField, Button, Select, MenuItem, InputLabel, FormControl, FormGroup, FormLabel, FormControlLabel, Checkbox } from "@mui/material"
import { useState, useEffect } from "react"
import { useParams } from 'react-router-dom';
import axios from "axios";
import { useNavigate } from "react-router-dom";


const EditarALuno = () => {

    const [nome, setNome] = useState("")
    const [curso, setCurso] = useState("")
    const [ira, setIra] = useState("")
    const navigate = useNavigate()

    let { id } = useParams()


    useEffect(
        () => {

            console.log(id)
            axios.get("http://localhost:3001/alunos/editar/" + id)
                .then(
                    (res) => {
                        setNome(res.data.nome)
                        setCurso(res.data.curso)
                        setIra(res.data.titulacao)
                    }
                )
                .catch(error => console.log(error))
        }
        ,
        [id]
    )

    const handleSubmit = (e) => {
        e.preventDefault();
        const updatedAluno =
        {
            nome, curso, ira
        }

        /* URL de atualizaca*/

        axios.put('http://localhost:3001/alunos/atualizar/' + id, updatedAluno)
            .then(
                res => {
                    navigate("/listarAluno")
                }
            )
            .catch(error => console.log(error))

    }

    /* Formulário de edição de informaões */

    return (
        <>
            <Typography variant="h5" fontWeight="bold">
                Editar Aluno
            </Typography>

            <Box
                component="form"
                onSubmit={handleSubmit}
                sx={{
                    width: "80%"
                }}
            >

                <TextField
                    margin="normal"
                    required
                    fullWidth
                    id="nome"
                    label="Nome Completo"
                    name="nome"
                    onChange={(event) => { setNome(event.target.value) }}
                    value={nome}
                />

                <TextField
                    margin="normal"
                    required
                    fullWidth
                    id="curso"
                    label="Curso"
                    name="curso"
                    onChange={(event) => { setCurso(event.target.value) }}
                    value={curso}
                />

                <TextField
                    margin="normal"
                    required
                    fullWidth
                    id="ira"
                    label="IRA"
                    name="ira"
                    onChange={(event) => { setCurso(event.target.value) }}
                />


                <Box
                    sx={{
                        display: "flex",
                        flexDirection: "row",
                        justifyContent: "center"
                    }}

                >
                    <Button
                        type="submit"
                        variant="contained"
                        sx={{ mt: 3, mb: 2 }}
                    >
                        Editar
                    </Button>
                </Box>

            </Box>

        </>
    )
}

export default EditarAluno