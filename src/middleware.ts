'use server'
import { NextResponse, NextRequest } from 'next/server'
import { jwtVerifyToken } from '@/backend/utils/jwtHandler'
import { RequestCookie } from 'next/dist/compiled/@edge-runtime/cookies'

const NEED_NOT_AUTH: string[] = ['/login']
const MAIN_PAGE: string = '/'
// This function can be marked `async` if using `await` inside
export async function middleware (request: NextRequest) {
  const cookiesStore = request.cookies
  const { pathname } = request.nextUrl
  if (pathname === MAIN_PAGE) return NextResponse.redirect(new URL('/home', request.url))
  try {
    const token: RequestCookie | undefined = cookiesStore?.get('token')
    if (token && NEED_NOT_AUTH.includes(pathname)) return NextResponse.redirect(new URL('/home', request.url))
    if (!token) throw new Error('No tiene permisos para acceder a esta página')
    await jwtVerifyToken(token.value)
    NextResponse.next()
  } catch (error) {
    console.log({ error })
    cookiesStore.delete('token')
    console.log({ includes: NEED_NOT_AUTH.includes(pathname) })
    if (NEED_NOT_AUTH.includes(pathname)) return NextResponse.rewrite(request.nextUrl)
    return NextResponse.redirect(new URL('/login', request.url))
  }
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: ['/home/:path*', '/login/:path*', '/']
}
