import React, { useEffect, useState } from 'react';
import {
  View, Text, TouchableHighlight, TextInput,
} from 'react-native';
import { v4 as uuidv4 } from 'uuid';
import { useNavigation } from '@react-navigation/native';
import AddContact from '../../components/AddContact';
import ContactList from '../../components/ContactList';
import Search from '../../components/Search';
import AddImageModal from '../../components/AddImageModal';
import IContact from '../../models';
import styles from './styles';

import data from '../../resources/data.json';
import * as ImageService from '../../services/ImageService';

const Contacts = () => {
  const initialContact = {
    id: '',
    name: '',
    phoneNumber: '',
    image: '',
  };

  const { navigate } = useNavigation();
  const [contacts, setContacts] = useState<IContact[]>(data.contacts);
  const [displayContacts, setDisplayContacts] = useState<IContact[]>(contacts);
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [selectedContact, setSelectedContact] = useState<IContact>(initialContact);
  const [isAddImageModalOpen, setAddImageModalOpen] = useState(false);

  useEffect(() => {
    setDisplayContacts(contacts);
  }, []);

  const addEditContact = (contact: IContact) => {
    if (selectedContact.id === '') {
      // CREATE
      contact.id = uuidv4();
      setContacts([...contacts, contact]);
      setDisplayContacts(contacts);
    } else {
      // EDIT
      contact.id = selectedContact.id;
      setContacts([...contacts.filter((x) => x.id !== selectedContact.id), contact]);
      setDisplayContacts(contacts);
      setSelectedContact(initialContact);
    }
    navigate('Contacts' as never);
  };

  const editContact = (contact: IContact) => {
    setSelectedContact(contact);
    setIsAddModalOpen(true);
  };
  const search = (text: string) => {
    if (text === null) {
      setDisplayContacts(contacts);
    }

    const searchedFor = data.contacts.filter((word, index, arr) =>
    // console.log('this is word' + word.name)
    (
      word.name.indexOf(text) !== -1
    ));
    setDisplayContacts(searchedFor);
  };

  const takePhoto = async () => {
    const photo = await ImageService.takePhoto();
    console.log(photo);
  };

  return (
    <View>
      <TextInput
        onChangeText={(text) => search(text)}
      />
      <TouchableHighlight
        style={styles.button}
        onPress={() => setIsAddModalOpen(true)}
      >
        <Text style={styles.buttonText}>Add Contact</Text>
      </TouchableHighlight>
      <ContactList
        contacts={displayContacts.sort((a, b) => ((a.name > b.name) ? 1 : ((b.name > a.name) ? -1 : 0)))}
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
