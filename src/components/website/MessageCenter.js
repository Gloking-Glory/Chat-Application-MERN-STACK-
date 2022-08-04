import React, { useState } from 'react';
import Profile from './Profile';
import { useSelector } from 'react-redux';
import { IconButton } from '@mui/material';
import Background from '../../images/backgroundChat.jpg';
import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import ProfileImage from '../../images/profileImage.jpg'
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import SearchIcon from '@mui/icons-material/Search';
import PhoneInTalkIcon from '@mui/icons-material/PhoneInTalk';
import InfoIcon from '@mui/icons-material/Info';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import SentimentSatisfiedAltIcon from '@mui/icons-material/SentimentSatisfiedAlt';
import TextField from '@mui/material/TextField';
import MicIcon from '@mui/icons-material/Mic';
import SendIcon from '@mui/icons-material/Send';
import ArticleIcon from '@mui/icons-material/Article';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemIcon from '@mui/material/ListItemIcon';
import VolumeOffIcon from '@mui/icons-material/VolumeOff';
import DeleteIcon from '@mui/icons-material/Delete';
import Picker from 'emoji-picker-react';

export default function MessageCenter() {
    const user = useSelector(state => state);
    const [ displayProfile, setDisplayProfile ] = useState(false);
    const [ menuAnchor, setMenuAnchor ] = useState(false);
    const [ chosenEmoji, setChosenEmoji ] = useState(null);
    const userMessage = [
        { text: 'Hello', time: '02:38pm', status: 'sender', name: 'Norris Decker' },
        { text: 'Hi, are you doing?', time: '03:00pm', status: 'receiver', name: 'Stephen Bore' },
        { text: "How is everything, at your place?", time: '04:40pm', status: 'sender', name: 'Norris Decker' },
        { text: 'Everything was fine, and you?', time: '05:38pm', status: 'receiver', name: 'Stephen Bore' }
    ];
    
    const menuOption = (event, option) => {
        if (option === 'open') {
            setMenuAnchor(event.currentTarget);
        } else {
            setMenuAnchor(false);
        }
    };

    const updateDisplayProfile =()=> {
        setDisplayProfile(false);
    }

    const pickEmoji =(event, emojiObject)=> {
        setChosenEmoji(emojiObject);
        console.log(chosenEmoji)
    }

    return (
        <>
            {!user ?
                <Box sx={{ backgroundImage: `url(${Background})`, height: '100vh' }}>
                    <Grid container className='row'>
                        <Grid item className='mx-auto col-6' sx={{ marginTop: '25%'}}>
                            <Box 
                                className='rounded-circle mx-auto' 
                                sx={{ backgroundColor: '#D1E4D8', height: '90px', width: '90px'}}
                            >
                                <ArticleIcon
                                    className='pt-3' 
                                    sx={{ color: '#4EAC6D', display: 'block', marginRight: 'auto', marginLeft: 'auto', fontSize: '65px' }}  
                                />
                            </Box>
                            <Box className='mx-auto text-center'>
                                <Typography variant='h5'>Welcome to Chat App</Typography>
                                <Typography variant='subtitle'>Connect with your friends and family, home and abroad.</Typography>
                            </Box>
                            
                        </Grid>
                    </Grid>
                </Box>
                
                :

                <Box className='row'>
                    <Box className={!displayProfile ? 'col-lg-12 p-0' : 'col-lg-8 p-0'}>
                        <Box className='p-3' sx={{ backgroundColor: '#FFF6E0'}}>
                            <Grid container className='row'>
                                <Grid item className='col-1'>
                                    <Avatar alt='profileImage' src={ProfileImage} />
                                </Grid>
                                
                                <Grid item className='col-3'>
                                    <Typography variant='h5' className='text-muted'> { user.username } </Typography>
                                </Grid>

                                <Grid item className='col-8' sx={{ textAlign: 'right' }}>
                                    <IconButton>
                                        <SearchIcon />
                                    </IconButton>

                                    <IconButton>
                                        <PhoneInTalkIcon />
                                    </IconButton>

                                    <IconButton onClick={()=> setDisplayProfile(true)}>
                                        <InfoIcon />
                                    </IconButton>

                                    <IconButton onClick={event => menuOption(event, 'open')}>
                                        <MoreVertIcon />
                                    </IconButton>

                                    <Menu
                                        anchorEl={menuAnchor}
                                        open={menuAnchor}
                                        onClose={()=> menuOption('close')}
                                    >
                                        <MenuItem onClick={()=> menuOption('close')}>
                                            <ListItemIcon>
                                                <VolumeOffIcon />
                                            </ListItemIcon>
                                            <ListItemText>Mute</ListItemText>
                                        </MenuItem>

                                        <MenuItem onClick={()=> menuOption('close')}>
                                            <ListItemIcon>
                                                <DeleteIcon />
                                            </ListItemIcon>
                                            <ListItemText>Delete</ListItemText>
                                        </MenuItem>
                                    </Menu>

                                </Grid>
                            </Grid>
                        </Box>

                        <Box className='p-2' sx={{ backgroundImage: `url(${Background})`, height: '78vh' }}>
                            {userMessage.map((details, index)=> (
                                <Box key={index}>
                                    {details.status === 'sender' ?
                                        <Box>
                                            <Box 
                                                className='p-3 mt-3 rounded shadow-sm' 
                                                sx={{ backgroundColor: '#C7DCCD', width: '200px', textAlign: 'right', marginLeft: 'auto' }}
                                            >
                                                <Typography variant='p'> { details.text } </Typography>
                                            </Box>

                                            <Box sx={{ textAlign: 'right' }}>
                                                <Typography variant='subtitle'> { details.time } </Typography>
                                                <Typography variant='subtitle' sx={{ fontWeight: '500'}}> You </Typography>
                                            </Box>
                                        </Box>
                                        
                                        :

                                        <Box>
                                            <Box 
                                                className='p-3 mt-3 rounded shadow-sm' 
                                                sx={{ backgroundColor: '#fff', width: '200px', textAlign: 'left'}}
                                            >
                                                <Typography variant='p'> { details.text } </Typography>
                                            </Box>

                                            <Box>
                                                <Typography variant='subtitle' sx={{ fontWeight: '500'}}> { details.name } </Typography>
                                                <Typography variant='subtitle'> { details.time } </Typography>
                                            </Box>
                                        </Box>
                                    }

                                </Box>
                            ))}
                        </Box>

                        <Box className='p-2' sx={{ backgroundColor: '#FFF6E0'}}>
                            <Grid container className='row'>
                                <Grid item className='col-2'>
                                    <IconButton >
                                        <MoreHorizIcon />
                                    </IconButton>
                                    
                                    {/* <Picker onClick={pickEmoji} /> */}

                                    <IconButton>
                                        <SentimentSatisfiedAltIcon />
                                    </IconButton>

                                </Grid>

                                <Grid item className='col-8'>
                                    <TextField placeholder='Write Message...' className='form-control' sx={{ border: 'none' }}/>
                                </Grid>

                                <Grid item className='col-2'>
                                    <IconButton >
                                        <MicIcon />
                                    </IconButton>
                                    
                                    <IconButton >
                                        <SendIcon />
                                    </IconButton>
                                </Grid>
                            </Grid>
                        </Box>
                    </Box>

                    {displayProfile && 
                        <Box className='col-lg-4 bg-light p-0'>
                            <Profile updateDisplay={updateDisplayProfile} />
                        </Box>
                    }
                </Box>
            }
        </>
    )
}
