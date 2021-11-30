import React from 'react';
import { View, FlatList } from 'react-native';
import IContact from '../../models';

import Contact from '../Contact';
import styles from './styles';

interface Props {
    contacts: IContact[]
}

const ContactList = ({ contacts }: Props) => (
  <View>
    <FlatList
      numColumns={1}
      data={contacts.sort((a, b) => ((a.name > b.name) ? 1 : ((b.name > a.name) ? -1 : 0)))}
      renderItem={({ item }) => (
        <Contact
          contact={item}
        />
      )}
      keyExtractor={(contact) => contact.id}
    />
  </View>
);

export default ContactList;
