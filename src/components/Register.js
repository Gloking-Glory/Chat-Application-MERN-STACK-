import React, { useState } from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Header from '../components/Header';
import { useNavigate } from 'react-router-dom';

export default function Register() {
    const navigate = useNavigate();
    const [regInfo, setRegInfo] = useState({ username: '', email: '', password: '' });
    
    const register =()=> {
        setRegInfo({ username: '', email: '', password: '' });
        navigate('/login');
    }

    return (
        <>
            <Header />  

            <Box height='400px' width='500px' marginTop="10%" className='mx-auto'>
                <Paper elevation={3} className='p-4 text-center'>
                    <Typography variant='h5' className='text-center'>REGISTER</Typography>

                    <form>
                        <TextField 
                            fullWidth 
                            label="Username" 
                            variant="standard" 
                            className='mt-3'
                            value={regInfo.username}
                            onChange={e => setRegInfo({...regInfo, username: e.target.value})}
                        />
                        <TextField 
                            fullWidth 
                            label="Email" 
                            variant="standard" 
                            className='mt-3'
                            value={regInfo.email}
                            onChange={e => setRegInfo({...regInfo, email: e.target.value})}
                        />
                        <TextField 
                            fullWidth 
                            label="Password" 
                            variant="standard" 
                            className='mt-3'
                            type='password'
                            value={regInfo.password}
                            onChange={e => setRegInfo({...regInfo, password: e.target.value})}
                        />

                        <Button 
                            variant='contained' 
                            color='success' 
                            className='mt-3' 
                            fullWidth
                            onClick={register}
                        >
                            REGISTER
                        </Button>
                    </form>
                </Paper>
            </Box>

        </>
    )
}
