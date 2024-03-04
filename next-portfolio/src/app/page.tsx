import Image from "next/image";
import styles from "./page.module.css";
import ExperienceCarousel from "./components/experience/experienceCarousel";

export default function Home() {
  return (
    <main className={styles.main}>
        My portfolio :3
        <ExperienceCarousel />
    </main>
  );
}
