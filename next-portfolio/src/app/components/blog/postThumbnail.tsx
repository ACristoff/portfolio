import { Box, Paper, Typography } from '@mui/material'
import Image from 'next/image'
import Link from 'next/link'
// import { css } from '@emotion/react';
import React from 'react'

const thumbStyles = {
    padding: 1.5,
    width: '100%',
    height: '100%',
    display: 'flex',
    // maxWidth: '33%',
    flexDirection: 'column',
    justifyContent: 'center',

}


const PostThumbnail = ({post}) => {
    // console.log(post)
    return (
        <Box 
            sx={{
                maxWidth: {xs: '100%', md: '32%'}
            }}
        >
        <Link href={`posts/${post.id}`}>
        <Paper elevation={3} sx={thumbStyles}>
            <Box sx={{alignSelf: 'center'}}>
                <Image 
                    src={`/images/${post.image}`}
                    width={100}
                    height={100}
                    alt={`thumbnail image for blog post: ${post.title}`}
                />
            </Box>
            <Typography variant='h6'>{post.title}</Typography>
            <Typography variant='body2'>{post.date}</Typography>
            <Typography>{post.description}</Typography>
        </Paper>
        </Link>
        </Box>
    )
}


export default PostThumbnail