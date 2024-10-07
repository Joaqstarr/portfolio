"use server"
import {db} from "@vercel/postgres"


const client = await db.connect();


export async function GetAllProjectsFromTable(){
    let projects = await client.sql`SELECT * FROM projects`;

    return projects.rows;
}