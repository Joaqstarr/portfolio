﻿import path from 'path';
import { NextResponse } from 'next/server';
import {revalidatePath} from "next/cache";

export async function GET() {
    const cacheFilePath = path.join(process.env.NEXT_PUBLIC_API_URL, '/projCache.json');

    try {

        revalidatePath(cacheFilePath)

        // Read the cached JSON file
        const cacheData = await fetch(cacheFilePath);
        const files = await cacheData.json();
        //console.log("path: " + cacheFilePath + " files: " + JSON.stringify(cacheData));
        // Return the list of file URLs
        return NextResponse.json({
            files
        });
    }catch(error){

        console.error(`Error fetching JSON file: ${cacheFilePath}`, error);
        return NextResponse.json({ error: 'Failed to fetch project files' }, { status: 500 });
    }
}