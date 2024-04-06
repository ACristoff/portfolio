import { Box, Stack, Typography } from '@mui/material'
import PostThumbnail from './postThumbnail'
import React from 'react'

const LatestPosts = ({ posts }) => {

    return (
        <Box >
            <Typography variant='h5'>My blog</Typography>
            <Stack
                direction={{xs: 'column', md: 'row'}} 
                spacing={2}
            >
                {posts.map((post) => {
                    return (
                        <PostThumbnail post={post} key={post.id}/>
                    )
                })}
            </Stack>
        </Box>
    )
}

export default LatestPosts