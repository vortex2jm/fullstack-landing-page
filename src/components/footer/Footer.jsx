import styles from "./footer.module.css";

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.logo}>Clev</div>
      <div className={styles.text}>
        Clev technological solutions © All rights reserved.
      </div>
    </div>
  );
};

export default Footer;
