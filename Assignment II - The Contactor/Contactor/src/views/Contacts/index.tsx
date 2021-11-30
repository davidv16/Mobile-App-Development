import React, { useState } from 'react';
import { View, Text, TouchableHighlight, TextInput } from 'react-native';
import AddContact from '../../components/AddContact';
import ContactList from '../../components/ContactList';
import Search from '../../components/Search';
import IContact from '../../models';
import { v4 as uuidv4 } from 'uuid';
import styles from './styles';
import { useNavigation } from '@react-navigation/native';

import data from '../../resources/data.json';

const Contacts = () => {
    const initialContact = {
        id: '',
        name: '',
        phoneNumber: '',
        image: '',
    };

    const { navigate } = useNavigation();
    const [contacts, setContacts] = useState<IContact[]>(data.contacts);
    const [isAddModalOpen, setIsAddModalOpen] = useState(false);
    const [selectedContact, setSelectedContact] = useState<IContact>(initialContact);

    const addEditContact = (contact: IContact) => {
        if (selectedContact.id === '') {
            // CREATE
            contact.id = uuidv4();
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
    const search = (text:string) => {
        const searchedFor = data.contacts.filter((word, index, arr)=>{
            // console.log('this is word' + word.name)
            return( 
            word.name.indexOf(text) !== -1
            )
            
        })
        setContacts(searchedFor)
    }


    return (
        <View>
            <TextInput
            onChangeText={text => search(text)}
            />
            <TouchableHighlight
                style={styles.button}
                onPress={() => setIsAddModalOpen(true)}
            >
                <Text style={styles.buttonText}>Add Contact</Text>
            </TouchableHighlight>
            <ContactList
                contacts={contacts.sort()}
                editContact={(contact: IContact) => editContact(contact)}

            />
            <AddContact
                isOpen={isAddModalOpen}
                closeModal={() => setIsAddModalOpen(false)}
                addEditContact={(contact: IContact) => addEditContact(contact)}
                selectedContact={selectedContact}
            />
        </View>
    );
};

export default Contacts;
