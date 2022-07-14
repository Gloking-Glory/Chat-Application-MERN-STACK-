import React from 'react'
import ChatBackground from '../../images/chatBackground.jpg'
import Box from '@mui/material/Box';
import AppBar from '@mui/material/AppBar';
import Container from '@mui/material/Container';
import Toolbar from '@mui/material/Toolbar';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import ProfileImage from '../../images/profileImage.jpg'
import Typography from '@mui/material/Typography';

export default function MessageCenter() {

    return (
        <>
            <Box className='p-3' sx={{ backgroundColor: '#FFF6E0'}}>
                <Avatar alt='profileImage' src={ProfileImage} />
                <Typography>Norrise Decker</Typography>
            </Box>







            {/* <img src={ChatBackground} alt="background" /> */}

        </>
    )
}
