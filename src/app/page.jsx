import "./globals.css";
import styles from "./home.module.css";
import Image from "next/image";

export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.textContainer}>
        <h1 className={styles.title}>Creative Thought Agency</h1>
        <p className={styles.desc}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati
          quos soluta deleniti cumque error, maxime esse beatae? Neque ratione
          tempora est qui officiis, doloremque maxime aspernatur atque iste a
          odit.
        </p>
        <div className={styles.buttons}>
          <button className={styles.buttons}>Learn More</button>
          <button className={styles.buttons}>Contact Us</button>
        </div>
        <div className={styles.brands}>
          <Image
            src="/brands.png"
            alt="brands"
            fill
            className={styles.brandImg}
          />
        </div>
      </div>
      <div className={styles.imageContainer}>
        <Image src="/hero.gif" alt="hero" fill className={styles.heroImg} />
      </div>
    </div>
  );
}
