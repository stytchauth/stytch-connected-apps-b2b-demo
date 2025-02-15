import { NextResponse } from 'next/server';

export async function GET(request: Request) {
    const userInfo = {
        id: '1234',
        name: 'John Doe',
        email: 'johndoe@example.com',
    };

    return NextResponse.json(userInfo, { status: 200 });
}