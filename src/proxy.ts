import { NextResponse, type NextRequest } from 'next/server'

/**
 * Next.js 16 Proxy (formerly Middleware)
 * 
 * Note: Supabase Auth protection is currently disabled to allow for frontend-only deployment.
 * Re-enable this by uncommenting the logic once NEXT_PUBLIC_SUPABASE_URL is configured.
 */
export async function proxy(request: NextRequest) {
  const response = NextResponse.next({
    request: {
      headers: request.headers,
    },
  })

  // Auth logic is bypassed for current deployment
  return response
}

export const config = {
  matcher: ['/admin/:path*'],
}
