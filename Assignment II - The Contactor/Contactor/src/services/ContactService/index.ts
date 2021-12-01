import * as FileSystem from 'expo-file-system';
import IContact from '../../models';
import DummyData from '../../resources/data.json';
import { v4 as uuidv4 } from 'uuid';
const contactsDirectory = `${FileSystem.documentDirectory}contacts`;

const onException = (cb: any, errorHandler?: any) => {
  try {
    cb();
  } catch (err) {
    console.error(err);
  }
};
export const saveContact = async (contact: IContact) => {
  let fileName: string = `${contact.name}-${contact.id}.json`;

  setupDirectory();

  await onException(() => {
    FileSystem.writeAsStringAsync(
      `${contactsDirectory}/${fileName}`,
      JSON.stringify(contact),
      { encoding: FileSystem.EncodingType.UTF8 }
    );
  });

  return fileName;
};

export const deleteContact = async (contact: IContact) => {
  let fileName = `${contact.name}-${contact.id}.json`;
  return await FileSystem.deleteAsync(`${contactsDirectory}/${fileName}`);
};

//TODO: finish
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
    try {
      await FileSystem.makeDirectoryAsync(contactsDirectory);
    } catch (e) {
      console.log(e);
    }
  }
};

export const importDummyContacts = async () => {
  await setupDirectory();
  const contacts: IContact[] = [];

  //save dummy data down to files
  for (const contact of DummyData) {
    //console.log(contact);
    await saveContact(contact);
    contacts.push(contact);
  }

  return contacts;
};

export const deleteContacts = () => {
  FileSystem.deleteAsync(contactsDirectory);
};

export const getAllContacts = async () => {
  await setupDirectory();

  const directory: string[] = await FileSystem.readDirectoryAsync(
    contactsDirectory
  );
  const contacts: IContact[] = [];

  for (const file of directory) {
    try {
      //console.log(file);
      const content = await FileSystem.readAsStringAsync(
        `${contactsDirectory}/${file}`
      );
      contacts.push(JSON.parse(content));
    } catch (e) {
      console.log(e);
    }
  }

  return contacts;
};
