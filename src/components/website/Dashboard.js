import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import NavBar from './NavBar';
import ChatsCenter from './ChatsCenter';
import MessageCenter from './MessageCenter';

export default function Dashboard() {

  return (
    <>
      <Box>
        <Grid container className='row'>
          
          <Grid item backgroundColor='#2E2E2E' sx={{ maxHeight: '100vh'}} className='col-lg-1'>
            <NavBar />
          </Grid>

          <Grid item backgroundColor='#fff' height='100vh' className='col-lg-3'>
            <ChatsCenter />            
          </Grid>

          <Grid item height='100vh' className='col-lg-8'>
            <MessageCenter />
          </Grid>
        </Grid>
      </Box>
    </>
  )
}
