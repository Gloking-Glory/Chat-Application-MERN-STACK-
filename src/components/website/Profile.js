import React from 'react';
import './styles/ProfileStyle.css';
import { useSelector } from 'react-redux';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

export default function Profile({ updateDisplay }) {
    const user = useSelector(state => state);

    return (
        <>
            <Box className='p-2 card bg-light border-0'>
                <img src={user.profilePic} alt="profile" className='card-img-top' height = '300px' />
                <IconButton id='closeButton' onClick={updateDisplay}>
                    <CloseIcon />
                </IconButton>
                
                <Box className='card-body'>
                    <Typography variant='h5' className='card-title text-center text-uppercase' > 
                        { user.username } 
                    </Typography>
                    <Box>
                        <Typography variant='subtitle1' className="mt-2">NAME:</Typography>
                        <Typography variant='h5' className='text-uppercase mt-1' sx={{ fontSize: '20px'}}> 
                            { user.username }
                        </Typography>
                        
                        <Typography variant='subtitle1' className="mt-2">EMAIL:</Typography>
                        <Typography variant='h5' className='text-uppercase mt-2' sx={{ fontSize: '20px'}}> 
                            { user.email }
                        </Typography>
                        
                        <Typography variant='subtitle1' className="mt-2">LOCATION:</Typography>
                        <Typography variant='h5' className='text-uppercase mt-2' sx={{ fontSize: '20px'}}> 
                            Nigeria
                        </Typography>
                    </Box>
                </Box>
            </Box>
        </>
    )
}
