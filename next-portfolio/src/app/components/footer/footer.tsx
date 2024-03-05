import React from 'react'

import { Avatar, Badge, Container, Divider, Grid, Stack, Typography } from '@mui/material'

import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import SportsEsportsIcon from '@mui/icons-material/SportsEsports';
import EmailIcon from '@mui/icons-material/Email';

const Footer = () => {
    // return (
    //     <Container sx={{marginBottom: 2}}>
    //         <Divider />
    //         <Typography>Alex Cristoffanini 2023 Footer</Typography>
    //         <Stack 
    //             direction='row' 
    //             spacing={{xs: 0.5, sm: 2, md: 4}} 
    //             justifyContent='center' 
    //             alignContent='center'
    //         >
    //         </Stack>
    //     </Container>

    return (
        <Container sx={{marginBottom: 2, marginTop: 2}} >
            <Stack direction='column'>
                <Typography>Alex Cristoffanini 2024 Footer</Typography>
                <Grid container justifyContent='center' spacing={2} >
                    <Grid item>
                        <Stack direction='row'alignItems='center' spacing={1}>
                            <LinkedInIcon color='primary' fontSize='large' />
                            <Typography>LinkedIn</Typography>
                        </Stack>
                    </Grid>
                    <Grid item>
                        <Stack direction='row'alignItems='center' spacing={1}>
                            <GitHubIcon color='primary' fontSize='large'/>
                            <Typography>Github</Typography>
                        </Stack>
                    </Grid>
                    <Grid item>
                        <Stack direction='row'alignItems='center' spacing={1}>
                            <TwitterIcon color="primary" fontSize='large' />
                            <Typography> @Digifigurati</Typography>
                        </Stack>
                    </Grid>
                    <Grid item>
                        <Stack direction='row'alignItems='center' spacing={1}>
                            {
                                //TODO add itch.io icon
                            }
                            <SportsEsportsIcon color="primary" fontSize='large' /> 
                            <Typography>itch.io</Typography>
                        </Stack>
                    </Grid>
                    <Grid item>
                        <Stack direction='row'alignItems='center' spacing={1}>
                            <EmailIcon  color="primary" fontSize='large' />
                            <Typography>email</Typography>
                        </Stack>
                    </Grid>
                </Grid> 
            </Stack>
        </Container>
    )
}

export default Footer