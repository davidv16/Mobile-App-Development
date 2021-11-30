import React from 'react';
import { View, FlatList } from 'react-native';
import IContact from '../../models';

import Contact from '../Contact';
import styles from './styles';

interface Props {
    contacts: IContact[],
    editContact: (contact: IContact) => void
}

const ContactList = ({ contacts, editContact }: Props) => (
    <View>
        <FlatList
            numColumns={1}
            data={contacts}
            renderItem={({ item }) => (
                <Contact
                    contact={item}
                    editContact={editContact}
                />
            )}
            keyExtractor={(contact) => contact.id}
        />
    </View>
);

export default ContactList;
