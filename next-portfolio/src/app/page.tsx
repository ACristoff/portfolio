import Image from "next/image";
import styles from "./page.module.css";
import ExperienceCarousel from "./components/experience/experienceCarousel";
import { Stack, Typography } from "@mui/material";
import Blog from "./components/blog/blog";
import LatestPosts from "./components/blog/latestPosts";

import { getSortedPostsData } from '../lib/posts';

// export async function getStaticProps() {
//   const allPostsData = getSortedPostsData();
//   return {
//     props: {
//       allPostsData,
//     },
//   };
// }


export default function Home() {
    const posts = getSortedPostsData()

    return (
        <main className={styles.main}>
            <Stack spacing={4} direction='column' >
                <ExperienceCarousel />
                <div>
                    <Typography variant="h4">About Me</Typography>
                    {
                        //TODO Update this
                    }
                    <Typography>
                        I am a full-stack developer with 7 years of experience. I thrive in fast paced environments, with a proven ability to learn new technologies on the fly. I make software, web applications and videogames! This site is a living resume, a blog, and a place to host my development work as I create and explore new things. Have a look around, contact me, or maybe even *hire me? [link to resume pdf]*
                    </Typography>
                </div>
                <LatestPosts posts={posts}/>
            </Stack>
            
        </main>
    );
}
