import React, { useEffect, useState } from 'react';
import {
    Alert, View, Text, TouchableHighlight,
} from 'react-native';
import { v4 as uuidv4 } from 'uuid';
import { useNavigation } from '@react-navigation/native';
import AddContact from '../../components/AddContact';
import ContactList from '../../components/ContactList';
import Search from '../../components/Search';
import IContact from '../../models';
import styles from './styles';
import * as fileService from '../../services/ContactService';
import * as phoneContacts from 'expo-contacts';

const Contacts = () => {
    const initialContact = {
        id: '',
        name: '',
        phoneNumber: '',
        image: '',
    };

    const { navigate } = useNavigation();
    const [contacts, setContacts] = useState<IContact[]>([]);
    const [searchString, setSearchString] = useState('');
    const [isAddModalOpen, setIsAddModalOpen] = useState(false);
    const [selectedContact, setSelectedContact] = useState<IContact>(initialContact);

    useEffect(() => {
        (async () => {
            await getAllContacts();
        })();
    }, []);

    const importContacts = async () => {
        const { status } = await phoneContacts.requestPermissionsAsync();
        if (status === 'granted') {
            const { data } = await phoneContacts.getContactsAsync({
                fields: [phoneContacts.Fields.ID, phoneContacts.Fields.Name, phoneContacts.Fields.Image, phoneContacts.Fields.PhoneNumbers],
            });

            let i = 0;
            if (data.length > 0) {
                for (const element of data) {
                    i++;
                    if (i > 20) {
                        break;
                    }
                    const newContact: IContact = {
                        id: '',
                        name: element.name,
                        image: element.image?.uri === undefined ? 'https://images.prismic.io/indiecampers-demo/9f34856d-05da-4afb-832f-d3a36de83b7f_Hero---Kinderdijk.jpg' : element.image.uri,
                        // @ts-ignore
                        phoneNumber: element.phoneNumbers[0].number === undefined ? '' : element.phoneNumbers[0].number,
                    };
                    addEditContact(newContact);

                }
            }
        }
        setContacts(await fileService.getAllContacts());
        navigate('Contacts' as never);
    }

    const getAllContacts = async () => {
        let contacts: IContact[] = await fileService.getAllContacts();

        Alert.alert(
            'Hey There!',
            'Do you wanna to import dummy contacts, phone contacts or flush the file system?',
            [
                {
                    text: 'phone',
                    onPress: async () => {
                        importContacts();
                    },
                },
                {
                    text: 'dummy',
                    onPress: async () => {
                        contacts = await fileService.importDummyContacts();
                        setContacts(contacts);
                    },
                },
                {
                    text: 'flush',
                    onPress: async () => {
                        fileService.deleteContacts();
                        setContacts([]);
                    },
                },
            ],
            {
                cancelable: true,
            },
        );
        setContacts(contacts);
        navigate('Contacts' as never);
    };

    const addEditContact = async (contact: IContact) => {
        if (contact.id) {
            // EDIT
            // remove before recreating
            await fileService.deleteContact(selectedContact);
            await fileService.saveContact(contact);
            setContacts([...contacts.filter((x) => x.id !== selectedContact.id), contact]);
            setSelectedContact(initialContact);
        } else {
            // CREATE
            const newContact = { ...contact, id: uuidv4() };
            await fileService.saveContact(newContact);
            console.log(newContact)
            setContacts([...contacts, newContact]);
            setSelectedContact(initialContact);
        }
        navigate('Contacts' as never);
    };

    const editContact = (contact: IContact) => {
        setSelectedContact(contact);
        setIsAddModalOpen(true);
    };


    const removeContact = async (contact: IContact) => {
        await fileService.deleteContact(contact);
        const newContacts = contacts.filter((x) => x.id !== contact.id);
        setContacts([]);
        setContacts(newContacts);
        navigate('Contacts' as never);
    }

    const filterAndSort = (contacts: IContact[]) => {
        const searchFilter = contacts
            .filter((word) => word.name.toUpperCase()
                .indexOf(searchString.toUpperCase()) !== -1)
            .sort((a, b) => ((a.name > b.name) ? 1 : ((b.name > a.name) ? -1 : 0)));

        return searchFilter;
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
                deleteContact={(contact: IContact) => removeContact(contact)}
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
