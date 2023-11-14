import { sql } from '@vercel/postgres';
import { NextResponse } from 'next/server';

export async function GET(request: Request) {
    const { searchParams } = new URL(request.url);
    const gameId = searchParams.get('id');
    const gameName = searchParams.get('name');

    try {
        if (!gameId || !gameName) throw new Error('Identifier and name parameters are required');
        const insertResult = await sql`INSERT INTO games (Identifier, Name) VALUES (${gameId}, ${gameName});`;
        return NextResponse.json({ insertResult }, { status: 200 });
    } catch (error) {
        return NextResponse.json({ error }, { status: 500 });
    }
}