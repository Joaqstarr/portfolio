import path from 'path';
import { NextResponse } from 'next/server';

export async function GET() {
    const webmFilePath = path.join(process.env.NEXT_PUBLIC_API_URL, '/webmCache.json');
    const mp4FilePath = path.join(process.env.NEXT_PUBLIC_API_URL, '/mp4Cache.json');

    try {


        // Read the cached JSON file
        const webmData = await fetch(webmFilePath);
        const mp4Data = await fetch(mp4FilePath);

        const webm = await webmData.json();
        const mp4 = await mp4Data.json();

        //console.log("path: " + cacheFilePath + " files: " + JSON.stringify(cacheData));
        // Return the list of file URLs
        return NextResponse.json({
            webm: webm,
            mp4: mp4
        });
    }catch(error){

        console.error(`Error fetching JSON file: ${cacheFilePath}`, error);
        return NextResponse.json({ error: 'Failed to fetch project files' }, { status: 500 });
    }
}