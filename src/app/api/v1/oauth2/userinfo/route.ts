import { NextResponse } from 'next/server';

const BASE_URL = 'https://login.stytchb2bdemo.com';

export async function GET(request: Request) {
    try {
        const url = `${BASE_URL}/v1/oauth2/userinfo`;

        // Forward headers from the incoming request, including Authorization
        const headers = new Headers(request.headers);

        // Make the proxy request
        const response = await fetch(url, {
            method: 'GET',
            headers: headers,
        });

        // Forward the response from the external API back to the client
        const responseBody = await response.json();

        console.log(responseBody);

        return NextResponse.json(responseBody, { status: response.status });
    } catch (error: unknown) {
        console.error(error);
        // Handle errors and return a 500 response
        return NextResponse.json({ error: 'Failed to proxy request' }, { status: 500 });
    }
}