const fs = require('fs');
const path = require('path');

const cacheProjects = () => {
    try {


        const projectsDirectory = path.join(process.cwd(), 'public/projects');
        const filenames = fs.readdirSync(projectsDirectory);
        const jsonFiles = filenames.filter((file) => file.endsWith('.json'));

        

        // Prepare the paths
        const filePaths = jsonFiles.map((file) => `/projects/${file}`);


        // Save to a cache file
        const cacheFilePath = path.join(process.cwd(), 'public/projCache.json');
        fs.writeFileSync(cacheFilePath, JSON.stringify({files: filePaths}, null, 2));

        console.log('Project paths cached successfully!');
    }
    catch(error){
        console.error(`Error creating projects cache: ${error}`);
    }
};



cacheProjects();