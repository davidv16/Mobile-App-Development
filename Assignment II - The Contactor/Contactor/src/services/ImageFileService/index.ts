import * as FileSystem from 'expo-file-system';

const imageDirectory = `${FileSystem.documentDirectory}images`;

const copyFile = async (file, newLocation) => {
  await FileSystem.copyAsync({
    from: file,
    to: newLocation,
  });
};

export const addImage = async (imageLocation) => {
  const folderSplit = imageLocation.split('/');
  const fileName = folderSplit(folderSplit.length - 1);

  await copyFile(imageLocation, `${imageDirectory}/${fileName}`);

  return {
    name: fileName,
    type: 'image',
    file: await loadImage(fileName),
  };
};

const loadImage = async (fileName) => await FileSystem.readAsStringAsync(`${imageDirectory}/${fileName}`, {
  encoding: FileSystem.EncodingType.Base64,
});
