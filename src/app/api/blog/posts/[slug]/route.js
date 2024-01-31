import { Post } from "@/lib/models"
import { db_connect } from "@/lib/utils"
import { NextResponse } from "next/server"

export async function GET(request, { params }){
  const { slug } = params
  try {
    await db_connect()
    const data = await Post.findOne({slug})
    return NextResponse.json(data, { status: 200 })
  } catch (error) {
    console.log(error) 
    return NextResponse.json({ messgae: `${error}` }, { status: 400 })   
  }
}
