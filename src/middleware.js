import { NextResponse } from "next/server"
import { getToken } from "next-auth/jwt"

const secret = process.env.AUTH_SECRET

export async function middleware(req) {

  const token = await getToken({ req, secret })
  const { pathname } = req.nextUrl

  if(pathname.startsWith("/api/blog")){
    const apikey = req.headers.get('apikey')
    if(apikey !== process.env.API_KEY){
      return NextResponse.json({ message: "Unauthorized" }, { status: 401 })
    }
    return NextResponse.next()
  }

  if(pathname.startsWith("/admin")){
    if(!token || token?.isAdmin === "false")
      return NextResponse.redirect(new URL("/", req.url))
    return NextResponse.next()
  }

  if(pathname.startsWith("/blog")){
    if(!token)
      return NextResponse.redirect(new URL("/register", req.url))
    return NextResponse.next()
  }
}

// export const config = {
//   // matcher: "/api/blog/:path*"
// }
