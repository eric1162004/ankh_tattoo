const fs = require("fs");
const path = require("path");

export async function getFileCount(folderName) {
  const folderPath = `public/img/gallery/${folderName}`;
  
  try {
    const files = await fs.promises.readdir(folderPath);
    
    const numberOfFiles = files.filter(file =>
      fs.statSync(path.join(folderPath, file)).isFile()
    ).length;

    // console.log(`Number of files in the folder: ${numberOfFiles}`);
    return numberOfFiles;
  } catch (err) {
    // console.error("Error reading folder:", err);
    return 0; 
  }
}