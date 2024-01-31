import { Post } from "@/lib/models"
import { db_connect } from "@/lib/utils"
import { NextResponse } from "next/server"

export async function GET(request) {
  try {
    await db_connect()
    const posts = await Post.find()
    return NextResponse.json(posts, {status: 200})
  } catch (error) {
    console.log(error)
    return NextResponse.json({ messgae: `${error}` }, { status: 400 })
  }
}
