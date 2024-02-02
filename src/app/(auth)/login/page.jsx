import { handleGithubLogin } from "@/lib/action";
import styles from "./login.module.css";
import { FaGithub } from "react-icons/fa";
import Link from "next/link";

const LoginPage = () => {
  return (
    <div className={styles.container}>
      <form className={styles.form}>
        <h2>Sign In</h2>
        <input type="text" placeholder="username or email"></input>
        <input type="text" placeholder="password"></input>
        <div className={styles.buttonContainer}>
          <button className={styles.button}>Login</button>
          <Link href={"/"} className={styles.link}>Forgot password</Link>
        </div>
      </form>
      <hr className={styles.divider}></hr>
      <form action={handleGithubLogin} className={styles.form}>
        <div className={styles.buttonContainer}>
            <button className={styles.button}>
            <FaGithub /> Login with github
            </button>
            <Link href={"/register"} className={styles.link}>Create new account</Link>
        </div>
      </form>
    </div>
  );
};

export default LoginPage;
