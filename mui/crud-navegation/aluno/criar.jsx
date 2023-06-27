import { Typography, Box, TextField, Button, Select, MenuItem, InputLabel, FormControl, FormGroup, FormLabel, FormControlLabel, Checkbox } from "@mui/material"
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";


const CriarAluno = () => {

    const [nome, setNome] = useState("")
    const [curso, setCurso] = useState("")
    const [ira, setIra] = useState("")
    const navigate = useNavigate()


    const handleSubmit = (e) => {
        e.preventDefault();
        const newAluno = {nome,curso,ira}
        axios.post("http://localhost:3001/alunos/Criar",newAluno)
        .then(
            (res) => {
                console.log(res.data.id)
                alert(`Aluno ${nome} criado com sucesso!`)
                navigate("/listarAluno")
            }
        )
        .catch(error=>console.log(error))


    }

/*                  MODELO ANTIGO DE CADASTRAR O CURSO
                    <TextField
                    margin="normal"
                    required
                    fullWidth
                    id="curso"
                    label="Curso"
                    name="curso"
                    onChange={(event) => { setCurso(event.target.value) }}
                />
                */

/* Abaixo, segue a implementacao do campo curso usando um select de acordo com a questao 03. Usamos o modelo select de professor para implementar as opcoes de curso*/

    return (
        <>
            <Typography variant="h5" fontWeight="bold">
                Criar Aluno
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
                />

                {/* Identificar o curso do aluno atrav~es de um select*/}
                
                <FormControl fullWidth sx={{ marginTop: 2 }}>
                    <InputLabel id="select-tit-label">Curso</InputLabel>
                    <Select
                        labelId="select-tit-label"
                        value={curso}
                        label="Curso"
                        onChange={(event) => { setCurso(event.target.value) }}

                    >
                        <MenuItem value="DD">DD</MenuItem>
                        <MenuItem value="SI">SI</MenuItem>
                        <MenuItem value="CC">CC</MenuItem>
                        <MenuItem value="ES">ES</MenuItem>
                        <MenuItem value="EC">EC</MenuItem>
                        <MenuItem value="RC">RC</MenuItem>
                    </Select>
                </FormControl>

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
                        Cadastrar
                    </Button>
                </Box>

            </Box>

        </>
    )
}

export default CriarAluno