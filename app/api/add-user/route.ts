import { sql } from '@vercel/postgres';
import { NextResponse } from 'next/server';
 
export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const userName = searchParams.get('userName');
  const email = searchParams.get('email');
  const id = searchParams.get('id');

 
  try {
    if (!userName || !email) throw new Error('Name and email required');
    await sql`INSERT INTO Users (Name, Owner) VALUES (${userName}, ${email});`;
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }
 
  const users = await sql`SELECT * FROM Users;`;
  return NextResponse.json({ users }, { status: 200 });
}