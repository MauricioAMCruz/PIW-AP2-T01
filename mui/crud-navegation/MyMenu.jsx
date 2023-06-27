import React from "react";
import { AppBar, Container, Toolbar, Typography, Box, Menu, MenuItem, Button, Tooltip, IconButton } from "@mui/material"
import { Link } from "react-router-dom";
import MenuIcon from '@mui/icons-material/Menu';
import AdbIcon from "@mui/icons-material/Adb"

const MyMenu = () => {

    const [anchorElNav, setAnchorElNav] = React.useState(null);
    const [anchorElAluno, setAnchorElAluno] = React.useState(null);

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };
    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };
    const handleOpenAlunoMenu = (event) => {
        setAnchorElAluno(event.currentTarget);
    };
    const handleCloseAlunoMenu = () => {
        setAnchorElAluno(null);
    };

    function sandwichMenu() {
        return (
            <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                <IconButton
                    size="large"
                    aria-label="account of current user"
                    aria-controls="menu-appbar"
                    aria-haspopup="true"
                    color="inherit"
                    onClick={handleOpenNavMenu}
                >
                    <MenuIcon />
                </IconButton>
                <Menu
                    id="menu-appbar"
                    anchorEl={anchorElNav}
                    anchorOrigin={{
                        vertical: 'bottom',
                        horizontal: 'left',
                    }}
                    keepMounted
                    transformOrigin={{
                        vertical: 'top',
                        horizontal: 'left',
                    }}
                    open={Boolean(anchorElNav)}
                    onClose={handleCloseNavMenu}
                    sx={{
                        display: { xs: 'block', md: 'none' },
                    }}
                >
                    <Box sx={{ flexGrow: 0 }}>
                        <MenuItem onClick={handleOpenAlunoMenu}>
                            <Typography textAlign="center">Alunos</Typography>
                        </MenuItem>
                        <Menu
                            id="menu-appbar"
                            anchorEl={anchorElAluno}
                            open={Boolean(anchorElAluno)}
                            onClose={handleCloseAlunoMenu}
                            sx={{ marginLeft: 1 }}
                        >
                            <MenuItem onClick={
                                () => {
                                    handleCloseAlunoMenu()
                                    alert("Carregando próxima tela!")
                                }
                            }>
                                <Typography textAlign="center">Criar</Typography>
                            </MenuItem>
                            <MenuItem onClick={handleCloseAlunoMenu}>
                                <Typography textAlign="center">Listar</Typography>
                            </MenuItem>
                        </Menu>
                    </Box>
                    <MenuItem onClick={handleCloseNavMenu}>
                        <Typography textAlign="center">Alunos</Typography>
                    </MenuItem>
                    <MenuItem onClick={handleCloseNavMenu}>
                        <Typography textAlign="center">Sobre</Typography>
                    </MenuItem>
                </Menu>
            </Box>
        )
    }


    function alunoDropMenu() {
        return (
            <Box sx={{ flexGrow: 0 }}>
                <Tooltip title="Abrir opções">
                    <Button
                        onClick={handleOpenAlunoMenu}
                        sx={{ my: 2, color: 'white', display: 'block' }}
                    >
                        Alunos
                    </Button>
                </Tooltip>
                <Menu
                    id="menu-appbar"
                    anchorEl={anchorElAluno}
                    open={Boolean(anchorElAluno)}
                    onClose={handleCloseAlunoMenu}
                    sx={{ marginLeft: 1 }}
                >
                    <MenuItem onClick={handleCloseAlunoMenu}>
                        <Typography textAlign="center">Criar</Typography>
                    </MenuItem>
                    <MenuItem onClick={handleCloseAlunoMenu}>
                        <Typography textAlign="center">Listar</Typography>
                    </MenuItem>
                </Menu>
            </Box>
        )
    }

    return (
        <AppBar position="static"> 
            <Container maxWidth="xl">
                <Toolbar disableGutters>
                    <AdbIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
                    <Typography
                        variant="h5"
                        noWrap
                        component="a"
                        href="/"
                        sx={{
                            mr: 2,
                            display: { xs: 'none', md: 'flex' },
                            fontFamily: 'monospace',
                            fontWeight: 700,
                            letterSpacing: '.3rem',
                            color: 'inherit',
                            textDecoration: 'none',
                        }}
                    >
                        LOGO
                    </Typography>

                    {sandwichMenu()}

                    <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                        {alunoDropMenu()}
                        <Button
                            onClick={() => alert('Sobre!')}
                            sx={{ my: 2, color: 'white', display: 'block' }}
                        >
                            Sobre
                        </Button>
                    </Box>

                </Toolbar>
            </Container>
        </AppBar>
    )

}

export default MyMenu