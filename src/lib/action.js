"use server"
import { signIn, signOut } from "@/lib/auth"
import { User } from "./models"
import { db_connect } from "./utils"
import bcrypt from "bcrypt"
import { formResp } from "./utils"

// login===================================//
export const handleGithubLogin = async() => {
  await signIn("github")
}

//logout================================//
export const handleLogout = async () => {
  await signOut()
}

// create user in DB=========================//
export const createUser = async (profile) => {
  try {
    await db_connect()
    const user = await User.findOne({ email: profile.email }) 
    if(!user){
      const usr = new User({
        username: profile.login,
        email: profile.email,
        img: profile.avatar_url
      });
      await usr.save()
    }
  } catch (error) {
    console.log(error)
    throw new Error(error)
  }
}

// Sing up=============================================//
export const  handleRegisterForm = async (formData) => {
  const { username, email, password, passwordRepeat } = Object.fromEntries(formData)

  if(password !== passwordRepeat){
    return formResp.PassDontMatch;
  }
  
  const hashedPassword = await bcrypt.hash(password, 10)
  
  if(!hashedPassword)
    return formResp.Error

  try {
    await db_connect()
    const user = await User.findOne({ username })
    if(user){
      return formResp.UserAlreadyExists
    } 
    const usr = new User({
      username: username,
      email: email,
      password: hashedPassword,
      img: ""
    })
    await usr.save()
    return formResp.Successful

  } catch (error) {
    return formResp.Error
  }
}
