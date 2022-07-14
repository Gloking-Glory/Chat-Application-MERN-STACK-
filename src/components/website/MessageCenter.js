import React from 'react';
import Background from '../../images/backgroundChat.jpg';
import { IconButton } from '@mui/material';
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

export default function MessageCenter() {
    
    const userMessage = [
        { text: 'Hello', time: '02:38pm', status: 'sender', name: 'Norris Decker' },
        { text: 'Hi, are you doing?', time: '03:00pm', status: 'receiver', name: 'Stephen Bore' },
        { text: "How is everything, at your place?", time: '04:40pm', status: 'sender', name: 'Norris Decker' },
        { text: 'Everything was fine, and you?', time: '05:38pm', status: 'receiver', name: 'Stephen Bore' }
    ];

    return (
        <>
            <Box className='p-3' sx={{ backgroundColor: '#FFF6E0'}}>
                <Grid container>
                    <Grid item xs={1}>
                        <Avatar alt='profileImage' src={ProfileImage} />
                    </Grid>
                    
                    <Grid item xs={3}>
                        <Typography variant='h5' className='text-muted'>Norris Decker</Typography>
                    </Grid>

                    <Grid item xs={8} sx={{ textAlign: 'right' }}>
                        <IconButton>
                            <SearchIcon />
                        </IconButton>
                        <IconButton>
                            <PhoneInTalkIcon />
                        </IconButton>
                        <IconButton>
                            <InfoIcon />
                        </IconButton>
                        <IconButton>
                            <MoreVertIcon />
                        </IconButton>
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
                <Grid container>
                    <Grid item xs={2}>
                        <IconButton className='mx-3'>
                            <MoreHorizIcon />
                        </IconButton>

                        <IconButton className='mx-2'>
                            <SentimentSatisfiedAltIcon />
                        </IconButton>
                    </Grid>

                    <Grid item xs={8}>
                        <TextField placeholder='Write Message...' className='form-control' sx={{ border: 'none' }}/>
                    </Grid>

                    <Grid item xs={2}>
                        <IconButton className='mx-3'>
                            <MicIcon />
                        </IconButton>
                        
                        <IconButton className='mx-2'>
                            <SendIcon />
                        </IconButton>
                    </Grid>
                </Grid>
            </Box>





            {/* <img src={ChatBackground} alt="background" /> */}

        </>
    )
}
