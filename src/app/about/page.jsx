import Image from "next/image";
import styles from "./about.module.css"

const AboutPage = () => {
  return (
    <div>
      <div className={styles.imgContainer}>
        <Image src={"/coding.png"} alt="man coding" fill/>
      </div>
    </div>
  );
};

export default AboutPage;
