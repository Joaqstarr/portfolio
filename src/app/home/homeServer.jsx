'use server'

const fs = require('fs');
const path = require('path');

export async function loadJSONFiles(directoryPath) {

    const files = fs.readdirSync(directoryPath);
    const jsonData = [];

    files.forEach(file => {
        const filePath = path.join(directoryPath, file);
        const fileStat = fs.statSync(filePath);
        console.log(filePath);
        if (fileStat.isFile() && path.extname(file) === '.json') {
            try {
                let data = fs.readFileSync(filePath, 'utf-8');
                if (data.charCodeAt(0) === 0xFEFF) {
                    data = data.slice(1);
                }

                const parsedData = JSON.parse(data);
                jsonData.push(parsedData);
            } catch (error) {
                console.error(`Error reading JSON file: ${filePath}`, error);
            }
        }
    });

    return jsonData;
}
