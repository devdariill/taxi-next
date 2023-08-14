import { authMiddleware, redirectToSignIn } from '@clerk/nextjs'

// This example protects all routes including api/trpc routes
// Please edit this to allow other routes to be public as needed.
// See https://clerk.com/docs/nextjs/middleware for more information about configuring your middleware
export default authMiddleware({
  publicRoutes: ['/', '/:locale/sign-in'],
  afterAuth(auth, req, _evt) {
    // handle users who aren't authenticated
    // eslint-disable-next-line @typescript-eslint/strict-boolean-expressions
    if (!auth.userId && !auth.isPublicRoute) return redirectToSignIn({ returnBackUrl: req.url })
  }
})

export const config = {
  matcher: ['/((?!.*\\..*|_next).*)', '/', '/(api|trpc)(.*)'],
  publicRoutes: ['/'],
  ignoredRoutes: ['/((?!api|trpc))(_next|.+..+)(.*)', '/']
}
