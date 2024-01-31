import { User } from "@/lib/models";
import { db_connect } from "@/lib/utils";
import { NextResponse } from "next/server"

export async function GET(request) {

  // try {
    // await db_connect()
    // const users = await User.findOne()  
  // } catch (error) {
    
  // }
  return new Response("oi")
}
