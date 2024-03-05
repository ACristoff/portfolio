import { Box, Stack, Typography } from '@mui/material'
import React from 'react'

const Post = () => {
    return (
        <div>Post</div>
    )
}



const LatestPosts = () => {
    return (
        <Box >
            <Typography variant='h5'>Latest posts</Typography>
            <Stack direction='row' spacing={2}>
                <Post />
                <Post />
                <Post />
            </Stack>
        </Box>
    )
}

export default LatestPosts