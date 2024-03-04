'use client'
import Image from "next/image";
import styles from "./page.module.css";
import ExperienceCarousel from "./components/experience/experienceCarousel";
import { Typography } from "@mui/material";

export default function Home() {
  return (
    <main className={styles.main}>
        My portfolio :3
        <ExperienceCarousel />
        <section>
            <Typography>About Me</Typography>
            {
                //TODO Update this
            }
            <Typography>
                I am a full-stack developer with 7 years of experience. I thrive in fast paced environments, with a proven ability to learn new technologies on the fly. I make software, web applications and videogames! This site is a living resume, a blog, and a place to host my development work as I create and explore new things. Have a look around, contact me, or maybe even *hire me? [link]*
            </Typography>
        </section>
    </main>
  );
}
