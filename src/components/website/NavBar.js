import React from 'react';
import Box from '@mui/material/Box';
import { IconButton } from '@mui/material';
import ArticleIcon from '@mui/icons-material/Article';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ChatIcon from '@mui/icons-material/Chat';
import RecentActorsIcon from '@mui/icons-material/RecentActors';
import WifiCalling3Icon from '@mui/icons-material/WifiCalling3';
import SettingsIcon from '@mui/icons-material/Settings';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import ProfileImage from '../../images/profile.png'

export default function NavBar() {
  return (
    <>
        <Box>
            <IconButton className='d-block mx-auto mt-4'>
                <ArticleIcon sx={{ fontSize: 30, color:'#fff' }} />
            </IconButton>
            
            <IconButton className='d-block mx-auto mt-4'>
                <AccountCircleIcon sx={{ fontSize: 30, color:'#fff' }} />
            </IconButton>
            
            <IconButton className='d-block mx-auto mt-4'>
                <ChatIcon sx={{ fontSize: 30, color:'#fff' }} />
            </IconButton>
            
            <IconButton className='d-block mx-auto mt-4'>
                <RecentActorsIcon sx={{ fontSize: 30, color:'#fff' }} />
            </IconButton>
            
            <IconButton className='d-block mx-auto mt-4'>
                <WifiCalling3Icon sx={{ fontSize: 30, color:'#fff' }} />
            </IconButton>
            
            <IconButton className='d-block mx-auto mt-4'>
                <SettingsIcon sx={{ fontSize: 30, color:'#fff' }} />
            </IconButton>
            
            <Stack className='d-block mx-auto mt-4' >
                <Avatar alt='profile' src={ProfileImage} sx={{ width: '80px', height: '80px'}} />
            </Stack>
        </Box>
            
    </>
  )
}
