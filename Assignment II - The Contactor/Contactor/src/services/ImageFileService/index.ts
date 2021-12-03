import * as FileSystem from 'expo-file-system';

const imageDirectory = `${FileSystem.documentDirectory}images`;

const copyFile = async (file: string, newLocation: string) => {
  await FileSystem.copyAsync({
    from: file,
    to: newLocation,
  });
};

const loadImage = async (fileName: string) => FileSystem.readAsStringAsync(`${imageDirectory}/${fileName}`, {
  encoding: FileSystem.EncodingType.Base64,
});

// eslint-disable-next-line import/prefer-default-export
export const addImage = async (imageLocation: string) => {
  const folderSplit = imageLocation.split('/');
  const fileName = folderSplit[folderSplit.length - 1];

  await copyFile(imageLocation, `${imageDirectory}/${fileName}`);

  return {
    name: fileName,
    type: 'image',
    file: await loadImage(fileName),
    location: `${imageDirectory}/${fileName}`,
  };
};
