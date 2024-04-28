import { sql } from '@vercel/postgres';
import { NextResponse } from 'next/server';
 
export async function GET(request: Request) {
  try {
    const result =
      await sql`CREATE TABLE Users ( Name varchar(255), email varchar(255), id varchar(255) ); `;
      await sql `CREATE TABLE Notes (id varchar(255), title varchar(255), body varchar(255), priority varchar (255)); `;
    return NextResponse.json({ result }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }
}

