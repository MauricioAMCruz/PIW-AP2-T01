import { Typography, TableContainer, Paper, Table, TableHead, TableRow, TableCell, TableBody } from "@mui/material"
import { tableCellClasses } from '@mui/material/TableCell'
import IconButton from '@mui/material/IconButton';
import Stack from '@mui/material/Stack';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { Link } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";

import { styled } from '@mui/material/styles';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
        backgroundColor: theme.palette.common.black,
        color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
        fontSize: 14,
    },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.action.hover,
    },
}));

const ListarAluno = () => {

    const [alunos, setAlunos] = useState([])

    useEffect(        
        ()=>{
          axios.get("http://localhost:3001/alunos/listar")
          .then(
              (response)=>{
                  setAlunos(response.data)
              }
          )
          .catch(error=>console.log(error))
        },
        []
    )

    function deleteAluno(id) {
        if (window.confirm("Deseja Excluir?")){
            alert(`Aluno ${id} excluído!`)
        }
    }

    return (
        <>
            <Typography variant="h5" fontWeight="bold">
                Listar Alunos
            </Typography>

             {/* Segue abaixo a tabela atualizada para apresentacao dos alunos, porem, tivemos dificuldade em manipular o ira como solicitad */}

            <TableContainer component={Paper} sx={{ marginTop: 2 }}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                        <TableRow >
                            <StyledTableCell>ID</StyledTableCell>
                            <StyledTableCell>Nome</StyledTableCell>
                            <StyledTableCell>Curso</StyledTableCell>
                            <StyledTableCell>Ira</StyledTableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {alunos.map((aluno) => (
                            <StyledTableRow key={aluno.id}>
                                <StyledTableCell>{aluno.id}</StyledTableCell>
                                <StyledTableCell align="left">{aluno.nome}</StyledTableCell>
                                <StyledTableCell align="left">{aluno.curso}</StyledTableCell>
                                <StyledTableCell align="left">{aluno.ira}</StyledTableCell>
                                <StyledTableCell align="left">

                                    <Stack direction="row" spacing={1}>
                                        <IconButton aria-label="delete" color="primary" onClick={()=>deleteAluno(aluno.id)}>
                                            <DeleteIcon />
                                        </IconButton>
                                        
                                        <IconButton color="primary" aria-label="edit" component={Link} to={"../editarAluno/"+aluno.id}>
                                            <EditIcon />
                                        </IconButton>
                                    </Stack>

                                </StyledTableCell>
                            </StyledTableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </>
    )

}

export default ListarAluno