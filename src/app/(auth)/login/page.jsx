"use client"
import { handleGithubLogin } from "@/lib/action";
import styles from "./login.module.css";
import { FaGithub } from "react-icons/fa";
import Link from "next/link";
import { handleLogin } from "@/lib/action";
import { formResp } from "@/lib/utils";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify"
import { getSession } from "@/lib/action";
import { useEffect } from "react";

const LoginPage = () => {
  const route = useRouter()
  
  useEffect(() => {
    const getSessionFromServer = async () => {
      const session = await getSession()
      if(session){
        route.push("/")
      }
    }
    getSessionFromServer()
  })
  
  //debug
  let x =0;

  const handleFormAction = async (formData) => {
    switch (x = await handleLogin(formData)) {
      case formResp.InvalidCred:
        toast.error("Invalid user or password!", {
          position: "bottom-center",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
        })
        break;

      default:
        console.log(x)
        route.push("/")
        break;
    }
  }

  return (
    <div className={styles.container}>
      <form action={handleFormAction} className={styles.form}>
        <h2>Sign In</h2>
        <input type="text" name="username" placeholder="username or email"></input>
        <input type="password" name="password" placeholder="password"></input>
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
