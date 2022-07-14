import React, { useState } from 'react'
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Header from '../components/Header';
import { useNavigate } from 'react-router-dom';

export default function Login() {
  const navigate = useNavigate();
  const [ loginInfo, setLoginInfo ] = useState({ userId: '', password: '' });

  const login =()=> {
    setLoginInfo({ userId: '', password: '' });
    navigate('/dashboard');
  }

  return (
    <>
        <Header />  

        <Box height='400px' width='500px' marginTop="10%" className='mx-auto'>
            <Paper elevation={3} className='p-4 text-center'>
                <Typography variant='h5' className='text-center'>LOGIN</Typography>

                <form>
                    <TextField 
                      fullWidth 
                      label="Email or Username" 
                      variant="standard" 
                      className='mt-3'
                      value={loginInfo.userId}
                      onChange={e => setLoginInfo({...loginInfo, userId: e.target.value})}
                    />
                    
                    <TextField 
                      fullWidth
                      label="Password" 
                      variant="standard" 
                      className='mt-3' 
                      type='password'
                      value={loginInfo.password}
                      onChange={e => setLoginInfo({...loginInfo, password: e.target.value})}
                    />
                    
                    <Button 
                      fullWidth
                      variant='contained' 
                      color='success' 
                      className='mt-3'
                      onClick={login}
                    >
                      LOGIN
                    </Button>
                </form>
            </Paper>
        </Box>
    </>
  )
}
