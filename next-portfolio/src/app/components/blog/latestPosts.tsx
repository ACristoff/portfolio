import { Box, Stack, Typography } from '@mui/material'
import React from 'react'

const Post = ({ post }) => {
    return (
        <div>
            <Typography>[Featured Image]</Typography>
            <Typography>{post.title}</Typography>
            <Typography>{post.image}</Typography>
            <Typography>{post.date}</Typography>
            <Typography>{post.description}</Typography>
        </div>
    )
}



const LatestPosts = ({ posts }) => {

    return (
        <Box >
            <Typography variant='h5'>My blog</Typography>
            <Stack direction='row' spacing={2}>
                {posts.map((post) => {
                    return (
                        <Post post={post}  key={post.id}/>
                    )
                })}
            </Stack>
        </Box>
    )
}

export default LatestPosts