import Image from "next/image";
import style from "./about.module.css";
export default function AboutPage() {
  return (
    <div>
      <div className={style.imgContainer}>
        <Image src="/about.png" alt="about" fill />
      </div>
    </div>
  );
}
