import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
    // Match requests to /v1/oauth2/userinfo
    if (request.nextUrl.pathname === '/v1/oauth2/userinfo') {
        // Rewrite the request to the corresponding API route
        return NextResponse.rewrite(new URL('/api/v1/oauth2/userinfo', request.url));
    }

    // Allow all other requests to proceed as normal
    return NextResponse.next();
}