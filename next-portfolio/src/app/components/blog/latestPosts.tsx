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
            <Typography>Latest posts</Typography>
            <Stack direction='row' spacing={2}>
                <Post />
                <Post />
                <Post />
            </Stack>
        </Box>
    )
}

export default LatestPosts