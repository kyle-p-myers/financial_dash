const { db } = require('@vercel/postgres');
const {
  notes,
  users,
} = require('../app/lib/placeholder-data.js');
const bcrypt = require('bcrypt');

async function seedUsers(client){
  try{ 
    await client.sql `CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;
    //Creatting the User Tble if it does not already exist
    const creatTable = await client.sql`
    CREATE TABLE IS NOT EXISTS users(
      id UUID default uuide_generate_v4() PRIMARY KEY, 
      name VARCHAR(255) NOT NULL, 
      email TEXT NOT NOT NULL UNIQUE,
      password TEXT NOT NULL
      );
      `;
      console.log('Created the users table'); 

      //Insert Data into the users table 
      const insertedUsers = await Promise.all(
        users.map(async (user) => {
          const hashedPassword = await bcrypt.hash(user.password, 10);
          return client.sql`
          INSERT INTO users (id, name, email, password)
          VALUES(${user.id}, ${user.name}, ${user.email}, ${hashedPassword})
          ON CONFLICT (id) DO NOTHING; 
          `
        }),
      );
      console.log(`Seeded ${insertedUsers.length} users`); 

      return{
        creatTable, 
        users, insertedUsers
      }; 
  } catch (error) {
    console.log('Error seeding users', error); 
    throw error; 
  }

  async function seedNotes(client){
    try{ 
      await client.sql `CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;
      //Creatting the User Tble if it does not already exist
      const creatTable = await client.sql`
      CREATE TABLE IS NOT EXISTS notes(
        id UUID default uuide_generate_v4() PRIMARY KEY, 
        title VARCHAR(255) NOT NULL, 
        body VARCHAR(255) NOT NULL, 
        priority VARCHAR (255) NOT NULL, 
        );
        `;
        console.log('Created the notes table'); 
  
        //Insert Data into the users table 
        const insertedUsers = await Promise.all(
          notes.map(async (notes) => {
            return client.sql`
            INSERT INTO notes (id, title, body, priority)
            VALUES(${notes.id}, ${notes.title}, ${notes.body}, ${notes.priority})
            `
          }),
        );
        console.log(`Seeded ${notes.length} notes`); 
  
        return{
          creatTable, 
          notes, insertedNotes
        }; 
    } catch (error) {
      console.log('Error seeding notes', error); 
      throw error; 
    }
}
}