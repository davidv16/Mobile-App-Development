import * as FileSystem from 'expo-file-system';
import IContact from '../../models';
import DummyData from '../../resources/data.json';
const contactsDirectory = `${FileSystem.documentDirectory}contacts`;

const onException = (cb: any, errorHandler?: any) => {
  try {
    return cb();
  } catch (err) {
    if (errorHandler) {
      return errorHandler(err);
    }
    console.error(err);
  }
};
export const saveContact = async (contact: IContact, fileName?: string) => {
  //let filename = file;

  if (fileName === null) {
    fileName = `${contact.name}-${contact.id}.json`;
  }

  await onException(() =>
    FileSystem.writeAsStringAsync(
      `${contactsDirectory}/${fileName}`,
      JSON.stringify(contact),
      { encoding: FileSystem.EncodingType.UTF8 }
    )
  );

  return fileName;
};

export const loadContact = async (fileName: string) => {
  return await onException(() =>
    FileSystem.readAsStringAsync(`${contactsDirectory}/${fileName}`, {
      encoding: FileSystem.EncodingType.Base64,
    })
  );
};

const setupDirectory = async () => {
  const dir = await FileSystem.getInfoAsync(contactsDirectory);
  if (!dir.exists) {
    await FileSystem.makeDirectoryAsync(contactsDirectory);
  }
};

export const getAllContacts = async () => {
  await setupDirectory();

  const result = await onException(() =>
    FileSystem.readDirectoryAsync(contactsDirectory)
  );
  return Promise.all(
    result.map(async (fileName: string) => {
      return {
        name: fileName,
        type: 'contact',
        file: await loadContact(fileName),
      };
    })
  );
};
