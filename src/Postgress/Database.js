"use server"
import {db} from "@vercel/postgres"
console.log("IN SERVER");
console.log(process.env.POSTGRESS_URL);

const client = await db.connect();


export async function GetAllProjectsFromTable(){
    let projects = await client.sql`SELECT * FROM projects`;
    console.log(JSON.stringify(projects.rows));
    return projects.rows;
}