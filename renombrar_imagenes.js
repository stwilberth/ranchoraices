
import fs from 'fs';
import path from 'path';

const directoryPath = path.join('public', 'images', 'gallery');
const allowedExtensions = ['.jpg', '.jpeg', '.png', '.gif'];

fs.readdir(directoryPath, (err, files) => {
  if (err) {
    return console.log('Unable to scan directory: ' + err);
  }

  const imageFiles = files.filter(file => {
    const ext = path.extname(file).toLowerCase();
    return allowedExtensions.includes(ext);
  });

  imageFiles.forEach((file, index) => {
    const oldPath = path.join(directoryPath, file);
    const newExtension = path.extname(file);
    const newPath = path.join(directoryPath, `${index + 1}${newExtension}`);

    fs.rename(oldPath, newPath, (err) => {
      if (err) {
        console.log(`Error renaming ${file}: ${err}`);
      } else {
        console.log(`Renamed ${file} to ${index + 1}${newExtension}`);
      }
    });
  });
});
