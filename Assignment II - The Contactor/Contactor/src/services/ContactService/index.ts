import * as FileSystem from 'expo-file-system';
import IContact from '../../models';
import DummyData from '../../resources/data.json';

const contactsDirectory = `${FileSystem.documentDirectory}contacts`;

const onException = (cb: any, errorHandler?: any) => {
  try {
    cb();
  } catch (err) {
    console.error(err);
  }
};
export const saveContact = async (contact: IContact, file?: string) => {
  let fileName = file;

  if (fileName === undefined) {
    fileName = `${contact.name}-${contact.id}.json`;
  }

  await onException(() => {
    FileSystem.writeAsStringAsync(
      `${contactsDirectory}/${fileName}`,
      JSON.stringify(contact),
      { encoding: FileSystem.EncodingType.UTF8 },
    );
  });

  return fileName;
};

// TODO: finish
export const loadContact = async (fileName: string) => await onException(() => FileSystem.readAsStringAsync(`${contactsDirectory}/${fileName}`, {
  encoding: FileSystem.EncodingType.Base64,
}));

// TODO: finish
const setupDirectory = async () => {
  const dir = await FileSystem.getInfoAsync(contactsDirectory);
  if (!dir.exists) {
    await FileSystem.makeDirectoryAsync(contactsDirectory);
  }
};

// TODO: finish
export const getAllContacts = async () => {
  await setupDirectory();

  const result = await onException(() => FileSystem.readDirectoryAsync(contactsDirectory));
  return Promise.all(
    result.map(async (fileName: string) => ({
      name: fileName,
      type: 'contact',
      file: await loadContact(fileName),
    })),
  );
};
