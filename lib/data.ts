import { sql } from "@vercel/postgres";
import { unstable_noStore as noStore } from 'next/cache';

import {
    User, 
    Note, 
} from '@/lib/definitions'


export async function fetchNotes() {
    //prevent response from being cached 
    noStore();
    try{
        console.log('Fetching Note data'); 
        await new Promise((resolve) => setTimeout(resolve, 3000));

        const data = await sql<Note>`SELECT * FROM notes`;

        return data.rows; 
    } catch (error){
        console.error('Database error:', error); 
        throw new Error('Failed to fetch note data')
    }
    
}

export async function fetchuser() {
    try {
      const data = await sql<User>`
        SELECT
          id,
          name
        FROM user
        ORDER BY name ASC
      `;
  
      const user = data.rows;
      return user;
    } catch (err) {
      console.error('Database Error:', err);
      throw new Error('Failed to fetch all user.');
    }
  }
  
  