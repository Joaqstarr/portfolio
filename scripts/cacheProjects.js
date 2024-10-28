const fs = require('fs');
const path = require('path');

const cachePaths = (fileType, searchPath, webPath, outputFileName) => {
    try {


        const projectsDirectory = path.join(process.cwd(), searchPath);
        const filenames = fs.readdirSync(projectsDirectory);
        const jsonFiles = filenames.filter((file) => file.endsWith(fileType));

        

        // Prepare the paths
        const filePaths = jsonFiles.map((file) => webPath+file);


        // Save to a cache file
        const cacheFilePath = path.join(process.cwd(), 'public/' + outputFileName);
        fs.writeFileSync(cacheFilePath, JSON.stringify({files: filePaths}, null, 2));

        console.log(outputFileName +' cached successfully!');
    }
    catch(error){
        console.error(`Error creating ${outputFileName + ": " + error}`);
    }
};



cachePaths('.json','public/projects', `/projects/`, `projCache.json`);
cachePaths('.webm','public/videos', `/videos/`, `webmCache.json`);
cachePaths('.mp4','public/videos', `/videos/`, `mp4Cache.json`);
