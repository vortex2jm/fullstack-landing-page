import styles from "./home.module.css";
import Image from "next/image";

const Home = () => {
  return (
    <div className={styles.container}>
      <div className={styles.textContainer}>
        <h1 className={styles.title}>Technological solutions for companies</h1>
        <p className={styles.description}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde
          praesentium magnam rerum placeat consequuntur optio porro quam, nulla
          repellat consequatur veniam illo dignissimos quidem velit vero dolore
          qui quos? Asperiores.
        </p>
        <div className={styles.buttons}>
          <button className={styles.button}>Learn More</button>
          <button className={styles.button}>Contact</button>
        </div>
        <div className={styles.brandImg}>
          <Image src={"/brands.png"} alt="brands" fill/>
        </div>
      </div>

      <div className={styles.imgContainer}>
        <Image src={"/research.png"} alt="code research" fill/>
      </div>
    </div>
  );
};

export default Home;
