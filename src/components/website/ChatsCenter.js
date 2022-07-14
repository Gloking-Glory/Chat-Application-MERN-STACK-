import React from 'react';
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
    const userChat = [
        { profilePic: ProfileImage, username: 'Ayanwola Glory', messageNum: '5' },
        { profilePic: ProfileImage, username: 'Dapo Abiodun', messageNum: '8' },
        { profilePic: ProfileImage, username: 'Senior Loco', messageNum: '4' },
        { profilePic: ProfileImage, username: 'Scope Marshal', messageNum: '2' },
        { profilePic: ProfileImage, username: 'Jide Jendor', messageNum: '0' },
        { profilePic: ProfileImage, username: 'Ayanwola Glory', messageNum: '5' },
    ];
    
    return (
        <>
            <Box className='p-3'>
                <Grid container>
                    <Grid item xs={8}>
                        <Typography variant='h5'>Chats</Typography>
                    </Grid>

                    <Grid item xs={4}>
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

                <Grid container className='mt-4'>
                    <Grid item xs={8}>
                        <Typography variant='p'>DIRECT MESSAGES</Typography>
                    </Grid>

                    <Grid item xs={4}>
                        <IconButton className='mx-5'>
                            <AddBoxIcon />
                        </IconButton>
                    </Grid>
                </Grid>

                { userChat.map((value, i)=> (
                    <ButtonGroup variant='text' key={i} fullWidth className='mt-3'>
                        <Button sx={{ color: '#969CA2'}}>
                            <Grid container>
                                <Grid item xs={1}>
                                    <Stack>
                                        <Avatar alt='profileImage' src={ProfileImage} />
                                    </Stack>
                                </Grid>
                                <Grid item xs={10}>
                                    <Typography 
                                        variant='p' 
                                        className='mx-3'
                                        sx={{ fontSize: '16px' }}
                                    > 
                                        { value.username } 
                                    </Typography>
                                </Grid>
                                <Grid 
                                    item xs={1} 
                                    sx={{ backgroundColor: '#969CA2', color: '#000', height: '70%'}} 
                                    className='rounded'
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
