"use client"
import styles from "./register.module.css"
import { toast } from "react-toastify"

const RegisterPage = () => {
  
  const handleFormAction = () => {
    toast.success("You've been registered", {
      position: "bottom-center",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    })
  }

  return(
    <div className={styles.container}>
      <form className={styles.form} action={handleFormAction}>
        <h2 className={styles.title}>Register your account</h2>
        <input type="text" name="username" placeholder="username"></input>
        <input type="text" name="email" placeholder="email"></input>
        <input type="text" name="password" placeholder="password"></input>
        <input type="text" name="repeat-password" placeholder="repeat password"></input>
        <button>Confirm</button>
      </form>
    </div>
  )
}

export default RegisterPage
