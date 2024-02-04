"use client"
import styles from "./register.module.css"
import { toast } from "react-toastify"
import { handleRegisterForm } from "@/lib/action"
import { useRouter } from "next/navigation"
import { formResp } from "@/lib/utils"

const RegisterPage = () => {
  const route = useRouter()
  
  // debug variable
  let x= 0

  const handleFormAction = async (formData) => {
    switch (x = await handleRegisterForm(formData)) {
      case formResp.Successful:
        toast.success("You've been registered!", {
          position: "bottom-center",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
        })
        route.push("/login")
        break;

      case formResp.PassDontMatch:
        toast.warn("Passwords don't match!", {
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
      
      case formResp.UserAlreadyExists:
        toast.error("This user already exists!", {
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

      case formResp.Error:
        toast.error("Something went wrong. Try again later!", {
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
        //debug 
        // console.log(x)
        break;
    }
  }

  return(
    <div className={styles.container}>
      <form className={styles.form} action={handleFormAction}>
        <h2 className={styles.title}>Register your account</h2>
        <input type="text" name="username" placeholder="username"></input>
        <input type="text" name="email" placeholder="email"></input>
        <input type="password" name="password" placeholder="password"></input>
        <input type="password" name="passwordRepeat" placeholder="repeat password"></input>
        <button>Confirm</button>
      </form>
    </div>
  )
}

export default RegisterPage
