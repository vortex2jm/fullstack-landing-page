"use server"
import { signIn, signOut } from "@/lib/auth"
import { User } from "./models"
import { db_connect } from "./utils"

// login
export const handleGithubLogin = async() => {
  await signIn("github")
}

//logout
export const handleLogout = async () => {
  await signOut()
}

// create user in DB
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

export const  handleRegisterForm = async (formData) => {
  const { username, email, password, passwordRepeat } = Object.fromEntries(formData)

  if(password !== passwordRepeat){
    return 0;
  }

  try {
    await db_connect()
    const user = await User.findOne({ username })
    if(user){
      return 1
    } 
    const usr = new User({
      username: username,
      email: email,
      img: ""
    })
    await usr.save()
    return 3

  } catch (error) {
    console.log(error)
    return 4
  }
}
