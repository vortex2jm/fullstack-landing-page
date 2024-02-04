import mongoose from "mongoose"
import axios from "axios"

const connection = {}

export const db_connect = async () => {
  try {
    if(connection.isConnected)
      return
    const db = await mongoose.connect(process.env.MONGO)
    connection.isConnected = db.connections[0].readyState
  } catch (error) {
    console.log(error)
    throw new Error(error)
  }
}

export const axiosClient = axios.create({
  baseURL: process.env.BASE_URL,
  headers: {
    "apikey": process.env.API_KEY
  }
})

export const formResp =  {
  PassDontMatch: 0,
  UserAlreadyExists: 1,
  Successful: 2,
  Error: 3,
  InvalidCred: 4
}
