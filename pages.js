const fs = require("fs");
const path = require("path");

const getFolderNames = (dirPath) => {
  return fs.readdirSync(dirPath, { withFileTypes: true })
    .filter(dirent => dirent.isDirectory())
    .map(dirent => dirent.name);
};

const extractMetadata = (content) => {
  const metadataMatch = content.match(/export const metadata = \{([\s\S]*?)\}/);
  if (metadataMatch) {
    const metadataContent = metadataMatch[1];
    const titleMatch = metadataContent.match(/title: ["'](.*?)["']/);
    const descriptionMatch = metadataContent.match(/description: ["'](.*?)["']/);
    return {
      title: titleMatch ? titleMatch[1] : null,
      description: descriptionMatch ? descriptionMatch[1] : null,
    };
  }
  return { title: null, description: null };
};

const readPageFile = (folderPath) => {
  const pageFilePath = path.join(folderPath, "page.tsx");
  if (fs.existsSync(pageFilePath)) {
    const content = fs.readFileSync(pageFilePath, "utf-8");
    return extractMetadata(content);
  }
  return { title: null, description: null };
};

const saveToJson = (folderData) => {
  const jsonContent = JSON.stringify(folderData, null, 2);
  fs.writeFileSync(path.join(__dirname, "/pages.json"), jsonContent);
};

const main = () => {
  const appFolderPath = path.join(__dirname, "/app");
  const folderNames = getFolderNames(appFolderPath);

  const folderData = folderNames.map(folderName => {
    const folderPath = path.join(appFolderPath, folderName);
    const { title, description } = readPageFile(folderPath);
    return {
      path: folderName,
      title,
      description,
    };
  });

  saveToJson(folderData);
};

main();