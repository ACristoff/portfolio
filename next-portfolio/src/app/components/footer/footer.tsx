import React from 'react'

import { Avatar, Badge, Container, Divider, Stack, Typography } from '@mui/material'

import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import SportsEsportsIcon from '@mui/icons-material/SportsEsports';
import EmailIcon from '@mui/icons-material/Email';

const Footer = () => {
    return (
        <Container>
            <Divider />
            <Typography>Alex Cristoffanini 2023 Footer</Typography>
            <Stack direction='row' spacing={4} justifyContent='center' alignContent='center'>
                <Stack direction='row'alignItems='center' spacing={1}>
                    <LinkedInIcon color='primary' fontSize='large' />
                    <Typography>LinkedIn</Typography>
                </Stack>
                <Stack direction='row'alignItems='center' spacing={1}>
                    <GitHubIcon color='primary' fontSize='large'/>
                    <Typography>Github</Typography>
                </Stack>
                <Stack direction='row'alignItems='center' spacing={1}>
                    <TwitterIcon color="primary" fontSize='large' />
                    <Typography> @Digifigurati</Typography>
                </Stack>
                <Stack direction='row'alignItems='center' spacing={1}>
                    {
                        //TODO add itch.io icon
                    }
                    <SportsEsportsIcon color="primary" fontSize='large' /> 
                    <Typography>itch.io</Typography>
                </Stack>
                <Stack direction='row'alignItems='center' spacing={1}>
                    <EmailIcon  color="primary" fontSize='large' />
                    <Typography>email</Typography>
                </Stack>
            </Stack>
        </Container>
    )
}

export default Footer