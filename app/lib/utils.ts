import { sql } from "@vercel/postgres";
import { NextResponse } from 'next/server';

export async function GetUsers() {
    const { rows } = await sql`SELECT * from USERS`;
    //
    console.log(rows);
}


export async function CreateTable(request: Request) {
    try {
        const result =
            await sql`CREATE TABLE Pets ( Name varchar(255), Owner varchar(255) );`;
        return NextResponse.json({ result }, { status: 200 });
    } catch (error) {
        return NextResponse.json({ error }, { status: 500 });
    }
}