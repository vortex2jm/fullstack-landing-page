import { Post } from "@/lib/models"
import { db_connect } from "@/lib/utils"
import { NextResponse } from "next/server"

export async function POST(request) {
  try {
    const data = await request.json()
    console.log(data.name)
    


  } catch (error) {
    console.log(error)
  }
  return NextResponse.json({message: "oi"}, {status: 200})
}
