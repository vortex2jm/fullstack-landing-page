"use client"
import styles from "./register.module.css"
import { toast } from "react-toastify"
import { handleRegisterForm } from "@/lib/action"
import { useRouter } from "next/navigation"
import { formResp } from "@/lib/utils"

const RegisterPage = () => {
  const route = useRouter()

  const handleFormAction = (formData) => {
    console.log(formData)
    switch (handleRegisterForm(formData)) {
      case formResp.Successful:
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
        route.forward("/login")
        break;
      default:
        break;
    }
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
