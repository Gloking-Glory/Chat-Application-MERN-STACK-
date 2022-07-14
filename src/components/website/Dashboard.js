import React from 'react'
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
          
          <Grid item xs={1} backgroundColor='#2E2E2E' height='100vh'>
            <NavBar />
          </Grid>

          <Grid item xs={3} backgroundColor='#fff' height='100vh'>
            <ChatsCenter />            
          </Grid>

          <Grid item xs={8} height='100vh'>
            <MessageCenter />
          </Grid>
        </Grid>
      </Box>
    </>
  )
}
