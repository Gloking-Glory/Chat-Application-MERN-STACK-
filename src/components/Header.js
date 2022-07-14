import React from 'react'
import '../styles/HeaderStyle.css';
import AppBar from '@mui/material/AppBar';
import Container from '@mui/material/Container';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Logo from '../images/chatLogo.png';
import { useNavigate } from 'react-router-dom';

export default function Header() {
    const navigate = useNavigate();

    return (
        <>
            <AppBar>
                <Container maxWidth="xl">
                    <Toolbar disableGutters>
                        <img src={Logo} alt="logo" className="logo" />
                        <Typography variant="h3" className="d-none d-lg-block">
                            ChatApp
                        </Typography>
                    
                        <Box marginLeft='auto'>
                            <Button variant="contained" onClick={()=> navigate('/')}>SIGN UP</Button>
                            <Button variant="contained" className='mx-3' onClick={()=> navigate('/login')}>LOGIN</Button>                    
                        </Box>
                    </Toolbar>
                </Container>
            </AppBar>
        </>
    )
}
