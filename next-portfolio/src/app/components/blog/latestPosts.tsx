import { Box, Stack, Typography } from '@mui/material'
import React from 'react'

const Post = ({ post }) => {
    return (
        <div>
            <Typography>{post.title}</Typography>
            <Typography>{post.image}</Typography>
            <Typography>{post.date}</Typography>
            <Typography>{post.description}</Typography>
        </div>
    )
}



const LatestPosts = ({ posts }) => {
    console.log(posts[0])

    return (
        <Box >
            <Typography variant='h5'>Latest posts</Typography>
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