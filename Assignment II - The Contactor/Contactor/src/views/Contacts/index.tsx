import React, { useEffect, useState } from 'react';
import { View, Text, TouchableHighlight } from 'react-native';
import { v4 as uuidv4 } from 'uuid';
import { useNavigation } from '@react-navigation/native';
import AddContact from '../../components/AddContact';
import ContactList from '../../components/ContactList';
import Search from '../../components/Search';
import AddImageModal from '../../components/AddImageModal';
import IContact from '../../models';
import styles from './styles';

import data from '../../resources/data.json';
import * as fileService from '../../services/ContactService';
import * as ImageService from '../../services/ImageService';
import * as ImageFileService from '../../services/ImageFileService';

const Contacts = () => {
  const initialContact = {
    id: '',
    name: '',
    phoneNumber: '',
    image: '',
  };

  const { navigate } = useNavigation();
  const [contacts, setContacts] = useState<IContact[]>(data.contacts);
  const [searchString, setSearchString] = useState('');
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [selectedContact, setSelectedContact] = useState<IContact>(initialContact);
  const [isAddImageModalOpen, setAddImageModalOpen] = useState(false);
  const [images, setImages] = useState(data.images);

  useEffect(() => {
    (async () => {
      // const newContacts: IContact[] = await fileService.getAllContacts();
      // setContacts(contacts);
    })();
  }, []);

  const addEditContact = async (contact: IContact) => {
    if (selectedContact.id === '') {
      // CREATE
      contact.id = uuidv4();
      await fileService.saveContact(contact);
      setContacts([...contacts, contact]);
    } else {
      // EDIT
      contact.id = selectedContact.id;
      setContacts([...contacts.filter((x) => x.id !== selectedContact.id), contact]);

      setSelectedContact(initialContact);
    }
    navigate('Contacts' as never);
  };

  const editContact = (contact: IContact) => {
    setSelectedContact(contact);
    setIsAddModalOpen(true);
  };

  const filterAndSort = (contacts: IContact[]) => {
    const searchFilter = contacts
      .filter((word) => word.name.toUpperCase()
        .indexOf(searchString.toUpperCase()) !== -1)
      .sort((a, b) => ((a.name > b.name) ? 1 : ((b.name > a.name) ? -1 : 0)));

    return searchFilter;
  };

  const addImage = async (imageLocation) => {
    const newImage = await ImageFileService.addImage(imageLocation);
    // todo: finish this
  };

  const takePhoto = async () => {
    const imageLocation = await ImageService.takePhoto();
    if (imageLocation.length > 0) { await ImageFileService.addImage(imageLocation); }
  };

  return (
    <View
      style={styles.container}
    >
      <Search
        searchString={(text) => setSearchString(text)}
      />
      <TouchableHighlight
        style={styles.button}
        onPress={() => setIsAddModalOpen(true)}
      >
        <Text style={styles.buttonText}>Add Contact</Text>
      </TouchableHighlight>
      <ContactList
        contacts={filterAndSort(contacts)}
        editContact={(contact: IContact) => editContact(contact)}
      />
      <AddContact
        isOpen={isAddModalOpen}
        closeModal={() => setIsAddModalOpen(false)}
        addEditContact={(contact: IContact) => addEditContact(contact)}
        selectedContact={selectedContact}
        openImageModal={() => setAddImageModalOpen(true)}
      />
      <AddImageModal
        isOpen={isAddImageModalOpen}
        closeModal={() => setAddImageModalOpen(false)}
        takePhoto={() => takePhoto()}
        selectFromCameraRoll={() => { }}
      />
    </View>
  );
};

export default Contacts;
