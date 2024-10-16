import fs from 'fs';
import path from 'path';
import { NextResponse } from 'next/server';

export async function GET() {
    // Use process.cwd() to get the root directory
    const projectsDirectory = path.join(process.cwd(), 'public/projects');

    // Read the directory
    const filenames = fs.readdirSync(projectsDirectory);

    // Filter for JSON files only
    const jsonFiles = filenames.filter((file) => file.endsWith('.json'));

    console.log(JSON.stringify(jsonFiles));
    // Return the list of file URLs
    return NextResponse.json({
        files: jsonFiles.map((file) => `/projects/${file}`),
    });
}