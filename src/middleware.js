import { NextResponse } from "next/server"

export async function middleware(request) {
  const apikey = request.headers.get('apikey')
  if(apikey !== process.env.API_KEY){
    return NextResponse.json({ message: "Unauthorized" }, { status: 401 })
  }
  return NextResponse.next()
}

export const config = {
  matcher: "/api/blog/:path*"
}
