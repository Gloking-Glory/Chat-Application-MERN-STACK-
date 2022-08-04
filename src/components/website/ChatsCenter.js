import React from 'react';
import { useDispatch } from 'react-redux';
import { setCurrentChat } from '../redux/Action';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { IconButton } from '@mui/material';
import AddBoxIcon from '@mui/icons-material/AddBox';
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import SearchIcon from '@mui/icons-material/Search';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import ProfileImage from '../../images/profileImage.jpg'

export default function ChatCenter() {
    const dispatch = useDispatch();
    const userChat = [
        { profilePic: ProfileImage, username: 'Ayanwola Glory', email: 'scope@mail.com', messageNum: '5' },
        { profilePic: ProfileImage, username: 'Dapo Abiodun', email: 'scope@mail.com', messageNum: '8' },
        { profilePic: ProfileImage, username: 'Senior Loco', email: 'scope@mail.com', messageNum: '4' },
        { profilePic: ProfileImage, username: 'Scope Marshal', email: 'scope@mail.com', messageNum: '2' },
        { profilePic: ProfileImage, username: 'Jide Jendor', email: 'scope@mail.com', messageNum: '0' },
        { profilePic: ProfileImage, username: 'Ayanwola Glory', email: 'scope@mail.com', messageNum: '5' }
    ];

    const setChat = index => {
        dispatch(setCurrentChat(userChat[index]));
    }
    
    return (
        <>
            <Box className='p-3'>
                <Grid container className='row'>
                    <Grid item className='col-8'>
                        <Typography variant='h5'>Chats</Typography>
                    </Grid>

                    <Grid item className='col-4'>
                        <IconButton>
                            <AddBoxIcon />
                        </IconButton>
                    </Grid>
                </Grid>

                <Box className='text-center mt-3'>
                    <TextField 
                        fullWidth
                        variant='outlined' 
                        label='Search'
                        InputProps = {{
                            startAdornment: (
                                <InputAdornment position='start'>
                                    <SearchIcon />
                                </InputAdornment>
                            )
                        }}
                    />
                </Box>

                <Grid container className='mt-4 row'>
                    <Grid item className='col-8'>
                        <Typography variant='p'>DIRECT MESSAGES</Typography>
                    </Grid>

                    <Grid item className='col-4'>
                        <IconButton className='mx-5'>
                            <AddBoxIcon />
                        </IconButton>
                    </Grid>
                </Grid>

                { userChat.map((value, i)=> (
                    <ButtonGroup variant='text' key={i} fullWidth className='mt-3' onClick={()=> setChat(i)}>
                        <Button sx={{ color: '#969CA2'}}>
                            <Grid container className='row'>
                                <Grid item className='col-1'>
                                    <Stack>
                                        <Avatar alt='profileImage' src={ProfileImage} />
                                    </Stack>
                                </Grid>
                                <Grid item className='col-9'>
                                    <Typography 
                                        variant='p' 
                                        className='mx-3'
                                        sx={{ fontSize: '16px' }}
                                    > 
                                        { value.username } 
                                    </Typography>
                                </Grid>
                                <Grid 
                                    item
                                    sx={{ backgroundColor: '#969CA2', color: '#000', height: '70%'}} 
                                    className='rounded col-1'
                                >
                                    <Typography variant='p'> { value.messageNum } </Typography>
                                </Grid>
                            </Grid>
                        </Button>
                    </ButtonGroup>
                ))}

            </Box>
        </>
    )
}
